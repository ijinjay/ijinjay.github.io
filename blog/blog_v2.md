author: Jin Jay
title: 个人网站V2
Date: 2023-07
description: 个人网站V2重构记录。基于refinedev的示例开发。
keywords: blog,refine

# 背景
前端技术发展迅速，有一大批的框架可以使用，减轻开发人员的负担，提升效率。过去我自己的个人博客混合html, js 和 css ，纯手工制作，改动比较难，可复用性也很弱。制作了多个模版，并用python2 来进行模版关键词替换来实现，部署的时候需要生成很多重复的html静态文件，占用较多存储。平时开发多在后端，前端技能树也希望能更新一下。所以对个人博客进行一次整体的更新。

比较 | 旧博客V1 | V2
----|---------|----
技术栈 | html, js, css | react, refine
部署 | 生成静态html文件 | 生成少量json文件
可复用性 | 低 | 高
开发效率 | 低 | 高

# 技术选型
- 基于react 的 [refine.dev](https://refine.dev/)

# 重构细节

## 1. 项目初始化
```
npm create refine-app@latest -- -o refine-antd blog
npm run dev
```

## 2. 博客模版
Refine官方构建了一个类似 medium 的应用 [https://refine-real-world.netlify.app/](https://refine-real-world.netlify.app/)，此处我们复用一下。项目地址在： [https://github.com/refinedev/real-world-example](https://github.com/refinedev/real-world-example)

复用的主要是 Header, Footer, Banner 这些组件。注意css文件位置为: [https://demo.productionready.io/main.css](https://demo.productionready.io/main.css)

下载该 css 后可以按需修改，比如主颜色等。

## 3. 博客数据
博客均使用的markdown编写，所以较为容易在这里使用。需要针对性的修改对应的接口。

```typescript
export interface IArticle {
  slug: string;
  createdAt: string;
  description: string;
  tagList: string[];
  title: string;
}
```

其中`slug`保存文件名称(唯一ID)，用于通过路径获取对应的文章内容。`tagList`用于标记文章的标签，方便分类。其它为可以展示的内容。

### 3.1 解析博客文件，生成列表数据
上述接口为展示博客列表的接口，需要解析博客文件，生成对应的数据。这里基于python的markdown库来实现。在每次部署的时候解析一次，生成对应的json文件，供前端使用。

首先，博客需要在正式内容前添加如下meta信息:
```yaml
author: ijinjay
title: test
date: 2023-07
description: test description
keywords: tag1
          tag2
          tag3


```
其中keywords会被解析为tagList，其它为对应的属性。

解析脚本如下：
```python
import os
import markdown

class BlogMeta:
    def __init__(self, filename: str, base_path: str=""):
        self.base_path = base_path
        self.slug = filename
        self.parse()
    
    def parse(self):
        md = markdown.Markdown(extensions=['meta'])
        with open(os.path.join(self.base_path, self.slug), "r") as f:
            md.convert(f.read())
        meta = md.Meta
        self.title = meta.get('title', '')[0]
        self.description = meta.get('description', '')[0]
        self.keywords = meta.get('keywords', [])
        self.date = datetime.strptime(meta.get('date', '')[0], "%Y-%m")
        self.createdAt = self.date.strftime("%Y-%m-%d")
        self.tagList = self.keywords
```

在refine中使用上述列表信息，只需要调用`useTable`即可，如下代码会访问`/blog-post`资源，并解析为 `IArticle` 对象：
```typescript
import {useTable} from "@refinedev/core";
const {tableQueryResult, setCurrent, setFilters} = useTable<IArticle>({
    resource: "blog-post",
});
```

接着可以使用`tableQueryResult`中的数据进行展示，比如：
```typescript
{tableQueryResult?.data?.data.map((item) => {
    return (
    <ArticleList
        key={item.slug}
        slug={item.slug}
        title={item.title}
        createdAt={dayjs(item.createdAt).format("MMM DD, YYYY")}
        description={item.description}
        tagList={item.tagList}
    />
    );
})}
```

展示效果可以在`ArticleList`中进行自定义修改。

### 3.2 解析博客文件，生成详情数据
每个博客对应一个markdown文件，展示的时候，通过传入对应的文件名，由web端自动加载原始markdown文件，使用`react-markdown`进行解析，展示。

不过，`react-markdown` 不支持meta信息的解析，所以需要自己实现。

```typescript
const META_RE = RegExp(/^[ ]{0,3}(?<key>[A-Za-z0-9_-]+):\s*(?<value>.*)/);
const META_MORE_RE = RegExp(/^[ ]{4,}(?<value>.*)/);
const BEGIN_RE = RegExp(/^-{3}(\s.*)?/);
const END_RE = RegExp(/^(-{3}|\.{3})(\s.*)?/);

function extractMeta(text: string): [{ [key: string]: [string] }, string] {
  var lines = text.split("\n");
  const meta: { [key: string]: [string] } = {};
  let key: string | null = null;
  if (lines.length > 0 && BEGIN_RE.test(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0) {
    const line = lines.shift()!;
    const m1 = META_RE.exec(line);
    if (line.trim() === "" || END_RE.test(line)) {
      break; // blank line or end of YAML header - done
    }
    if (m1) {
      key = m1.groups?.key?.toLowerCase().trim() ?? null;
      const value = m1.groups?.value?.trim() ?? "";
      if (key) {
        if (meta[key]) {
          meta[key].push(value);
        } else {
          meta[key] = [value];
        }
      }
    } else {
      const m2 = META_MORE_RE.exec(line);
      if (m2 && key) {
        // Add another line to existing key
        const value = m2.groups?.value?.trim() ?? "";
        meta[key].push(value);
      } else {
        lines.unshift(line);
        break; // no meta data - done
      }
    }
  }
  return [meta, lines.join("\n")];
}
```

针对代码，也需要额外处理，使用`react-syntax-highlighter`进行处理，改进后的Markdown解析器如下，默认高亮语法使用`bash`，可以自行修改，使用`rehypeRaw`来支持html标签。不过该实现还是有些问题，比如：`<div> *a* </div>` 中的`*a*` 不会经过markdown处理。

```typescript
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { RefineFieldMarkdownProps } from "@refinedev/antd";
import { materialDark as ColorTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

export const MarkdownField: React.FC<RefineFieldMarkdownProps> = ({
  value = "",
}) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}

      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "language-bash");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              showLineNumbers={true}
              children={String(children).replace(/\n$/, "")}
              style={ColorTheme}
              language={match[1].toLowerCase()}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      children={value}
    />
  );
};
```

### 3.3 支持数学公式

使用`better-react-mathjax`来支持数学公式，需要在`MarkdownField`中添加如下代码：
```typescript
import { MathJaxContext } from "better-react-mathjax";

const mathjaxConfig = {
    tex: {
        inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
        ],
        displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
        ],
        processEscapes: false,
        tagSide: "right",
        tagIndent: ".8em",
        multlineWidth: "85%",
        tags: "ams",
        autoload: {
        color: [],
        colorv2: ["color"],
        },
        packages: { "[+]": ["noerrors"] },
    },
    options: {
        ignoreHtmlClass: "tex2jax_ignore",
        processHtmlClass: "tex2jax_process",
    },
    loader: {
        load: ["[tex]/noerrors"],
    },
};

return  (<MathJaxContext config={mathjaxConfig}>
              <MarkdownField value={content} />
        </MathJaxContext>);
```

至此，每个博客的展示就完成了。支持了代码高亮，markdown内部html标签和数学公式。

## 4. 博客部署
部署为Github Pages, 参考 [https://github.com/gitname/react-gh-pages](https://github.com/gitname/react-gh-pages)

安装`gh-pages`:
```bash
npm install --save-dev gh-pages
```

配置`package.json`
```yaml
"homepage": "https://{yourname}.github.io",

"scripts": {
   "predeploy": "refine build",
   "deploy": "gh-pages -d build -t true",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

运行 `npm run deploy` 会调用 `refine build` 来生成静态文件，然后将静态文件推送到 `gh-pages` 分支。文件夹`public` 下的所有文件也会打包到该目录下。

注意需要添加 `-t true` 选项，可以将 `build/.nojekll` 文件添加到 `gh-pages` 分支，来禁止github默认的jekyll处理。


# 小结
个人网站V2重构完成，基于refinedev的示例开发，可以很方便的进行二次开发。
