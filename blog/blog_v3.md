---
title: 个人网站 V3 — HeroUI + Vite + 暗色主题
description: 从 CRA + Ant Design 全面升级至 Vite + HeroUI v3 + Tailwind v4，新增搜索、暗色主题自适应、重构 Timeline 等。
date: 2026-08-16
keywords: blog, refine, HeroUI, Vite, Tailwind, dark mode, react 19
---

## 概述

本次博客站点完成了一次比较彻底的技术栈升级，主要变化如下：

| 项目 | 旧版 (V2) | 新版 (V3) |
|------|-----------|-----------|
| 构建工具 | Create React App | **Vite v8** |
| UI 框架 | Ant Design 5 | **HeroUI v3** |
| CSS | Bootstrap 4 alpha + 自定义 | **Tailwind CSS v4** |
| React | 18 | **19** |
| 搜索 | 无 | **Fuse.js 全文搜索** |
| 深色模式 | 无 | **跟随系统 prefers-color-scheme** |

## 技术细节

### CRA → Vite

Create React App 已停止维护。迁移到 Vite 后，冷启动从 ~30s 降至 **< 200ms**，HMR 几乎即时。

配置要点：

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { components: "src/components", ... } },
  build: { outDir: "build" },
});
```

### HeroUI v3 + Tailwind v4

HeroUI v3 依赖 React 19 和 Tailwind v4，安装时需补齐 `react-aria-components`、`@react-aria/ssr` 等 peer deps。

Tailwind v4 CSS 入口：

```css
@import "tailwindcss";
@import "@heroui/styles";
@source "../node_modules/@heroui";
```

### Fuse.js 客户端搜索

博客是完全静态站点，无后端。通过 Fuse.js 在客户端对 `blog-posts.json` 做模糊搜索，支持：

- 标题权重 0.6
- 描述权重 0.25
- 标签权重 0.15
- 键盘 `⌘K` / `Ctrl+K` 触发
- 方向键导航，`Enter` 打开

```ts
const fuse = new Fuse(posts, {
  keys: [
    { name: "title", weight: 0.6 },
    { name: "description", weight: 0.25 },
    { name: "tagList", weight: 0.15 },
  ],
  threshold: 0.4,
});
```

### 暗色主题

使用 Tailwind v4 的 `dark:` variant，自动响应 `prefers-color-scheme: dark`，无需手动切换按钮。文章排版区（prose）单独处理暗色适配。

### Timeline 重构

原 Timeline 是一个嵌入 mxGraph SVG 的 `<iframe>`，加载慢、样式不可控。
新版用 React 组件直接渲染，支持深色模式，且点击可跳转公司官网：

```tsx
const EVENTS = [
  { period: "2024.07 — Present", role: "R&D Director", org: "SZJ-AI", ... },
  // ...
];
```

## 总结

V3 的主要收益：

1. **构建速度** 大幅提升（Vite vs webpack）
2. **UI 更现代**：HeroUI v3 组件库 + Tailwind v4
3. **搜索能力**：静态博客也有全文搜索
4. **深色适配**：跟随系统，无需额外操作
5. **Timeline 清晰**：原生 React 组件取代嵌入图表
