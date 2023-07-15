(()=>{var la="144",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Un={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,Sa=1,_l=2;var $o=1,Bi=2,Ti=3,li=0,Te=1,fn=2,pn=0,ri=1,Aa=2,Ea=3,Ta=4,vl=5,ni=100,yl=101,bl=102,Ca=103,La=104,Ml=200,wl=201,Sl=202,Al=203,Zo=204,Jo=205,El=206,Tl=207,Cl=208,Ll=209,Pl=210,Rl=0,Il=1,Dl=2,Ar=3,Nl=4,Fl=5,Ol=6,zl=7,ca=0,Ul=1,Bl=2,je=0,kl=1,Vl=2,Hl=3,ki=4,Gl=5,jo=300,ci=301,hi=302,Er=303,Tr=304,Us=306,Cr=1e3,Ne=1001,Lr=1002,ue=1003,Pa=1004;var Ra=1005;var le=1006,Wl=1007;var Bs=1008;var Rn=1009,Xl=1010,ql=1011,Ko=1012,Yl=1013,En=1014,Tn=1015,Pi=1016,$l=1017,Zl=1018,ai=1020,Jl=1021,jl=1022,Ve=1023,Kl=1024,Ql=1025,Ln=1026,ui=1027,tc=1028,ec=1029,nc=1030,ic=1031,sc=1033,qs=33776,Ys=33777,$s=33778,Zs=33779,Ia=35840,Da=35841,Na=35842,Fa=35843,rc=36196,Oa=37492,za=37496,Ua=37808,Ba=37809,ka=37810,Va=37811,Ha=37812,Ga=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,ja=37821,Ka=36492;var _s=2300,vs=2301,Js=2302,Qa=2400,to=2401,eo=2402;var In=3e3,zt=3001,ac=3200,oc=3201,Qo=0,lc=1;var Ze="srgb",Cn="srgb-linear";var js=7680;var cc=519,no=35044;var io="300 es",Pr=1035,He=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ks=Math.PI/180,Rr=180/Math.PI;function Vi(){let a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(se[a&255]+se[a>>8&255]+se[a>>16&255]+se[a>>24&255]+"-"+se[t&255]+se[t>>8&255]+"-"+se[t>>16&15|64]+se[t>>24&255]+"-"+se[e&63|128]+se[e>>8&255]+"-"+se[e>>16&255]+se[e>>24&255]+se[n&255]+se[n>>8&255]+se[n>>16&255]+se[n>>24&255]).toLowerCase()}function de(a,t,e){return Math.max(t,Math.min(e,a))}function hc(a,t){return(a%t+t)%t}function Qs(a,t,e){return(1-e)*a+e*t}function so(a){return(a&a-1)===0&&a!==0}function Ir(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Yi(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ye(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var yt=class{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class{constructor(){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],x=i[6],w=i[1],E=i[4],y=i[7],S=i[2],C=i[5],F=i[8];return s[0]=o*p+r*w+c*S,s[3]=o*f+r*E+c*C,s[6]=o*x+r*y+c*F,s[1]=l*p+h*w+d*S,s[4]=l*f+h*E+d*C,s[7]=l*x+h*y+d*F,s[2]=u*p+m*w+g*S,s[5]=u*f+m*E+g*C,s[8]=u*x+m*y+g*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*s*h+n*r*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=h*o-r*l,u=r*c-h*s,m=l*s-o*c,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return t[0]=d*p,t[1]=(i*l-h*n)*p,t[2]=(r*n-i*o)*p,t[3]=u*p,t[4]=(h*e-i*c)*p,t[5]=(i*s-r*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*r)+o+t,-i*l,i*c,-i*(-l*o+c*r)+r+e,0,0,1),this}scale(t,e){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){let e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],r=i[6],c=i[1],l=i[4],h=i[7];return i[0]=e*s+n*c,i[3]=e*o+n*l,i[6]=e*r+n*h,i[1]=-n*s+e*c,i[4]=-n*o+e*l,i[7]=-n*r+e*h,this}translate(t,e){let n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};function tl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function Ri(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Pn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function xs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var tr={[Ze]:{[Cn]:Pn},[Cn]:{[Ze]:xs}},Pe={legacyMode:!0,get workingColorSpace(){return Cn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.legacyMode||t===e||!t||!e)return a;if(tr[t]&&tr[t][e]!==void 0){let n=tr[t][e];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},Re={h:0,s:0,l:0},$i={h:0,s:0,l:0};function er(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}function Zi(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Cn){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Cn){if(t=hc(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=er(o,s,t+1/3),this.g=er(o,s,t),this.b=er(o,s,t-1/3)}return Pe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s,o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Pe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Ze){let n=el[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Pe.fromWorkingColorSpace(Zi(this,Qt),t),de(Qt.r*255,0,255)<<16^de(Qt.g*255,0,255)<<8^de(Qt.b*255,0,255)<<0}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Cn){Pe.fromWorkingColorSpace(Zi(this,Qt),e);let n=Qt.r,i=Qt.g,s=Qt.b,o=Math.max(n,i,s),r=Math.min(n,i,s),c,l,h=(r+o)/2;if(r===o)c=0,l=0;else{let d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Cn){return Pe.fromWorkingColorSpace(Zi(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=Ze){return Pe.fromWorkingColorSpace(Zi(this,Qt),t),t!==Ze?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Re),Re.h+=t,Re.s+=e,Re.l+=n,this.setHSL(Re.h,Re.s,Re.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Re),t.getHSL($i);let n=Qs(Re.h,$i.h,e),i=Qs(Re.s,$i.s,e),s=Qs(Re.l,$i.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};St.NAMES=el;var Hn,ys=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hn===void 0&&(Hn=Ri("canvas")),Hn.width=t.width,Hn.height=t.height;let n=Hn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ri("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Pn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bs=class{constructor(t=null){this.isSource=!0,this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(nr(i[o].image)):s.push(nr(i[o]))}else s=nr(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function nr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?ys.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uc=0,me=class extends He{constructor(t=me.DEFAULT_IMAGE,e=me.DEFAULT_MAPPING,n=Ne,i=Ne,s=le,o=Bs,r=Ve,c=Rn,l=1,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uc++}),this.uuid=Vi(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};me.DEFAULT_IMAGE=null;me.DEFAULT_MAPPING=jo;var Zt=class{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],g=c[9],p=c[2],f=c[6],x=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,y=(m+1)/2,S=(x+1)/2,C=(h+u)/4,F=(d+p)/4,_=(g+f)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=C/n,s=F/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=_/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=F/s,i=_/s),this.set(n,i,s,e),this}let w=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(d-p)/w,this.z=(u-h)/w,this.w=Math.acos((l+m+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ke=class extends He{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:le,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ms=class extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(r===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||c!==u||l!==m||h!==g){let f=1-r,x=c*u+l*m+h*g+d*p,w=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){let S=Math.sqrt(E),C=Math.atan2(S,x*w);f=Math.sin(f*C)/S,r=Math.sin(r*C)/S}let y=r*w;if(c=c*f+u*y,l=l*f+m*y,h=h*f+g*y,d=d*f+p*y,f===1-r){let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let r=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*d+c*m-l*u,t[e+1]=c*g+h*u+l*d-r*m,t[e+2]=l*g+h*m+r*u-c*d,t[e+3]=h*g-r*d-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,c=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>d){let m=2*Math.sqrt(1+n-r-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>d){let m=2*Math.sqrt(1+r-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+i*l-s*c,this._y=i*h+o*c+s*r-n*l,this._z=s*h+o*l+n*c-i*r,this._w=o*h-n*r-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-r*r;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ro.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,c=t.w,l=c*e+o*i-r*n,h=c*n+r*e-s*i,d=c*i+s*n-o*e,u=-s*e-o*n-r*i;return this.x=l*c+u*-s+h*-r-d*-o,this.y=h*c+u*-o+d*-s-l*-r,this.z=d*c+u*-r+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,c=e.z;return this.x=i*c-s*r,this.y=s*o-n*c,this.z=n*r-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ir=new P,ro=new Oe,Dn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=t.length;c<l;c+=3){let h=t[c],d=t[c+1],u=t[c+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let c=0,l=t.count;c<l;c++){let h=t.getX(c),d=t.getY(c),u=t.getZ(c);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)bn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(bn)}else n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox),sr.applyMatrix4(t.matrixWorld),this.union(sr);let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Ji.subVectors(this.max,Si),Gn.subVectors(t.a,Si),Wn.subVectors(t.b,Si),Xn.subVectors(t.c,Si),rn.subVectors(Wn,Gn),an.subVectors(Xn,Wn),Mn.subVectors(Gn,Xn);let e=[0,-rn.z,rn.y,0,-an.z,an.y,0,-Mn.z,Mn.y,rn.z,0,-rn.x,an.z,0,-an.x,Mn.z,0,-Mn.x,-rn.y,rn.x,0,-an.y,an.x,0,-Mn.y,Mn.x,0];return!rr(e,Gn,Wn,Xn,Ji)||(e=[1,0,0,0,1,0,0,0,1],!rr(e,Gn,Wn,Xn,Ji))?!1:(ji.crossVectors(rn,an),e=[ji.x,ji.y,ji.z],rr(e,Gn,Wn,Xn,Ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return bn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},We=[new P,new P,new P,new P,new P,new P,new P,new P],bn=new P,sr=new Dn,Gn=new P,Wn=new P,Xn=new P,rn=new P,an=new P,Mn=new P,Si=new P,Ji=new P,ji=new P,wn=new P;function rr(a,t,e,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){wn.fromArray(a,s);let r=i.x*Math.abs(wn.x)+i.y*Math.abs(wn.y)+i.z*Math.abs(wn.z),c=t.dot(wn),l=e.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>r)return!1}return!0}var dc=new Dn,ao=new P,Ki=new P,ar=new P,di=class{constructor(t=new P,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){ar.subVectors(t,this.center);let e=ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(ar.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Ki.set(0,0,1).multiplyScalar(t.radius):Ki.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(ao.copy(t.center).add(Ki)),this.expandByPoint(ao.copy(t.center).sub(Ki)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xe=new P,or=new P,Qi=new P,on=new P,lr=new P,ts=new P,cr=new P,ws=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.direction).multiplyScalar(e).add(this.origin),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){or.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),on.copy(this.origin).sub(or);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),r=on.dot(this.direction),c=-on.dot(Qi),l=on.lengthSq(),h=Math.abs(1-o*o),d,u,m,g;if(h>0)if(d=o*c-r,u=o*r-c,g=s*h,d>=0)if(u>=-g)if(u<=g){let p=1/h;d*=p,u*=p,m=d*(d+o*u+2*r)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Qi).multiplyScalar(u).add(or),m}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);let n=Xe.dot(this.direction),i=Xe.dot(Xe)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),r=n-o,c=n+o;return r<0&&c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),d>=0?(r=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,n,i,s){lr.subVectors(e,t),ts.subVectors(n,t),cr.crossVectors(lr,ts);let o=this.direction.dot(cr),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;on.subVectors(this.origin,t);let c=r*this.direction.dot(ts.crossVectors(on,ts));if(c<0)return null;let l=r*this.direction.dot(lr.cross(on));if(l<0||c+l>o)return null;let h=-r*on.dot(cr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class{constructor(){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,c,l,h,d,u,m,g,p,f){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=r,x[13]=c,x[2]=l,x[6]=h,x[10]=d,x[14]=u,x[3]=m,x[7]=g,x[11]=p,x[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/qn.setFromMatrixColumn(t,0).length(),s=1/qn.setFromMatrixColumn(t,1).length(),o=1/qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,m=o*d,g=r*h,p=r*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=u-p*l,e[9]=-r*c,e[2]=p-u*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,m=c*d,g=l*h,p=l*d;e[0]=u+p*r,e[4]=g*r-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=p+u*r,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,m=c*d,g=l*h,p=l*d;e[0]=u-p*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=p-u*r,e[2]=-o*l,e[6]=r,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,m=o*d,g=r*h,p=r*d;e[0]=c*h,e[4]=g*l-m,e[8]=u*l+p,e[1]=c*d,e[5]=p*l+u,e[9]=m*l-g,e[2]=-l,e[6]=r*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,m=o*l,g=r*c,p=r*l;e[0]=c*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){let u=o*c,m=o*l,g=r*c,p=r*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+p,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fc,t,pc)}lookAt(t,e,n){let i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),ln.crossVectors(n,be),ln.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),ln.crossVectors(n,be)),ln.normalize(),es.crossVectors(be,ln),i[0]=ln.x,i[4]=es.x,i[8]=be.x,i[1]=ln.y,i[5]=es.y,i[9]=be.y,i[2]=ln.z,i[6]=es.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],x=n[14],w=n[3],E=n[7],y=n[11],S=n[15],C=i[0],F=i[4],_=i[8],T=i[12],R=i[1],$=i[5],Z=i[9],U=i[13],I=i[2],G=i[6],Y=i[10],K=i[14],W=i[3],N=i[7],z=i[11],et=i[15];return s[0]=o*C+r*R+c*I+l*W,s[4]=o*F+r*$+c*G+l*N,s[8]=o*_+r*Z+c*Y+l*z,s[12]=o*T+r*U+c*K+l*et,s[1]=h*C+d*R+u*I+m*W,s[5]=h*F+d*$+u*G+m*N,s[9]=h*_+d*Z+u*Y+m*z,s[13]=h*T+d*U+u*K+m*et,s[2]=g*C+p*R+f*I+x*W,s[6]=g*F+p*$+f*G+x*N,s[10]=g*_+p*Z+f*Y+x*z,s[14]=g*T+p*U+f*K+x*et,s[3]=w*C+E*R+y*I+S*W,s[7]=w*F+E*$+y*G+S*N,s[11]=w*_+E*Z+y*Y+S*z,s[15]=w*T+E*U+y*K+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],x=t[15];return g*(+s*c*d-i*l*d-s*r*u+n*l*u+i*r*m-n*c*m)+p*(+e*c*m-e*l*u+s*o*u-i*o*m+i*l*h-s*c*h)+f*(+e*l*d-e*r*m-s*o*d+n*o*m+s*r*h-n*l*h)+x*(-i*r*h-e*c*d+e*r*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],x=t[15],w=d*f*l-p*u*l+p*c*m-r*f*m-d*c*x+r*u*x,E=g*u*l-h*f*l-g*c*m+o*f*m+h*c*x-o*u*x,y=h*p*l-g*d*l+g*r*m-o*p*m-h*r*x+o*d*x,S=g*d*c-h*p*c-g*r*u+o*p*u+h*r*f-o*d*f,C=e*w+n*E+i*y+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return t[0]=w*F,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*x-n*u*x)*F,t[2]=(r*f*s-p*c*s+p*i*l-n*f*l-r*i*x+n*c*x)*F,t[3]=(d*c*s-r*u*s-d*i*l+n*u*l+r*i*m-n*c*m)*F,t[4]=E*F,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*x+e*u*x)*F,t[6]=(g*c*s-o*f*s-g*i*l+e*f*l+o*i*x-e*c*x)*F,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*m+e*c*m)*F,t[8]=y*F,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*x-e*d*x)*F,t[10]=(o*p*s-g*r*s+g*n*l-e*p*l-o*n*x+e*r*x)*F,t[11]=(h*r*s-o*d*s-h*n*l+e*d*l+o*n*m-e*r*m)*F,t[12]=S*F,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*F,t[14]=(g*r*i-o*p*i-g*n*c+e*p*c+o*n*f-e*r*f)*F,t[15]=(o*d*i-h*r*i+h*n*c-e*d*c-o*n*u+e*r*u)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,c=t.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*c,l*c+i*r,0,l*r+i*c,h*r+n,h*c-i*o,0,l*c-i*r,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,r=e._z,c=e._w,l=s+s,h=o+o,d=r+r,u=s*l,m=s*h,g=s*d,p=o*h,f=o*d,x=r*d,w=c*l,E=c*h,y=c*d,S=n.x,C=n.y,F=n.z;return i[0]=(1-(p+x))*S,i[1]=(m+y)*S,i[2]=(g-E)*S,i[3]=0,i[4]=(m-y)*C,i[5]=(1-(u+x))*C,i[6]=(f+w)*C,i[7]=0,i[8]=(g+E)*F,i[9]=(f-w)*F,i[10]=(1-(u+p))*F,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=qn.set(i[0],i[1],i[2]).length(),o=qn.set(i[4],i[5],i[6]).length(),r=qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ie.copy(this);let l=1/s,h=1/o,d=1/r;return Ie.elements[0]*=l,Ie.elements[1]*=l,Ie.elements[2]*=l,Ie.elements[4]*=h,Ie.elements[5]*=h,Ie.elements[6]*=h,Ie.elements[8]*=d,Ie.elements[9]*=d,Ie.elements[10]*=d,e.setFromRotationMatrix(Ie),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){let r=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=c,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){let r=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-s),d=(e+t)*c,u=(n+i)*l,m=(o+s)*h;return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qn=new P,Ie=new Ht,fc=new P(0,0,0),pc=new P(1,1,1),ln=new P,es=new P,be=new P,oo=new Ht,lo=new Oe,Nn=class{constructor(t=0,e=0,n=0,i=Nn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],r=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(de(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(de(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lo.setFromEuler(this),this.setFromQuaternion(lo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Nn.DefaultOrder="XYZ";Nn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mc=0,co=new P,Yn=new Oe,qe=new Ht,ns=new P,Ai=new P,gc=new P,xc=new Oe,ho=new P(1,0,0),uo=new P(0,1,0),fo=new P(0,0,1),_c={type:"added"},po={type:"removed"},Xt=class extends He{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DefaultUp.clone();let t=new P,e=new Nn,n=new Oe,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ht},normalMatrix:{value:new fe}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Xt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xt.DefaultMatrixWorldAutoUpdate,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(t,e){return Yn.setFromAxisAngle(t,e),this.quaternion.premultiply(Yn),this}rotateX(t){return this.rotateOnAxis(ho,t)}rotateY(t){return this.rotateOnAxis(uo,t)}rotateZ(t){return this.rotateOnAxis(fo,t)}translateOnAxis(t,e){return co.copy(t).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ho,t)}translateY(t){return this.translateOnAxis(uo,t)}translateZ(t){return this.translateOnAxis(fo,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(Ai,ns,this.up):qe.lookAt(ns,Ai,this.up),this.quaternion.setFromRotationMatrix(qe),i&&(qe.extractRotation(i.matrixWorld),Yn.setFromRotationMatrix(qe),this.quaternion.premultiply(Yn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(_c)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(po)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(po)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,gc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let c=r.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let c=0,l=this.material.length;c<l;c++)r.push(s(t.materials,this.material[c]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){let c=this.animations[r];i.animations.push(s(t.animations,c))}}if(e){let r=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){let c=[];for(let l in r){let h=r[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Xt.DefaultUp=new P(0,1,0);Xt.DefaultMatrixAutoUpdate=!0;Xt.DefaultMatrixWorldAutoUpdate=!0;var De=new P,Ye=new P,hr=new P,$e=new P,$n=new P,Zn=new P,mo=new P,ur=new P,dr=new P,fr=new P,Fe=class{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),De.subVectors(t,e),i.cross(De);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){De.subVectors(i,e),Ye.subVectors(n,e),hr.subVectors(t,e);let o=De.dot(De),r=De.dot(Ye),c=De.dot(hr),l=Ye.dot(Ye),h=Ye.dot(hr),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);let u=1/d,m=(l*c-r*h)*u,g=(o*h-r*c)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,s,o,r,c){return this.getBarycoord(t,e,n,i,$e),c.set(0,0),c.addScaledVector(s,$e.x),c.addScaledVector(o,$e.y),c.addScaledVector(r,$e.z),c}static isFrontFacing(t,e,n,i){return De.subVectors(n,e),Ye.subVectors(t,e),De.cross(Ye).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),De.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Fe.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,r;$n.subVectors(i,n),Zn.subVectors(s,n),ur.subVectors(t,n);let c=$n.dot(ur),l=Zn.dot(ur);if(c<=0&&l<=0)return e.copy(n);dr.subVectors(t,i);let h=$n.dot(dr),d=Zn.dot(dr);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector($n,o);fr.subVectors(t,s);let m=$n.dot(fr),g=Zn.dot(fr);if(g>=0&&m<=g)return e.copy(s);let p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(Zn,r);let f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return mo.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(mo,r);let x=1/(f+p+u);return o=p*x,r=u*x,e.copy(n).addScaledVector($n,o).addScaledVector(Zn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vc=0,mn=class extends He{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ri,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let r in s){let c=s[r];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},As=class extends mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$t=new P,is=new yt,Ce=class{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=no,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix3(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix4(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.applyNormalMatrix(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$t.fromBufferAttribute(this,e),$t.transformDirection(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==no&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Es=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ts=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}};var yc=0,Ee=new Ht,pr=new Xt,Jn=new P,Me=new Dn,Ei=new Dn,ee=new P,ge=class extends He{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tl(t)?Ts:Es)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ee.makeRotationFromQuaternion(t),this.applyMatrix4(Ee),this}rotateX(t){return Ee.makeRotationX(t),this.applyMatrix4(Ee),this}rotateY(t){return Ee.makeRotationY(t),this.applyMatrix4(Ee),this}rotateZ(t){return Ee.makeRotationZ(t),this.applyMatrix4(Ee),this}translate(t,e,n){return Ee.makeTranslation(t,e,n),this.applyMatrix4(Ee),this}scale(t,e,n){return Ee.makeScale(t,e,n),this.applyMatrix4(Ee),this}lookAt(t){return pr.lookAt(t),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Me.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,Me.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,Me.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(Me.min),this.boundingBox.expandByPoint(Me.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Me.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let r=e[s];Ei.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(Me.min,Ei.min),Me.expandByPoint(ee),ee.addVectors(Me.max,Ei.max),Me.expandByPoint(ee)):(Me.expandByPoint(Ei.min),Me.expandByPoint(Ei.max))}Me.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let s=0,o=e.length;s<o;s++){let r=e[s],c=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ee.fromBufferAttribute(r,l),c&&(Jn.fromBufferAttribute(t,l),ee.add(Jn)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*r),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<r;R++)l[R]=new P,h[R]=new P;let d=new P,u=new P,m=new P,g=new yt,p=new yt,f=new yt,x=new P,w=new P;function E(R,$,Z){d.fromArray(i,R*3),u.fromArray(i,$*3),m.fromArray(i,Z*3),g.fromArray(o,R*2),p.fromArray(o,$*2),f.fromArray(o,Z*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);let U=1/(p.x*f.y-f.x*p.y);isFinite(U)&&(x.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(U),w.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(U),l[R].add(x),l[$].add(x),l[Z].add(x),h[R].add(w),h[$].add(w),h[Z].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,$=y.length;R<$;++R){let Z=y[R],U=Z.start,I=Z.count;for(let G=U,Y=U+I;G<Y;G+=3)E(n[G+0],n[G+1],n[G+2])}let S=new P,C=new P,F=new P,_=new P;function T(R){F.fromArray(s,R*3),_.copy(F);let $=l[R];S.copy($),S.sub(F.multiplyScalar(F.dot($))).normalize(),C.crossVectors(_,$);let U=C.dot(h[R])<0?-1:1;c[R*4]=S.x,c[R*4+1]=S.y,c[R*4+2]=S.z,c[R*4+3]=U}for(let R=0,$=y.length;R<$;++R){let Z=y[R],U=Z.start,I=Z.count;for(let G=U,Y=U+I;G<Y;G+=3)T(n[G+0]),T(n[G+1]),T(n[G+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let i=new P,s=new P,o=new P,r=new P,c=new P,l=new P,h=new P,d=new P;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),c.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(r,c){let l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(c.length*h),m=0,g=0;for(let p=0,f=c.length;p<f;p++){r.isInterleavedBufferAttribute?m=c[p]*r.data.stride+r.offset:m=c[p]*h;for(let x=0;x<h;x++)u[g++]=l[m++]}return new Ce(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ge,n=this.index.array,i=this.attributes;for(let r in i){let c=i[r],l=t(c,n);e.setAttribute(r,l)}let s=this.morphAttributes;for(let r in s){let c=[],l=s[r];for(let h=0,d=l.length;h<d;h++){let u=l[h],m=t(u,n);c.push(m)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,c=o.length;r<c;r++){let l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},go=new Ht,jn=new ws,mr=new di,cn=new P,hn=new P,un=new P,gr=new P,xr=new P,_r=new P,ss=new P,rs=new P,as=new P,os=new yt,ls=new yt,cs=new yt,vr=new P,hs=new P,pe=class extends Xt{constructor(t=new ge,e=new As){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),t.ray.intersectsSphere(mr)===!1)||(go.copy(s).invert(),jn.copy(t.ray).applyMatrix4(go),n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1))return;let o,r=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,m=n.groups,g=n.drawRange;if(r!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let x=m[p],w=i[x.materialIndex],E=Math.max(x.start,g.start),y=Math.min(r.count,Math.min(x.start+x.count,g.start+g.count));for(let S=E,C=y;S<C;S+=3){let F=r.getX(S),_=r.getX(S+1),T=r.getX(S+2);o=us(this,w,t,jn,c,l,h,d,u,F,_,T),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{let p=Math.max(0,g.start),f=Math.min(r.count,g.start+g.count);for(let x=p,w=f;x<w;x+=3){let E=r.getX(x),y=r.getX(x+1),S=r.getX(x+2);o=us(this,i,t,jn,c,l,h,d,u,E,y,S),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let x=m[p],w=i[x.materialIndex],E=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=E,C=y;S<C;S+=3){let F=S,_=S+1,T=S+2;o=us(this,w,t,jn,c,l,h,d,u,F,_,T),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{let p=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let x=p,w=f;x<w;x+=3){let E=x,y=x+1,S=x+2;o=us(this,i,t,jn,c,l,h,d,u,E,y,S),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}};function bc(a,t,e,n,i,s,o,r){let c;if(t.side===Te?c=n.intersectTriangle(o,s,i,!0,r):c=n.intersectTriangle(i,s,o,t.side!==fn,r),c===null)return null;hs.copy(r),hs.applyMatrix4(a.matrixWorld);let l=e.ray.origin.distanceTo(hs);return l<e.near||l>e.far?null:{distance:l,point:hs.clone(),object:a}}function us(a,t,e,n,i,s,o,r,c,l,h,d){cn.fromBufferAttribute(i,l),hn.fromBufferAttribute(i,h),un.fromBufferAttribute(i,d);let u=a.morphTargetInfluences;if(s&&u){ss.set(0,0,0),rs.set(0,0,0),as.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let f=u[g],x=s[g];f!==0&&(gr.fromBufferAttribute(x,l),xr.fromBufferAttribute(x,h),_r.fromBufferAttribute(x,d),o?(ss.addScaledVector(gr,f),rs.addScaledVector(xr,f),as.addScaledVector(_r,f)):(ss.addScaledVector(gr.sub(cn),f),rs.addScaledVector(xr.sub(hn),f),as.addScaledVector(_r.sub(un),f)))}cn.add(ss),hn.add(rs),un.add(as)}a.isSkinnedMesh&&(a.boneTransform(l,cn),a.boneTransform(h,hn),a.boneTransform(d,un));let m=bc(a,t,e,n,cn,hn,un,vr);if(m){r&&(os.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,h),cs.fromBufferAttribute(r,d),m.uv=Fe.getUV(vr,cn,hn,un,os,ls,cs,new yt)),c&&(os.fromBufferAttribute(c,l),ls.fromBufferAttribute(c,h),cs.fromBufferAttribute(c,d),m.uv2=Fe.getUV(vr,cn,hn,un,os,ls,cs,new yt));let g={a:l,b:h,c:d,normal:new P,materialIndex:0};Fe.getNormal(cn,hn,un,g.normal),m.face=g}return m}var Qe=class extends ge{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(p,f,x,w,E,y,S,C,F,_,T){let R=y/F,$=S/_,Z=y/2,U=S/2,I=C/2,G=F+1,Y=_+1,K=0,W=0,N=new P;for(let z=0;z<Y;z++){let et=z*$-U;for(let J=0;J<G;J++){let it=J*R-Z;N[p]=it*w,N[f]=et*E,N[x]=I,l.push(N.x,N.y,N.z),N[p]=0,N[f]=0,N[x]=C>0?1:-1,h.push(N.x,N.y,N.z),d.push(J/F),d.push(1-z/_),K+=1}}for(let z=0;z<_;z++)for(let et=0;et<F;et++){let J=u+et+G*z,it=u+et+G*(z+1),ut=u+(et+1)+G*(z+1),xt=u+(et+1)+G*z;c.push(J,it,xt),c.push(it,ut,xt),W+=6}r.addGroup(m,W,T),m+=W,u+=K}}static fromJSON(t){return new Qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fi(a){let t={};for(let e in a){t[e]={};for(let n in a[e]){let i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function re(a){let t={};for(let e=0;e<a.length;e++){let n=fi(a[e]);for(let i in n)t[i]=n[i]}return t}function Mc(a){let t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}var wc={clone:fi,merge:re},Sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fi(t.uniforms),this.uniformsGroups=Mc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ii=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ie=class extends Ii{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Kn=90,Qn=1,Nr=class extends Xt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new ie(Kn,Qn,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);let s=new ie(Kn,Qn,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);let o=new ie(Kn,Qn,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);let r=new ie(Kn,Qn,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new P(0,-1,0)),this.add(r);let c=new ie(Kn,Qn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);let l=new ie(Kn,Qn,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,r,c,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=je,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}},Cs=class extends me{constructor(t,e,n,i,s,o,r,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ci,super(t,e,n,i,s,o,r,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Fr=class extends Ke{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qe(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:pn});s.uniforms.tEquirect.value=e;let o=new pe(i,s),r=e.minFilter;return e.minFilter===Bs&&(e.minFilter=le),new Nr(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},yr=new P,Ec=new P,Tc=new fe,Je=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=yr.subVectors(n,e).cross(Ec.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let n=t.delta(yr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tc.getNormalMatrix(t),i=this.coplanarPoint(yr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new di,ds=new P,Di=class{constructor(t=new Je,e=new Je,n=new Je,i=new Je,s=new Je,o=new Je){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],c=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],x=n[13],w=n[14],E=n[15];return e[0].setComponents(r-i,d-c,p-u,E-f).normalize(),e[1].setComponents(r+i,d+c,p+u,E+f).normalize(),e[2].setComponents(r+s,d+l,p+m,E+x).normalize(),e[3].setComponents(r-s,d-l,p-m,E-x).normalize(),e[4].setComponents(r-o,d-h,p-g,E-w).normalize(),e[5].setComponents(r+o,d+h,p+g,E+w).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nl(){let a=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Cc(a,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let d=l.array,u=l.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){let u=h.array,m=h.updateRange;a.bindBuffer(d,l),m.count===-1?a.bufferSubData(d,0,u):(e?a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(a.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:c}}var Ni=class extends ge{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,r=Math.floor(n),c=Math.floor(i),l=r+1,h=c+1,d=t/r,u=e/c,m=[],g=[],p=[],f=[];for(let x=0;x<h;x++){let w=x*u-o;for(let E=0;E<l;E++){let y=E*d-s;g.push(y,-w,0),p.push(0,0,1),f.push(E/r),f.push(1-x/c)}}for(let x=0;x<c;x++)for(let w=0;w<r;w++){let E=w+l*x,y=w+l*(x+1),S=w+1+l*(x+1),C=w+1+l*x;m.push(E,y,C),m.push(y,S,C)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(f,2))}static fromJSON(t){return new Ni(t.width,t.height,t.widthSegments,t.heightSegments)}},Lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ic=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc="vec3 transformed = vec3( position );",Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Uc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$c=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Zc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",nh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ch=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_h=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ah=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Gh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,$h=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,au=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,cu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,du=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,vu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Mu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ru=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Du=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ju=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ku=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ed=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,At={alphamap_fragment:Lc,alphamap_pars_fragment:Pc,alphatest_fragment:Rc,alphatest_pars_fragment:Ic,aomap_fragment:Dc,aomap_pars_fragment:Nc,begin_vertex:Fc,beginnormal_vertex:Oc,bsdfs:zc,iridescence_fragment:Uc,bumpmap_pars_fragment:Bc,clipping_planes_fragment:kc,clipping_planes_pars_fragment:Vc,clipping_planes_pars_vertex:Hc,clipping_planes_vertex:Gc,color_fragment:Wc,color_pars_fragment:Xc,color_pars_vertex:qc,color_vertex:Yc,common:$c,cube_uv_reflection_fragment:Zc,defaultnormal_vertex:Jc,displacementmap_pars_vertex:jc,displacementmap_vertex:Kc,emissivemap_fragment:Qc,emissivemap_pars_fragment:th,encodings_fragment:eh,encodings_pars_fragment:nh,envmap_fragment:ih,envmap_common_pars_fragment:sh,envmap_pars_fragment:rh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:lh,fog_pars_vertex:ch,fog_fragment:hh,fog_pars_fragment:uh,gradientmap_pars_fragment:dh,lightmap_fragment:fh,lightmap_pars_fragment:ph,lights_lambert_fragment:mh,lights_lambert_pars_fragment:gh,lights_pars_begin:xh,lights_toon_fragment:vh,lights_toon_pars_fragment:yh,lights_phong_fragment:bh,lights_phong_pars_fragment:Mh,lights_physical_fragment:wh,lights_physical_pars_fragment:Sh,lights_fragment_begin:Ah,lights_fragment_maps:Eh,lights_fragment_end:Th,logdepthbuf_fragment:Ch,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Ph,logdepthbuf_vertex:Rh,map_fragment:Ih,map_pars_fragment:Dh,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:zh,morphcolor_vertex:Uh,morphnormal_vertex:Bh,morphtarget_pars_vertex:kh,morphtarget_vertex:Vh,normal_fragment_begin:Hh,normal_fragment_maps:Gh,normal_pars_fragment:Wh,normal_pars_vertex:Xh,normal_vertex:qh,normalmap_pars_fragment:Yh,clearcoat_normal_fragment_begin:$h,clearcoat_normal_fragment_maps:Zh,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:jh,output_fragment:Kh,packing:Qh,premultiplied_alpha_fragment:tu,project_vertex:eu,dithering_fragment:nu,dithering_pars_fragment:iu,roughnessmap_fragment:su,roughnessmap_pars_fragment:ru,shadowmap_pars_fragment:au,shadowmap_pars_vertex:ou,shadowmap_vertex:lu,shadowmask_pars_fragment:cu,skinbase_vertex:hu,skinning_pars_vertex:uu,skinning_vertex:du,skinnormal_vertex:fu,specularmap_fragment:pu,specularmap_pars_fragment:mu,tonemapping_fragment:gu,tonemapping_pars_fragment:xu,transmission_fragment:_u,transmission_pars_fragment:vu,uv_pars_fragment:yu,uv_pars_vertex:bu,uv_vertex:Mu,uv2_pars_fragment:wu,uv2_pars_vertex:Su,uv2_vertex:Au,worldpos_vertex:Eu,background_vert:Tu,background_frag:Cu,cube_vert:Lu,cube_frag:Pu,depth_vert:Ru,depth_frag:Iu,distanceRGBA_vert:Du,distanceRGBA_frag:Nu,equirect_vert:Fu,equirect_frag:Ou,linedashed_vert:zu,linedashed_frag:Uu,meshbasic_vert:Bu,meshbasic_frag:ku,meshlambert_vert:Vu,meshlambert_frag:Hu,meshmatcap_vert:Gu,meshmatcap_frag:Wu,meshnormal_vert:Xu,meshnormal_frag:qu,meshphong_vert:Yu,meshphong_frag:$u,meshphysical_vert:Zu,meshphysical_frag:Ju,meshtoon_vert:ju,meshtoon_frag:Ku,points_vert:Qu,points_frag:td,shadow_vert:ed,shadow_frag:nd,sprite_vert:id,sprite_frag:sd},nt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fe},uv2Transform:{value:new fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}}},ke={basic:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:re([nt.points,nt.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:re([nt.common,nt.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:re([nt.sprite,nt.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null}},vertexShader:At.background_vert,fragmentShader:At.background_frag},cube:{uniforms:re([nt.envmap,{opacity:{value:1}}]),vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:re([nt.common,nt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:re([nt.lights,nt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ke.physical={uniforms:re([ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new yt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};function rd(a,t,e,n,i,s){let o=new St(0),r=i===!0?0:1,c,l,h=null,d=0,u=null;function m(p,f){let x=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=t.get(w));let E=a.xr,y=E.getSession&&E.getSession();y&&y.environmentBlendMode==="additive"&&(w=null),w===null?g(o,r):w&&w.isColor&&(g(w,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Us)?(l===void 0&&(l=new pe(new Qe(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:fi(ke.cube.uniforms),vertexShader:ke.cube.vertexShader,fragmentShader:ke.cube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(h!==w||d!==w.version||u!==a.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,u=a.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new pe(new Ni(2,2),new tn({name:"BackgroundMaterial",uniforms:fi(ke.background.uniforms),vertexShader:ke.background.vertexShader,fragmentShader:ke.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||u!==a.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,u=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){e.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),r=f,g(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(p){r=p,g(o,r)},render:m}}function ad(a,t,e,n){let i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},c=f(null),l=c,h=!1;function d(I,G,Y,K,W){let N=!1;if(o){let z=p(K,Y,G);l!==z&&(l=z,m(l.object)),N=x(I,K,Y,W),N&&w(I,K,Y,W)}else{let z=G.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==z)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=z,N=!0)}W!==null&&e.update(W,34963),(N||h)&&(h=!1,_(I,G,Y,K),W!==null&&a.bindBuffer(34963,e.get(W).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?a.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?a.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,G,Y){let K=Y.wireframe===!0,W=r[I.id];W===void 0&&(W={},r[I.id]=W);let N=W[G.id];N===void 0&&(N={},W[G.id]=N);let z=N[K];return z===void 0&&(z=f(u()),N[K]=z),z}function f(I){let G=[],Y=[],K=[];for(let W=0;W<i;W++)G[W]=0,Y[W]=0,K[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function x(I,G,Y,K){let W=l.attributes,N=G.attributes,z=0,et=Y.getAttributes();for(let J in et)if(et[J].location>=0){let ut=W[J],xt=N[J];if(xt===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;z++}return l.attributesNum!==z||l.index!==K}function w(I,G,Y,K){let W={},N=G.attributes,z=0,et=Y.getAttributes();for(let J in et)if(et[J].location>=0){let ut=N[J];ut===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor));let xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),W[J]=xt,z++}l.attributes=W,l.attributesNum=z,l.index=K}function E(){let I=l.newAttributes;for(let G=0,Y=I.length;G<Y;G++)I[G]=0}function y(I){S(I,0)}function S(I,G){let Y=l.newAttributes,K=l.enabledAttributes,W=l.attributeDivisors;Y[I]=1,K[I]===0&&(a.enableVertexAttribArray(I),K[I]=1),W[I]!==G&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),W[I]=G)}function C(){let I=l.newAttributes,G=l.enabledAttributes;for(let Y=0,K=G.length;Y<K;Y++)G[Y]!==I[Y]&&(a.disableVertexAttribArray(Y),G[Y]=0)}function F(I,G,Y,K,W,N){n.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(I,G,Y,W,N):a.vertexAttribPointer(I,G,Y,K,W,N)}function _(I,G,Y,K){if(n.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();let W=K.attributes,N=Y.getAttributes(),z=G.defaultAttributeValues;for(let et in N){let J=N[et];if(J.location>=0){let it=W[et];if(it===void 0&&(et==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),et==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),it!==void 0){let ut=it.normalized,xt=it.itemSize,X=e.get(it);if(X===void 0)continue;let Rt=X.buffer,pt=X.type,_t=X.bytesPerElement;if(it.isInterleavedBufferAttribute){let ht=it.data,Nt=ht.stride,Mt=it.offset;if(ht.isInstancedInterleavedBuffer){for(let ft=0;ft<J.locationSize;ft++)S(J.location+ft,ht.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ft=0;ft<J.locationSize;ft++)y(J.location+ft);a.bindBuffer(34962,Rt);for(let ft=0;ft<J.locationSize;ft++)F(J.location+ft,xt/J.locationSize,pt,ut,Nt*_t,(Mt+xt/J.locationSize*ft)*_t)}else{if(it.isInstancedBufferAttribute){for(let ht=0;ht<J.locationSize;ht++)S(J.location+ht,it.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ht=0;ht<J.locationSize;ht++)y(J.location+ht);a.bindBuffer(34962,Rt);for(let ht=0;ht<J.locationSize;ht++)F(J.location+ht,xt/J.locationSize,pt,ut,xt*_t,xt/J.locationSize*ht*_t)}}else if(z!==void 0){let ut=z[et];if(ut!==void 0)switch(ut.length){case 2:a.vertexAttrib2fv(J.location,ut);break;case 3:a.vertexAttrib3fv(J.location,ut);break;case 4:a.vertexAttrib4fv(J.location,ut);break;default:a.vertexAttrib1fv(J.location,ut)}}}}C()}function T(){Z();for(let I in r){let G=r[I];for(let Y in G){let K=G[Y];for(let W in K)g(K[W].object),delete K[W];delete G[Y]}delete r[I]}}function R(I){if(r[I.id]===void 0)return;let G=r[I.id];for(let Y in G){let K=G[Y];for(let W in K)g(K[W].object),delete K[W];delete G[Y]}delete r[I.id]}function $(I){for(let G in r){let Y=r[G];if(Y[I.id]===void 0)continue;let K=Y[I.id];for(let W in K)g(K[W].object),delete K[W];delete Y[I.id]}}function Z(){U(),h=!0,l!==c&&(l=c,m(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:$,initAttributes:E,enableAttribute:y,disableUnusedAttributes:C}}function od(a,t,e,n){let i=n.isWebGL2,s;function o(l){s=l}function r(l,h){a.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,d){if(d===0)return;let u,m;if(i)u=a,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),e.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=c}function ld(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(F){if(F==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext,r=e.precision!==void 0?e.precision:"highp",c=s(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),p=a.getParameter(34921),f=a.getParameter(36347),x=a.getParameter(36348),w=a.getParameter(36349),E=u>0,y=o||t.has("OES_texture_float"),S=E&&y,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:C}}function cd(a){let t=this,e=null,n=0,i=!1,s=!1,o=new Je,r=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){let g=d.length!==0||u||n!==0||i;return i=u,e=h(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,u,m){let g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,x=a.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{let w=s?0:n,E=w*4,y=x.clippingState||null;c.value=y,y=h(g,u,E,m);for(let S=0;S!==E;++S)y[S]=e[S];x.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){let p=d!==null?d.length:0,f=null;if(p!==0){if(f=c.value,g!==!0||f===null){let x=m+p*4,w=u.matrixWorldInverse;r.getNormalMatrix(w),(f===null||f.length<x)&&(f=new Float32Array(x));for(let E=0,y=m;E!==p;++E,y+=4)o.copy(d[E]).applyMatrix4(w,r),o.normal.toArray(f,y),f[y+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function hd(a){let t=new WeakMap;function e(o,r){return r===Er?o.mapping=ci:r===Tr&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let r=o.mapping;if(r===Er||r===Tr)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Fr(c.height/2);return l.fromEquirectangularTexture(a,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let r=o.target;r.removeEventListener("dispose",i);let c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Or=class extends Ii{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,c=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ii=4,xo=[.125,.215,.35,.446,.526,.582],An=20,br=new Or,_o=new St,Mr=null,Sn=(1+Math.sqrt(5))/2,ei=1/Sn,vo=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Sn,ei),new P(0,Sn,-ei),new P(ei,0,Sn),new P(-ei,0,Sn),new P(Sn,ei,0),new P(-Sn,ei,0)],Ls=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Mr=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mr),t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mr=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:le,minFilter:le,generateMipmaps:!1,type:Pi,format:Ve,encoding:In,depthBuffer:!1},i=yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yo(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ud(s)),this._blurMaterial=dd(s,t,e)}return i}_compileMaterial(t){let e=new pe(this._lodPlanes[0],t);this._renderer.compile(e,br)}_sceneToCubeUV(t,e,n,i){let r=new ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_o),h.toneMapping=je,h.autoClear=!1;let m=new As({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new pe(new Qe,m),p=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(_o),p=!0);for(let x=0;x<6;x++){let w=x%3;w===0?(r.up.set(0,c[x],0),r.lookAt(l[x],0,0)):w===1?(r.up.set(0,0,c[x]),r.lookAt(0,l[x],0)):(r.up.set(0,c[x],0),r.lookAt(0,0,l[x]));let E=this._cubeSize;fs(i,w*E,x>2?E:0,E,E),h.setRenderTarget(i),p&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ci||t.mapping===hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let c=this._cubeSize;fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,br)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=vo[(i-1)%vo.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pe(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):An;f>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${An}`);let x=[],w=0;for(let F=0;F<An;++F){let _=F/p,T=Math.exp(-_*_/2);x.push(T),F===0?w+=T:F<f&&(w+=2*T)}for(let F=0;F<x.length;F++)x[F]=x[F]/w;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=x,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);let{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;let y=this._sizeLods[i],S=3*y*(i>E-ii?i-E+ii:0),C=4*(this._cubeSize-y);fs(e,S,C,3*y,2*y),c.setRenderTarget(e),c.render(d,br)}};function ud(a){let t=[],e=[],n=[],i=a,s=a-ii+1+xo.length;for(let o=0;o<s;o++){let r=Math.pow(2,i);e.push(r);let c=1/r;o>a-ii?c=xo[o-a+ii-1]:o===0&&(c=0),n.push(c);let l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,x=1,w=new Float32Array(p*g*m),E=new Float32Array(f*g*m),y=new Float32Array(x*g*m);for(let C=0;C<m;C++){let F=C%3*2/3-1,_=C>2?0:-1,T=[F,_,0,F+2/3,_,0,F+2/3,_+1,0,F,_,0,F+2/3,_+1,0,F,_+1,0];w.set(T,p*g*C),E.set(u,f*g*C);let R=[C,C,C,C,C,C];y.set(R,x*g*C)}let S=new ge;S.setAttribute("position",new Ce(w,p)),S.setAttribute("uv",new Ce(E,f)),S.setAttribute("faceIndex",new Ce(y,x)),t.push(S),i>ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yo(a,t,e){let n=new Ke(a,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function dd(a,t,e){let n=new Float32Array(An),i=new P(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function bo(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Mo(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fd(a){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){let c=r.mapping,l=c===Er||c===Tr,h=c===ci||c===hi;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Ls(a)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{let d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Ls(a));let u=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let c=0,l=6;for(let h=0;h<l;h++)r[h]!==void 0&&c++;return c===l}function s(r){let c=r.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pd(a){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function md(a,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];let m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let g in u)t.update(u[g],34962);let m=d.morphAttributes;for(let g in m){let p=m[g];for(let f=0,x=p.length;f<x;f++)t.update(p[f],34962)}}function l(d){let u=[],m=d.index,g=d.attributes.position,p=0;if(m!==null){let w=m.array;p=m.version;for(let E=0,y=w.length;E<y;E+=3){let S=w[E+0],C=w[E+1],F=w[E+2];u.push(S,C,C,F,F,S)}}else{let w=g.array;p=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){let S=E+0,C=E+1,F=E+2;u.push(S,C,C,F,F,S)}}let f=new(tl(u)?Ts:Es)(u,1);f.version=p;let x=s.get(d);x&&t.remove(x),s.set(d,f)}function h(d){let u=s.get(d);if(u){let m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:c,getWireframeAttribute:h}}function gd(a,t,e,n){let i=n.isWebGL2,s;function o(u){s=u}let r,c;function l(u){r=u.type,c=u.bytesPerElement}function h(u,m){a.drawElements(s,m,r,u*c),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=a,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,u*c,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function xd(a){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _d(a,t){return a[0]-t[0]}function vd(a,t){return Math.abs(t[1])-Math.abs(a[1])}function yd(a,t,e){let n={},i=new Float32Array(8),s=new WeakMap,o=new Zt,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function c(l,h,d,u){let m=l.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0,f=s.get(h);if(f===void 0||f.count!==p){let G=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",G)};f!==void 0&&f.texture.dispose();let E=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],_=h.morphAttributes.color||[],T=0;E===!0&&(T=1),y===!0&&(T=2),S===!0&&(T=3);let R=h.attributes.position.count*T,$=1;R>t.maxTextureSize&&($=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let Z=new Float32Array(R*$*4*p),U=new Ms(Z,R,$,p);U.type=Tn,U.needsUpdate=!0;let I=T*4;for(let Y=0;Y<p;Y++){let K=C[Y],W=F[Y],N=_[Y],z=R*$*4*Y;for(let et=0;et<K.count;et++){let J=et*I;E===!0&&(o.fromBufferAttribute(K,et),Z[z+J+0]=o.x,Z[z+J+1]=o.y,Z[z+J+2]=o.z,Z[z+J+3]=0),y===!0&&(o.fromBufferAttribute(W,et),Z[z+J+4]=o.x,Z[z+J+5]=o.y,Z[z+J+6]=o.z,Z[z+J+7]=0),S===!0&&(o.fromBufferAttribute(N,et),Z[z+J+8]=o.x,Z[z+J+9]=o.y,Z[z+J+10]=o.z,Z[z+J+11]=N.itemSize===4?o.w:1)}}f={count:p,texture:U,size:new yt(R,$)},s.set(h,f),h.addEventListener("dispose",G)}let x=0;for(let E=0;E<m.length;E++)x+=m[E];let w=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",w),u.getUniforms().setValue(a,"morphTargetInfluences",m),u.getUniforms().setValue(a,"morphTargetsTexture",f.texture,e),u.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}else{let g=m===void 0?0:m.length,p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<g;y++){let S=p[y];S[0]=y,S[1]=m[y]}p.sort(vd);for(let y=0;y<8;y++)y<g&&p[y][1]?(r[y][0]=p[y][0],r[y][1]=p[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(_d);let f=h.morphAttributes.position,x=h.morphAttributes.normal,w=0;for(let y=0;y<8;y++){let S=r[y],C=S[0],F=S[1];C!==Number.MAX_SAFE_INTEGER&&F?(f&&h.getAttribute("morphTarget"+y)!==f[C]&&h.setAttribute("morphTarget"+y,f[C]),x&&h.getAttribute("morphNormal"+y)!==x[C]&&h.setAttribute("morphNormal"+y,x[C]),i[y]=F,w+=F):(f&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),x&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let E=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(a,"morphTargetBaseInfluence",E),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:c}}function bd(a,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);return i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),d}function o(){i=new WeakMap}function r(c){let l=c.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var il=new me,sl=new Ms,rl=new Dr,al=new Cs,wo=[],So=[],Ao=new Float32Array(16),Eo=new Float32Array(9),To=new Float32Array(4);function _i(a,t,e){let n=a[0];if(n<=0||n>0)return a;let i=t*e,s=wo[i];if(s===void 0&&(s=new Float32Array(i),wo[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,a[o].toArray(s,r)}return s}function ce(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function he(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function ks(a,t){let e=So[t];e===void 0&&(e=new Int32Array(t),So[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function Md(a,t){let e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function wd(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;a.uniform2fv(this.addr,t),he(e,t)}}function Sd(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;a.uniform3fv(this.addr,t),he(e,t)}}function Ad(a,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;a.uniform4fv(this.addr,t),he(e,t)}}function Ed(a,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;To.set(n),a.uniformMatrix2fv(this.addr,!1,To),he(e,n)}}function Td(a,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Eo.set(n),a.uniformMatrix3fv(this.addr,!1,Eo),he(e,n)}}function Cd(a,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ao.set(n),a.uniformMatrix4fv(this.addr,!1,Ao),he(e,n)}}function Ld(a,t){let e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Pd(a,t){let e=this.cache;ce(e,t)||(a.uniform2iv(this.addr,t),he(e,t))}function Rd(a,t){let e=this.cache;ce(e,t)||(a.uniform3iv(this.addr,t),he(e,t))}function Id(a,t){let e=this.cache;ce(e,t)||(a.uniform4iv(this.addr,t),he(e,t))}function Dd(a,t){let e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Nd(a,t){let e=this.cache;ce(e,t)||(a.uniform2uiv(this.addr,t),he(e,t))}function Fd(a,t){let e=this.cache;ce(e,t)||(a.uniform3uiv(this.addr,t),he(e,t))}function Od(a,t){let e=this.cache;ce(e,t)||(a.uniform4uiv(this.addr,t),he(e,t))}function zd(a,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||il,i)}function Ud(a,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rl,i)}function Bd(a,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||al,i)}function kd(a,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sl,i)}function Vd(a){switch(a){case 5126:return Md;case 35664:return wd;case 35665:return Sd;case 35666:return Ad;case 35674:return Ed;case 35675:return Td;case 35676:return Cd;case 5124:case 35670:return Ld;case 35667:case 35671:return Pd;case 35668:case 35672:return Rd;case 35669:case 35673:return Id;case 5125:return Dd;case 36294:return Nd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return zd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Bd;case 36289:case 36303:case 36311:case 36292:return kd}}function Hd(a,t){a.uniform1fv(this.addr,t)}function Gd(a,t){let e=_i(t,this.size,2);a.uniform2fv(this.addr,e)}function Wd(a,t){let e=_i(t,this.size,3);a.uniform3fv(this.addr,e)}function Xd(a,t){let e=_i(t,this.size,4);a.uniform4fv(this.addr,e)}function qd(a,t){let e=_i(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Yd(a,t){let e=_i(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function $d(a,t){let e=_i(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Zd(a,t){a.uniform1iv(this.addr,t)}function Jd(a,t){a.uniform2iv(this.addr,t)}function jd(a,t){a.uniform3iv(this.addr,t)}function Kd(a,t){a.uniform4iv(this.addr,t)}function Qd(a,t){a.uniform1uiv(this.addr,t)}function tf(a,t){a.uniform2uiv(this.addr,t)}function ef(a,t){a.uniform3uiv(this.addr,t)}function nf(a,t){a.uniform4uiv(this.addr,t)}function sf(a,t,e){let n=t.length,i=ks(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||il,i[s])}function rf(a,t,e){let n=t.length,i=ks(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||rl,i[s])}function af(a,t,e){let n=t.length,i=ks(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||al,i[s])}function of(a,t,e){let n=t.length,i=ks(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||sl,i[s])}function lf(a){switch(a){case 5126:return Hd;case 35664:return Gd;case 35665:return Wd;case 35666:return Xd;case 35674:return qd;case 35675:return Yd;case 35676:return $d;case 5124:case 35670:return Zd;case 35667:case 35671:return Jd;case 35668:case 35672:return jd;case 35669:case 35673:return Kd;case 5125:return Qd;case 36294:return tf;case 36295:return ef;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return of}}var zr=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Vd(e.type)}},Ur=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=lf(e.type)}},Br=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let r=i[s];r.setValue(t,e[r.id],n)}}},wr=/(\w+)(\])?(\[|\.)?/g;function Co(a,t){a.seq.push(t),a.map[t.id]=t}function cf(a,t,e){let n=a.name,i=n.length;for(wr.lastIndex=0;;){let s=wr.exec(n),o=wr.lastIndex,r=s[1],c=s[2]==="]",l=s[3];if(c&&(r=r|0),l===void 0||l==="["&&o+2===i){Co(e,l===void 0?new zr(r,a,t):new Ur(r,a,t));break}else{let d=e.map[r];d===void 0&&(d=new Br(r),Co(e,d)),e=d}}}var oi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);cf(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let r=e[s],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Lo(a,t,e){let n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}var hf=0;function uf(a,t){let e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function df(a){switch(a){case In:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Po(a,t,e){let n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+uf(a.getShaderSource(t),o)}else return i}function ff(a,t){let e=df(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function pf(a,t){let e;switch(t){case kl:e="Linear";break;case Vl:e="Reinhard";break;case Hl:e="OptimizedCineon";break;case ki:e="ACESFilmic";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mf(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function gf(a){let t=[];for(let e in a){let n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xf(a,t){let e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=a.getActiveAttrib(t,i),o=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:a.getAttribLocation(t,o),locationSize:r}}return e}function Ci(a){return a!==""}function Ro(a,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Io(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(a){return a.replace(_f,vf)}function vf(a,t){let e=At[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return kr(e)}var yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(a){return a.replace(yf,bf)}function bf(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function No(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Mf(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Bi?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ti&&(t="SHADOWMAP_TYPE_VSM"),t}function wf(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ci:case hi:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Sf(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case hi:t="ENVMAP_MODE_REFRACTION";break}return t}function Af(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Ul:t="ENVMAP_BLENDING_MIX";break;case Bl:t="ENVMAP_BLENDING_ADD";break}return t}function Ef(a){let t=a.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tf(a,t,e,n){let i=a.getContext(),s=e.defines,o=e.vertexShader,r=e.fragmentShader,c=Mf(e),l=wf(e),h=Sf(e),d=Af(e),u=Ef(e),m=e.isWebGL2?"":mf(e),g=gf(s),p=i.createProgram(),f,x,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Ci).join(`
`),f.length>0&&(f+=`
`),x=[m,g].filter(Ci).join(`
`),x.length>0&&(x+=`
`)):(f=[No(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),x=[m,No(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==je?"#define TONE_MAPPING":"",e.toneMapping!==je?At.tonemapping_pars_fragment:"",e.toneMapping!==je?pf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.encodings_pars_fragment,ff("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),o=kr(o),o=Ro(o,e),o=Io(o,e),r=kr(r),r=Ro(r,e),r=Io(r,e),o=Do(o),r=Do(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["#define varying in",e.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let E=w+f+o,y=w+x+r,S=Lo(i,35633,E),C=Lo(i,35632,y);if(i.attachShader(p,S),i.attachShader(p,C),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),a.debug.checkShaderErrors){let T=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(S).trim(),$=i.getShaderInfoLog(C).trim(),Z=!0,U=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;let I=Po(i,S,"vertex"),G=Po(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+G)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||$==="")&&(U=!1);U&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:R,prefix:f},fragmentShader:{log:$,prefix:x}})}i.deleteShader(S),i.deleteShader(C);let F;this.getUniforms=function(){return F===void 0&&(F=new oi(i,p)),F};let _;return this.getAttributes=function(){return _===void 0&&(_=xf(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=hf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}var Cf=0,Vr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Hr(t),e.set(t,n)),n}},Hr=class{constructor(t){this.id=Cf++,this.code=t,this.usedTimes=0}};function Lf(a,t,e,n,i,s,o){let r=new Ss,c=new Vr,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,T,R,$,Z){let U=$.fog,I=Z.geometry,G=_.isMeshStandardMaterial?$.environment:null,Y=(_.isMeshStandardMaterial?e:t).get(_.envMap||G),K=Y&&Y.mapping===Us?Y.image.height:null,W=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));let N=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,z=N!==void 0?N.length:0,et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let J,it,ut,xt;if(W){let Nt=ke[W];J=Nt.vertexShader,it=Nt.fragmentShader}else J=_.vertexShader,it=_.fragmentShader,c.update(_),ut=c.getVertexShaderID(_),xt=c.getFragmentShaderID(_);let X=a.getRenderTarget(),Rt=_.alphaTest>0,pt=_.clearcoat>0,_t=_.iridescence>0;return{isWebGL2:h,shaderID:W,shaderName:_.type,vertexShader:J,fragmentShader:it,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:u,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:In,map:!!_.map,matcap:!!_.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===lc,tangentSpaceNormalMap:_.normalMapType===Qo,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===zt,clearcoat:pt,clearcoatMap:pt&&!!_.clearcoatMap,clearcoatRoughnessMap:pt&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:pt&&!!_.clearcoatNormalMap,iridescence:_t,iridescenceMap:_t&&!!_.iridescenceMap,iridescenceThicknessMap:_t&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ri,alphaMap:!!_.alphaMap,alphaTest:Rt,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!I.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!U,useFog:_.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:et,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:je,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Te,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(x(T,_),w(T,_),T.push(a.outputEncoding)),T.push(_.customProgramCacheKey),T.join()}function x(_,T){_.push(T.precision),_.push(T.outputEncoding),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.combine),_.push(T.vertexUvs),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function w(_,T){r.disableAll(),T.isWebGL2&&r.enable(0),T.supportsVertexTextures&&r.enable(1),T.instancing&&r.enable(2),T.instancingColor&&r.enable(3),T.map&&r.enable(4),T.matcap&&r.enable(5),T.envMap&&r.enable(6),T.lightMap&&r.enable(7),T.aoMap&&r.enable(8),T.emissiveMap&&r.enable(9),T.bumpMap&&r.enable(10),T.normalMap&&r.enable(11),T.objectSpaceNormalMap&&r.enable(12),T.tangentSpaceNormalMap&&r.enable(13),T.clearcoat&&r.enable(14),T.clearcoatMap&&r.enable(15),T.clearcoatRoughnessMap&&r.enable(16),T.clearcoatNormalMap&&r.enable(17),T.iridescence&&r.enable(18),T.iridescenceMap&&r.enable(19),T.iridescenceThicknessMap&&r.enable(20),T.displacementMap&&r.enable(21),T.specularMap&&r.enable(22),T.roughnessMap&&r.enable(23),T.metalnessMap&&r.enable(24),T.gradientMap&&r.enable(25),T.alphaMap&&r.enable(26),T.alphaTest&&r.enable(27),T.vertexColors&&r.enable(28),T.vertexAlphas&&r.enable(29),T.vertexUvs&&r.enable(30),T.vertexTangents&&r.enable(31),T.uvsVertexOnly&&r.enable(32),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.skinning&&r.enable(4),T.morphTargets&&r.enable(5),T.morphNormals&&r.enable(6),T.morphColors&&r.enable(7),T.premultipliedAlpha&&r.enable(8),T.shadowMapEnabled&&r.enable(9),T.physicallyCorrectLights&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.specularIntensityMap&&r.enable(15),T.specularColorMap&&r.enable(16),T.transmission&&r.enable(17),T.transmissionMap&&r.enable(18),T.thicknessMap&&r.enable(19),T.sheen&&r.enable(20),T.sheenColorMap&&r.enable(21),T.sheenRoughnessMap&&r.enable(22),T.decodeVideoTexture&&r.enable(23),T.opaque&&r.enable(24),_.push(r.mask)}function E(_){let T=g[_.type],R;if(T){let $=ke[T];R=wc.clone($.uniforms)}else R=_.uniforms;return R}function y(_,T){let R;for(let $=0,Z=l.length;$<Z;$++){let U=l[$];if(U.cacheKey===T){R=U,++R.usedTimes;break}}return R===void 0&&(R=new Tf(a,T,_,s),l.push(R)),R}function S(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),_.destroy()}}function C(_){c.remove(_)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:F}}function Pf(){let a=new WeakMap;function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function e(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Rf(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Fo(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Oo(){let a=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,p,f){let x=a[t];return x===void 0?(x={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},a[t]=x):(x.id=d.id,x.object=d,x.geometry=u,x.material=m,x.groupOrder=g,x.renderOrder=d.renderOrder,x.z=p,x.group=f),t++,x}function r(d,u,m,g,p,f){let x=o(d,u,m,g,p,f);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):e.push(x)}function c(d,u,m,g,p,f){let x=o(d,u,m,g,p,f);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):e.unshift(x)}function l(d,u){e.length>1&&e.sort(d||Rf),n.length>1&&n.sort(u||Fo),i.length>1&&i.sort(u||Fo)}function h(){for(let d=t,u=a.length;d<u;d++){let m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:c,finish:h,sort:l}}function If(){let a=new WeakMap;function t(n,i){let s=a.get(n),o;return s===void 0?(o=new Oo,a.set(n,[o])):i>=s.length?(o=new Oo,s.push(o)):o=s[i],o}function e(){a=new WeakMap}return{get:t,dispose:e}}function Df(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return a[t.id]=e,e}}}function Nf(){let a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}var Ff=0;function Of(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function zf(a,t){let e=new Df,n=Nf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);let s=new P,o=new Ht,r=new Ht;function c(h,d){let u=0,m=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,f=0,x=0,w=0,E=0,y=0,S=0,C=0,F=0,_=0;h.sort(Of);let T=d!==!0?Math.PI:1;for(let $=0,Z=h.length;$<Z;$++){let U=h[$],I=U.color,G=U.intensity,Y=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=I.r*G*T,m+=I.g*G*T,g+=I.b*G*T;else if(U.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],G);else if(U.isDirectionalLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){let N=U.shadow,z=n.get(U);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,y++}i.directional[p]=W,p++}else if(U.isSpotLight){let W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(I).multiplyScalar(G*T),W.distance=Y,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[x]=W;let N=U.shadow;if(U.map&&(i.spotLightMap[F]=U.map,F++,N.updateMatrices(U),U.castShadow&&_++),i.spotLightMatrix[x]=N.matrix,U.castShadow){let z=n.get(U);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=K,C++}x++}else if(U.isRectAreaLight){let W=e.get(U);W.color.copy(I).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=W,w++}else if(U.isPointLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity*T),W.distance=U.distance,W.decay=U.decay,U.castShadow){let N=U.shadow,z=n.get(U);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,z.shadowCameraNear=N.camera.near,z.shadowCameraFar=N.camera.far,i.pointShadow[f]=z,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=U.shadow.matrix,S++}i.point[f]=W,f++}else if(U.isHemisphereLight){let W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(G*T),W.groundColor.copy(U.groundColor).multiplyScalar(G*T),i.hemi[E]=W,E++}}w>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;let R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==x||R.rectAreaLength!==w||R.hemiLength!==E||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==C||R.numSpotMaps!==F)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=w,i.point.length=f,i.hemi.length=E,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+F-_,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=_,R.directionalLength=p,R.pointLength=f,R.spotLength=x,R.rectAreaLength=w,R.hemiLength=E,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=C,R.numSpotMaps=F,i.version=Ff++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0,x=d.matrixWorldInverse;for(let w=0,E=h.length;w<E;w++){let y=h[w];if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),u++}else if(y.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),g++}else if(y.isRectAreaLight){let S=i.rectArea[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),r.identity(),o.copy(y.matrixWorld),o.premultiply(x),r.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),p++}else if(y.isPointLight){let S=i.point[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){let S=i.hemi[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),f++}}}return{setup:c,setupView:l,state:i}}function zo(a,t){let e=new zf(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:r}}function Uf(a,t){let e=new WeakMap;function n(s,o=0){let r=e.get(s),c;return r===void 0?(c=new zo(a,t),e.set(s,[c])):o>=r.length?(c=new zo(a,t),r.push(c)):c=r[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Gr=class extends mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wr=class extends mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Bf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vf(a,t,e){let n=new Di,i=new yt,s=new yt,o=new Zt,r=new Gr({depthPacking:oc}),c=new Wr,l={},h=e.maxTextureSize,d={0:Te,1:li,2:fn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Bf,fragmentShader:kf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new pe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o,this.render=function(y,S,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;let F=a.getRenderTarget(),_=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),R=a.state;R.setBlending(pn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let $=0,Z=y.length;$<Z;$++){let U=y[$],I=U.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);let G=I.getFrameExtents();if(i.multiply(G),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null){let K=this.type!==Ti?{minFilter:ue,magFilter:ue}:{};I.map=new Ke(i.x,i.y,K),I.map.texture.name=U.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();let Y=I.getViewportCount();for(let K=0;K<Y;K++){let W=I.getViewport(K);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),R.viewport(o),I.updateMatrices(U,K),n=I.getFrustum(),E(S,C,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===Ti&&x(I,C),I.needsUpdate=!1}f.needsUpdate=!1,a.setRenderTarget(F,_,T)};function x(y,S){let C=t.update(p);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ke(i.x,i.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(S,null,C,u,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(S,null,C,m,p,null)}function w(y,S,C,F,_,T){let R=null,$=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if($!==void 0?R=$:R=C.isPointLight===!0?c:r,a.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){let Z=R.uuid,U=S.uuid,I=l[Z];I===void 0&&(I={},l[Z]=I);let G=I[U];G===void 0&&(G=R.clone(),I[U]=G),R=G}return R.visible=S.visible,R.wireframe=S.wireframe,T===Ti?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:d[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=F,R.farDistance=_),R}function E(y,S,C,F,_){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===Ti)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);let $=t.update(y),Z=y.material;if(Array.isArray(Z)){let U=$.groups;for(let I=0,G=U.length;I<G;I++){let Y=U[I],K=Z[Y.materialIndex];if(K&&K.visible){let W=w(y,K,F,C.near,C.far,_);a.renderBufferDirect(C,null,$,W,y,Y)}}}else if(Z.visible){let U=w(y,Z,F,C.near,C.far,_);a.renderBufferDirect(C,null,$,U,y,null)}}let R=y.children;for(let $=0,Z=R.length;$<Z;$++)E(R[$],S,C,F,_)}}function Hf(a,t,e){let n=e.isWebGL2;function i(){let L=!1,st=new Zt,B=null,ct=new Zt(0,0,0,0);return{setMask:function(lt){B!==lt&&!L&&(a.colorMask(lt,lt,lt,lt),B=lt)},setLocked:function(lt){L=lt},setClear:function(lt,Pt,te,Gt,nn){nn===!0&&(lt*=Gt,Pt*=Gt,te*=Gt),st.set(lt,Pt,te,Gt),ct.equals(st)===!1&&(a.clearColor(lt,Pt,te,Gt),ct.copy(st))},reset:function(){L=!1,B=null,ct.set(-1,0,0,0)}}}function s(){let L=!1,st=null,B=null,ct=null;return{setTest:function(lt){lt?Rt(2929):pt(2929)},setMask:function(lt){st!==lt&&!L&&(a.depthMask(lt),st=lt)},setFunc:function(lt){if(B!==lt){if(lt)switch(lt){case Rl:a.depthFunc(512);break;case Il:a.depthFunc(519);break;case Dl:a.depthFunc(513);break;case Ar:a.depthFunc(515);break;case Nl:a.depthFunc(514);break;case Fl:a.depthFunc(518);break;case Ol:a.depthFunc(516);break;case zl:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);B=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ct!==lt&&(a.clearDepth(lt),ct=lt)},reset:function(){L=!1,st=null,B=null,ct=null}}}function o(){let L=!1,st=null,B=null,ct=null,lt=null,Pt=null,te=null,Gt=null,nn=null;return{setTest:function(Bt){L||(Bt?Rt(2960):pt(2960))},setMask:function(Bt){st!==Bt&&!L&&(a.stencilMask(Bt),st=Bt)},setFunc:function(Bt,Ge,Se){(B!==Bt||ct!==Ge||lt!==Se)&&(a.stencilFunc(Bt,Ge,Se),B=Bt,ct=Ge,lt=Se)},setOp:function(Bt,Ge,Se){(Pt!==Bt||te!==Ge||Gt!==Se)&&(a.stencilOp(Bt,Ge,Se),Pt=Bt,te=Ge,Gt=Se)},setLocked:function(Bt){L=Bt},setClear:function(Bt){nn!==Bt&&(a.clearStencil(Bt),nn=Bt)},reset:function(){L=!1,st=null,B=null,ct=null,lt=null,Pt=null,te=null,Gt=null,nn=null}}}let r=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap,u={},m={},g=new WeakMap,p=[],f=null,x=!1,w=null,E=null,y=null,S=null,C=null,F=null,_=null,T=!1,R=null,$=null,Z=null,U=null,I=null,G=a.getParameter(35661),Y=!1,K=0,W=a.getParameter(7938);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=K>=2);let N=null,z={},et=a.getParameter(3088),J=a.getParameter(2978),it=new Zt().fromArray(et),ut=new Zt().fromArray(J);function xt(L,st,B){let ct=new Uint8Array(4),lt=a.createTexture();a.bindTexture(L,lt),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let Pt=0;Pt<B;Pt++)a.texImage2D(st+Pt,0,6408,1,1,0,6408,5121,ct);return lt}let X={};X[3553]=xt(3553,3553,1),X[34067]=xt(34067,34069,6),r.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Rt(2929),c.setFunc(Ar),jt(!1),xe(Sa),Rt(2884),qt(pn);function Rt(L){u[L]!==!0&&(a.enable(L),u[L]=!0)}function pt(L){u[L]!==!1&&(a.disable(L),u[L]=!1)}function _t(L,st){return m[L]!==st?(a.bindFramebuffer(L,st),m[L]=st,n&&(L===36009&&(m[36160]=st),L===36160&&(m[36009]=st)),!0):!1}function ht(L,st){let B=p,ct=!1;if(L)if(B=g.get(st),B===void 0&&(B=[],g.set(st,B)),L.isWebGLMultipleRenderTargets){let lt=L.texture;if(B.length!==lt.length||B[0]!==36064){for(let Pt=0,te=lt.length;Pt<te;Pt++)B[Pt]=36064+Pt;B.length=lt.length,ct=!0}}else B[0]!==36064&&(B[0]=36064,ct=!0);else B[0]!==1029&&(B[0]=1029,ct=!0);ct&&(e.isWebGL2?a.drawBuffers(B):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function Nt(L){return f!==L?(a.useProgram(L),f=L,!0):!1}let Mt={[ni]:32774,[yl]:32778,[bl]:32779};if(n)Mt[Ca]=32775,Mt[La]=32776;else{let L=t.get("EXT_blend_minmax");L!==null&&(Mt[Ca]=L.MIN_EXT,Mt[La]=L.MAX_EXT)}let ft={[Ml]:0,[wl]:1,[Sl]:768,[Zo]:770,[Pl]:776,[Cl]:774,[El]:772,[Al]:769,[Jo]:771,[Ll]:775,[Tl]:773};function qt(L,st,B,ct,lt,Pt,te,Gt){if(L===pn){x===!0&&(pt(3042),x=!1);return}if(x===!1&&(Rt(3042),x=!0),L!==vl){if(L!==w||Gt!==T){if((E!==ni||C!==ni)&&(a.blendEquation(32774),E=ni,C=ni),Gt)switch(L){case ri:a.blendFuncSeparate(1,771,1,771);break;case Aa:a.blendFunc(1,1);break;case Ea:a.blendFuncSeparate(0,769,0,1);break;case Ta:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ri:a.blendFuncSeparate(770,771,1,771);break;case Aa:a.blendFunc(770,1);break;case Ea:a.blendFuncSeparate(0,769,0,1);break;case Ta:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,F=null,_=null,w=L,T=Gt}return}lt=lt||st,Pt=Pt||B,te=te||ct,(st!==E||lt!==C)&&(a.blendEquationSeparate(Mt[st],Mt[lt]),E=st,C=lt),(B!==y||ct!==S||Pt!==F||te!==_)&&(a.blendFuncSeparate(ft[B],ft[ct],ft[Pt],ft[te]),y=B,S=ct,F=Pt,_=te),w=L,T=null}function ne(L,st){L.side===fn?pt(2884):Rt(2884);let B=L.side===Te;st&&(B=!B),jt(B),L.blending===ri&&L.transparent===!1?qt(pn):qt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),r.setMask(L.colorWrite);let ct=L.stencilWrite;l.setTest(ct),ct&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Rt(32926):pt(32926)}function jt(L){R!==L&&(L?a.frontFace(2304):a.frontFace(2305),R=L)}function xe(L){L!==xl?(Rt(2884),L!==$&&(L===Sa?a.cullFace(1029):L===_l?a.cullFace(1028):a.cullFace(1032))):pt(2884),$=L}function Kt(L){L!==Z&&(Y&&a.lineWidth(L),Z=L)}function Ft(L,st,B){L?(Rt(32823),(U!==st||I!==B)&&(a.polygonOffset(st,B),U=st,I=B)):pt(32823)}function we(L){L?Rt(3089):pt(3089)}function _e(L){L===void 0&&(L=33984+G-1),N!==L&&(a.activeTexture(L),N=L)}function A(L,st){N===null&&_e();let B=z[N];B===void 0&&(B={type:void 0,texture:void 0},z[N]=B),(B.type!==L||B.texture!==st)&&(a.bindTexture(L,st||X[L]),B.type=L,B.texture=st)}function v(){let L=z[N];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(L){it.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),it.copy(L))}function rt(L){ut.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),ut.copy(L))}function gt(L,st){let B=d.get(st);B===void 0&&(B=new WeakMap,d.set(st,B));let ct=B.get(L);ct===void 0&&(ct=a.getUniformBlockIndex(st,L.name),B.set(L,ct))}function Et(L,st){let ct=d.get(st).get(L);h.get(L)!==ct&&(a.uniformBlockBinding(st,ct,L.__bindingPointIndex),h.set(L,ct))}function Ut(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},N=null,z={},m={},g=new WeakMap,p=[],f=null,x=!1,w=null,E=null,y=null,S=null,C=null,F=null,_=null,T=!1,R=null,$=null,Z=null,U=null,I=null,it.set(0,0,a.canvas.width,a.canvas.height),ut.set(0,0,a.canvas.width,a.canvas.height),r.reset(),c.reset(),l.reset()}return{buffers:{color:r,depth:c,stencil:l},enable:Rt,disable:pt,bindFramebuffer:_t,drawBuffers:ht,useProgram:Nt,setBlending:qt,setMaterial:ne,setFlipSided:jt,setCullFace:xe,setLineWidth:Kt,setPolygonOffset:Ft,setScissorTest:we,activeTexture:_e,bindTexture:A,unbindTexture:v,compressedTexImage2D:k,texImage2D:q,texImage3D:tt,updateUBOMapping:gt,uniformBlockBinding:Et,texStorage2D:mt,texStorage3D:b,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:at,scissor:ot,viewport:rt,reset:Ut}}function Gf(a,t,e,n,i,s,o){let r=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,v){return x?new OffscreenCanvas(A,v):Ri("canvas")}function E(A,v,k,j){let Q=1;if((A.width>j||A.height>j)&&(Q=j/Math.max(A.width,A.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let at=v?Ir:Math.floor,mt=at(Q*A.width),b=at(Q*A.height);p===void 0&&(p=w(mt,b));let q=k?w(mt,b):p;return q.width=mt,q.height=b,q.getContext("2d").drawImage(A,0,0,mt,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+mt+"x"+b+")."),q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return so(A.width)&&so(A.height)}function S(A){return r?!1:A.wrapS!==Ne||A.wrapT!==Ne||A.minFilter!==ue&&A.minFilter!==le}function C(A,v){return A.generateMipmaps&&v&&A.minFilter!==ue&&A.minFilter!==le}function F(A){a.generateMipmap(A)}function _(A,v,k,j,Q=!1){if(r===!1)return v;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at=v;return v===6403&&(k===5126&&(at=33326),k===5131&&(at=33325),k===5121&&(at=33321)),v===33319&&(k===5126&&(at=33328),k===5131&&(at=33327),k===5121&&(at=33323)),v===6408&&(k===5126&&(at=34836),k===5131&&(at=34842),k===5121&&(at=j===zt&&Q===!1?35907:32856),k===32819&&(at=32854),k===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function T(A,v,k){return C(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==ue&&A.minFilter!==le?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){return A===ue||A===Pa||A===Ra?9728:9729}function $(A){let v=A.target;v.removeEventListener("dispose",$),U(v),v.isVideoTexture&&g.delete(v)}function Z(A){let v=A.target;v.removeEventListener("dispose",Z),G(v)}function U(A){let v=n.get(A);if(v.__webglInit===void 0)return;let k=A.source,j=f.get(k);if(j){let Q=j[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(A),Object.keys(j).length===0&&f.delete(k)}n.remove(A)}function I(A){let v=n.get(A);a.deleteTexture(v.__webglTexture);let k=A.source,j=f.get(k);delete j[v.__cacheKey],o.memory.textures--}function G(A){let v=A.texture,k=n.get(A),j=n.get(v);if(j.__webglTexture!==void 0&&(a.deleteTexture(j.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)a.deleteFramebuffer(k.__webglFramebuffer[Q]),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[Q]);else{if(a.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,at=v.length;Q<at;Q++){let mt=n.get(v[Q]);mt.__webglTexture&&(a.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(A)}let Y=0;function K(){Y=0}function W(){let A=Y;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),Y+=1,A}function N(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.encoding),v.join()}function z(A,v){let k=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,A,v);return}}e.activeTexture(33984+v),e.bindTexture(3553,k.__webglTexture)}function et(A,v){let k=n.get(A);if(A.version>0&&k.__version!==A.version){pt(k,A,v);return}e.activeTexture(33984+v),e.bindTexture(35866,k.__webglTexture)}function J(A,v){let k=n.get(A);if(A.version>0&&k.__version!==A.version){pt(k,A,v);return}e.activeTexture(33984+v),e.bindTexture(32879,k.__webglTexture)}function it(A,v){let k=n.get(A);if(A.version>0&&k.__version!==A.version){_t(k,A,v);return}e.activeTexture(33984+v),e.bindTexture(34067,k.__webglTexture)}let ut={[Cr]:10497,[Ne]:33071,[Lr]:33648},xt={[ue]:9728,[Pa]:9984,[Ra]:9986,[le]:9729,[Wl]:9985,[Bs]:9987};function X(A,v,k){if(k?(a.texParameteri(A,10242,ut[v.wrapS]),a.texParameteri(A,10243,ut[v.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,ut[v.wrapR]),a.texParameteri(A,10240,xt[v.magFilter]),a.texParameteri(A,10241,xt[v.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(v.wrapS!==Ne||v.wrapT!==Ne)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,R(v.magFilter)),a.texParameteri(A,10241,R(v.minFilter)),v.minFilter!==ue&&v.minFilter!==le&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(v.type===Tn&&t.has("OES_texture_float_linear")===!1||r===!1&&v.type===Pi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(a.texParameterf(A,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Rt(A,v){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",$));let j=v.source,Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));let at=N(v);if(at!==A.__cacheKey){Q[at]===void 0&&(Q[at]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[at].usedTimes++;let mt=Q[A.__cacheKey];mt!==void 0&&(Q[A.__cacheKey].usedTimes--,mt.usedTimes===0&&I(v)),A.__cacheKey=at,A.__webglTexture=Q[at].texture}return k}function pt(A,v,k){let j=3553;v.isDataArrayTexture&&(j=35866),v.isData3DTexture&&(j=32879);let Q=Rt(A,v),at=v.source;if(e.activeTexture(33984+k),e.bindTexture(j,A.__webglTexture),at.version!==at.__currentVersion||Q===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);let mt=S(v)&&y(v.image)===!1,b=E(v.image,mt,!1,h);b=_e(v,b);let q=y(b)||r,tt=s.convert(v.format,v.encoding),ot=s.convert(v.type),rt=_(v.internalFormat,tt,ot,v.encoding,v.isVideoTexture);X(j,v,q);let gt,Et=v.mipmaps,Ut=r&&v.isVideoTexture!==!0,L=at.__currentVersion===void 0||Q===!0,st=T(v,b,q);if(v.isDepthTexture)rt=6402,r?v.type===Tn?rt=36012:v.type===En?rt=33190:v.type===ai?rt=35056:rt=33189:v.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ln&&rt===6402&&v.type!==Ko&&v.type!==En&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=En,ot=s.convert(v.type)),v.format===ui&&rt===6402&&(rt=34041,v.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ai,ot=s.convert(v.type))),L&&(Ut?e.texStorage2D(3553,1,rt,b.width,b.height):e.texImage2D(3553,0,rt,b.width,b.height,0,tt,ot,null));else if(v.isDataTexture)if(Et.length>0&&q){Ut&&L&&e.texStorage2D(3553,st,rt,Et[0].width,Et[0].height);for(let B=0,ct=Et.length;B<ct;B++)gt=Et[B],Ut?e.texSubImage2D(3553,B,0,0,gt.width,gt.height,tt,ot,gt.data):e.texImage2D(3553,B,rt,gt.width,gt.height,0,tt,ot,gt.data);v.generateMipmaps=!1}else Ut?(L&&e.texStorage2D(3553,st,rt,b.width,b.height),e.texSubImage2D(3553,0,0,0,b.width,b.height,tt,ot,b.data)):e.texImage2D(3553,0,rt,b.width,b.height,0,tt,ot,b.data);else if(v.isCompressedTexture){Ut&&L&&e.texStorage2D(3553,st,rt,Et[0].width,Et[0].height);for(let B=0,ct=Et.length;B<ct;B++)gt=Et[B],v.format!==Ve?tt!==null?Ut?e.compressedTexSubImage2D(3553,B,0,0,gt.width,gt.height,tt,gt.data):e.compressedTexImage2D(3553,B,rt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage2D(3553,B,0,0,gt.width,gt.height,tt,ot,gt.data):e.texImage2D(3553,B,rt,gt.width,gt.height,0,tt,ot,gt.data)}else if(v.isDataArrayTexture)Ut?(L&&e.texStorage3D(35866,st,rt,b.width,b.height,b.depth),e.texSubImage3D(35866,0,0,0,0,b.width,b.height,b.depth,tt,ot,b.data)):e.texImage3D(35866,0,rt,b.width,b.height,b.depth,0,tt,ot,b.data);else if(v.isData3DTexture)Ut?(L&&e.texStorage3D(32879,st,rt,b.width,b.height,b.depth),e.texSubImage3D(32879,0,0,0,0,b.width,b.height,b.depth,tt,ot,b.data)):e.texImage3D(32879,0,rt,b.width,b.height,b.depth,0,tt,ot,b.data);else if(v.isFramebufferTexture){if(L)if(Ut)e.texStorage2D(3553,st,rt,b.width,b.height);else{let B=b.width,ct=b.height;for(let lt=0;lt<st;lt++)e.texImage2D(3553,lt,rt,B,ct,0,tt,ot,null),B>>=1,ct>>=1}}else if(Et.length>0&&q){Ut&&L&&e.texStorage2D(3553,st,rt,Et[0].width,Et[0].height);for(let B=0,ct=Et.length;B<ct;B++)gt=Et[B],Ut?e.texSubImage2D(3553,B,0,0,tt,ot,gt):e.texImage2D(3553,B,rt,tt,ot,gt);v.generateMipmaps=!1}else Ut?(L&&e.texStorage2D(3553,st,rt,b.width,b.height),e.texSubImage2D(3553,0,0,0,tt,ot,b)):e.texImage2D(3553,0,rt,tt,ot,b);C(v,q)&&F(j),at.__currentVersion=at.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function _t(A,v,k){if(v.image.length!==6)return;let j=Rt(A,v),Q=v.source;if(e.activeTexture(33984+k),e.bindTexture(34067,A.__webglTexture),Q.version!==Q.__currentVersion||j===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);let at=v.isCompressedTexture||v.image[0].isCompressedTexture,mt=v.image[0]&&v.image[0].isDataTexture,b=[];for(let B=0;B<6;B++)!at&&!mt?b[B]=E(v.image[B],!1,!0,l):b[B]=mt?v.image[B].image:v.image[B],b[B]=_e(v,b[B]);let q=b[0],tt=y(q)||r,ot=s.convert(v.format,v.encoding),rt=s.convert(v.type),gt=_(v.internalFormat,ot,rt,v.encoding),Et=r&&v.isVideoTexture!==!0,Ut=Q.__currentVersion===void 0||j===!0,L=T(v,q,tt);X(34067,v,tt);let st;if(at){Et&&Ut&&e.texStorage2D(34067,L,gt,q.width,q.height);for(let B=0;B<6;B++){st=b[B].mipmaps;for(let ct=0;ct<st.length;ct++){let lt=st[ct];v.format!==Ve?ot!==null?Et?e.compressedTexSubImage2D(34069+B,ct,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(34069+B,ct,gt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(34069+B,ct,0,0,lt.width,lt.height,ot,rt,lt.data):e.texImage2D(34069+B,ct,gt,lt.width,lt.height,0,ot,rt,lt.data)}}}else{st=v.mipmaps,Et&&Ut&&(st.length>0&&L++,e.texStorage2D(34067,L,gt,b[0].width,b[0].height));for(let B=0;B<6;B++)if(mt){Et?e.texSubImage2D(34069+B,0,0,0,b[B].width,b[B].height,ot,rt,b[B].data):e.texImage2D(34069+B,0,gt,b[B].width,b[B].height,0,ot,rt,b[B].data);for(let ct=0;ct<st.length;ct++){let Pt=st[ct].image[B].image;Et?e.texSubImage2D(34069+B,ct+1,0,0,Pt.width,Pt.height,ot,rt,Pt.data):e.texImage2D(34069+B,ct+1,gt,Pt.width,Pt.height,0,ot,rt,Pt.data)}}else{Et?e.texSubImage2D(34069+B,0,0,0,ot,rt,b[B]):e.texImage2D(34069+B,0,gt,ot,rt,b[B]);for(let ct=0;ct<st.length;ct++){let lt=st[ct];Et?e.texSubImage2D(34069+B,ct+1,0,0,ot,rt,lt.image[B]):e.texImage2D(34069+B,ct+1,gt,ot,rt,lt.image[B])}}}C(v,tt)&&F(34067),Q.__currentVersion=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ht(A,v,k,j,Q){let at=s.convert(k.format,k.encoding),mt=s.convert(k.type),b=_(k.internalFormat,at,mt,k.encoding);n.get(v).__hasExternalTextures||(Q===32879||Q===35866?e.texImage3D(Q,0,b,v.width,v.height,v.depth,0,at,mt,null):e.texImage2D(Q,0,b,v.width,v.height,0,at,mt,null)),e.bindFramebuffer(36160,A),Ft(v)?u.framebufferTexture2DMultisampleEXT(36160,j,Q,n.get(k).__webglTexture,0,Kt(v)):a.framebufferTexture2D(36160,j,Q,n.get(k).__webglTexture,0),e.bindFramebuffer(36160,null)}function Nt(A,v,k){if(a.bindRenderbuffer(36161,A),v.depthBuffer&&!v.stencilBuffer){let j=33189;if(k||Ft(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Tn?j=36012:Q.type===En&&(j=33190));let at=Kt(v);Ft(v)?u.renderbufferStorageMultisampleEXT(36161,at,j,v.width,v.height):a.renderbufferStorageMultisample(36161,at,j,v.width,v.height)}else a.renderbufferStorage(36161,j,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(v.depthBuffer&&v.stencilBuffer){let j=Kt(v);k&&Ft(v)===!1?a.renderbufferStorageMultisample(36161,j,35056,v.width,v.height):Ft(v)?u.renderbufferStorageMultisampleEXT(36161,j,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{let j=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<j.length;Q++){let at=j[Q],mt=s.convert(at.format,at.encoding),b=s.convert(at.type),q=_(at.internalFormat,mt,b,at.encoding),tt=Kt(v);k&&Ft(v)===!1?a.renderbufferStorageMultisample(36161,tt,q,v.width,v.height):Ft(v)?u.renderbufferStorageMultisampleEXT(36161,tt,q,v.width,v.height):a.renderbufferStorage(36161,q,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function Mt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);let j=n.get(v.depthTexture).__webglTexture,Q=Kt(v);if(v.depthTexture.format===Ln)Ft(v)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,Q):a.framebufferTexture2D(36160,36096,3553,j,0);else if(v.depthTexture.format===ui)Ft(v)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,Q):a.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function ft(A){let v=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Mt(v.__webglFramebuffer,A)}else if(k){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(36160,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]=a.createRenderbuffer(),Nt(v.__webglDepthbuffer[j],A,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),Nt(v.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function qt(A,v,k){let j=n.get(A);v!==void 0&&ht(j.__webglFramebuffer,A,A.texture,36064,3553),k!==void 0&&ft(A)}function ne(A){let v=A.texture,k=n.get(A),j=n.get(v);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=v.version,o.memory.textures++);let Q=A.isWebGLCubeRenderTarget===!0,at=A.isWebGLMultipleRenderTargets===!0,mt=y(A)||r;if(Q){k.__webglFramebuffer=[];for(let b=0;b<6;b++)k.__webglFramebuffer[b]=a.createFramebuffer()}else{if(k.__webglFramebuffer=a.createFramebuffer(),at)if(i.drawBuffers){let b=A.texture;for(let q=0,tt=b.length;q<tt;q++){let ot=n.get(b[q]);ot.__webglTexture===void 0&&(ot.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&Ft(A)===!1){let b=at?v:[v];k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let q=0;q<b.length;q++){let tt=b[q];k.__webglColorRenderbuffer[q]=a.createRenderbuffer(),a.bindRenderbuffer(36161,k.__webglColorRenderbuffer[q]);let ot=s.convert(tt.format,tt.encoding),rt=s.convert(tt.type),gt=_(tt.internalFormat,ot,rt,tt.encoding),Et=Kt(A);a.renderbufferStorageMultisample(36161,Et,gt,A.width,A.height),a.framebufferRenderbuffer(36160,36064+q,36161,k.__webglColorRenderbuffer[q])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),Nt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(Q){e.bindTexture(34067,j.__webglTexture),X(34067,v,mt);for(let b=0;b<6;b++)ht(k.__webglFramebuffer[b],A,v,36064,34069+b);C(v,mt)&&F(34067),e.unbindTexture()}else if(at){let b=A.texture;for(let q=0,tt=b.length;q<tt;q++){let ot=b[q],rt=n.get(ot);e.bindTexture(3553,rt.__webglTexture),X(3553,ot,mt),ht(k.__webglFramebuffer,A,ot,36064+q,3553),C(ot,mt)&&F(3553)}e.unbindTexture()}else{let b=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?b=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(b,j.__webglTexture),X(b,v,mt),ht(k.__webglFramebuffer,A,v,36064,b),C(v,mt)&&F(b),e.unbindTexture()}A.depthBuffer&&ft(A)}function jt(A){let v=y(A)||r,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let j=0,Q=k.length;j<Q;j++){let at=k[j];if(C(at,v)){let mt=A.isWebGLCubeRenderTarget?34067:3553,b=n.get(at).__webglTexture;e.bindTexture(mt,b),F(mt),e.unbindTexture()}}}function xe(A){if(r&&A.samples>0&&Ft(A)===!1){let v=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,j=A.height,Q=16384,at=[],mt=A.stencilBuffer?33306:36096,b=n.get(A),q=A.isWebGLMultipleRenderTargets===!0;if(q)for(let tt=0;tt<v.length;tt++)e.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+tt,36161,null),e.bindFramebuffer(36160,b.__webglFramebuffer),a.framebufferTexture2D(36009,36064+tt,3553,null,0);e.bindFramebuffer(36008,b.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,b.__webglFramebuffer);for(let tt=0;tt<v.length;tt++){at.push(36064+tt),A.depthBuffer&&at.push(mt);let ot=b.__ignoreDepthValues!==void 0?b.__ignoreDepthValues:!1;if(ot===!1&&(A.depthBuffer&&(Q|=256),A.stencilBuffer&&(Q|=1024)),q&&a.framebufferRenderbuffer(36008,36064,36161,b.__webglColorRenderbuffer[tt]),ot===!0&&(a.invalidateFramebuffer(36008,[mt]),a.invalidateFramebuffer(36009,[mt])),q){let rt=n.get(v[tt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,rt,0)}a.blitFramebuffer(0,0,k,j,0,0,k,j,Q,9728),m&&a.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),q)for(let tt=0;tt<v.length;tt++){e.bindFramebuffer(36160,b.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+tt,36161,b.__webglColorRenderbuffer[tt]);let ot=n.get(v[tt]).__webglTexture;e.bindFramebuffer(36160,b.__webglFramebuffer),a.framebufferTexture2D(36009,36064+tt,3553,ot,0)}e.bindFramebuffer(36009,b.__webglMultisampledFramebuffer)}}function Kt(A){return Math.min(d,A.samples)}function Ft(A){let v=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function we(A){let v=o.render.frame;g.get(A)!==v&&(g.set(A,v),A.update())}function _e(A,v){let k=A.encoding,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Pr||k!==In&&(k===zt?r===!1?t.has("EXT_sRGB")===!0&&j===Ve?(A.format=Pr,A.minFilter=le,A.generateMipmaps=!1):v=ys.sRGBToLinear(v):(j!==Ve||Q!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),v}this.allocateTextureUnit=W,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=et,this.setTexture3D=J,this.setTextureCube=it,this.rebindTextures=qt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Ft}function Wf(a,t,e){let n=e.isWebGL2;function i(s,o=null){let r;if(s===Rn)return 5121;if(s===$l)return 32819;if(s===Zl)return 32820;if(s===Xl)return 5120;if(s===ql)return 5122;if(s===Ko)return 5123;if(s===Yl)return 5124;if(s===En)return 5125;if(s===Tn)return 5126;if(s===Pi)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Jl)return 6406;if(s===Ve)return 6408;if(s===Kl)return 6409;if(s===Ql)return 6410;if(s===Ln)return 6402;if(s===ui)return 34041;if(s===tc)return 6403;if(s===jl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Pr)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===ec)return 36244;if(s===nc)return 33319;if(s===ic)return 33320;if(s===sc)return 36249;if(s===qs||s===Ys||s===$s||s===Zs)if(o===zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ia||s===Da||s===Na||s===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Oa||s===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Oa)return o===zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===za)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ua||s===Ba||s===ka||s===Va||s===Ha||s===Ga||s===Wa||s===Xa||s===qa||s===Ya||s===$a||s===Za||s===Ja||s===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Ua)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ba)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ka)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Va)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ha)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ga)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wa)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xa)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qa)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ya)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$a)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Za)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ja)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ja)return o===zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===Ka)return o===zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ai?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}var Xr=class extends ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},si=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},Li=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,r=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let p of t.hand.values()){let f=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){let w=new si;w.matrixAutoUpdate=!1,w.visible=!1,l.joints[p.jointName]=w,l.add(w)}let x=l.joints[p.jointName];f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=f.radius),x.visible=f!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}},qr=class extends me{constructor(t,e,n,i,s,o,r,c,l,h){if(h=h!==void 0?h:Ln,h!==Ln&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ln&&(n=En),n===void 0&&h===ui&&(n=ai),super(null,i,s,o,r,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:ue,this.minFilter=c!==void 0?c:ue,this.flipY=!1,this.generateMipmaps=!1}},Yr=class extends He{constructor(t,e){super();let n=this,i=null,s=1,o=null,r="local-floor",c=null,l=null,h=null,d=null,u=null,m=null,g=e.getContextAttributes(),p=null,f=null,x=[],w=[],E=new ie;E.layers.enable(1),E.viewport=new Zt;let y=new ie;y.layers.enable(2),y.viewport=new Zt;let S=[E,y],C=new Xr;C.layers.enable(1),C.layers.enable(2);let F=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=x[N];return z===void 0&&(z=new Li,x[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=x[N];return z===void 0&&(z=new Li,x[N]=z),z.getGripSpace()},this.getHand=function(N){let z=x[N];return z===void 0&&(z=new Li,x[N]=z),z.getHandSpace()};function T(N){let z=w.indexOf(N.inputSource);if(z===-1)return;let et=x[z];et!==void 0&&et.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",$);for(let N=0;N<x.length;N++){let z=w[N];z!==null&&(w[N]=null,x[N].disconnect(z))}F=null,_=null,t.setRenderTarget(p),u=null,d=null,h=null,i=null,f=null,W.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",R),i.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,z),i.updateRenderState({baseLayer:u}),f=new Ke(u.framebufferWidth,u.framebufferHeight,{format:Ve,type:Rn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,et=null,J=null;g.depth&&(J=g.stencil?35056:33190,z=g.stencil?ui:Ln,et=g.stencil?ai:En);let it={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(it),i.updateRenderState({layers:[d]}),f=new Ke(d.textureWidth,d.textureHeight,{format:Ve,type:Rn,depthTexture:new qr(d.textureWidth,d.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let ut=t.properties.get(f);ut.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(r),W.setContext(i),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function $(N){for(let z=0;z<N.removed.length;z++){let et=N.removed[z],J=w.indexOf(et);J>=0&&(w[J]=null,x[J].dispatchEvent({type:"disconnected",data:et}))}for(let z=0;z<N.added.length;z++){let et=N.added[z],J=w.indexOf(et);if(J===-1){for(let ut=0;ut<x.length;ut++)if(ut>=w.length){w.push(et),J=ut;break}else if(w[ut]===null){w[ut]=et,J=ut;break}if(J===-1)break}let it=x[J];it&&it.dispatchEvent({type:"connected",data:et})}}let Z=new P,U=new P;function I(N,z,et){Z.setFromMatrixPosition(z.matrixWorld),U.setFromMatrixPosition(et.matrixWorld);let J=Z.distanceTo(U),it=z.projectionMatrix.elements,ut=et.projectionMatrix.elements,xt=it[14]/(it[10]-1),X=it[14]/(it[10]+1),Rt=(it[9]+1)/it[5],pt=(it[9]-1)/it[5],_t=(it[8]-1)/it[0],ht=(ut[8]+1)/ut[0],Nt=xt*_t,Mt=xt*ht,ft=J/(-_t+ht),qt=ft*-_t;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(qt),N.translateZ(ft),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let ne=xt+ft,jt=X+ft,xe=Nt-qt,Kt=Mt+(J-qt),Ft=Rt*X/jt*ne,we=pt*X/jt*ne;N.projectionMatrix.makePerspective(xe,Kt,Ft,we,ne,jt)}function G(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;C.near=y.near=E.near=N.near,C.far=y.far=E.far=N.far,(F!==C.near||_!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,_=C.far);let z=N.parent,et=C.cameras;G(C,z);for(let it=0;it<et.length;it++)G(et[it],z);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);let J=N.children;for(let it=0,ut=J.length;it<ut;it++)J[it].updateMatrixWorld(!0);et.length===2?I(C,E,y):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=N)};let Y=null;function K(N,z){if(l=z.getViewerPose(c||o),m=z,l!==null){let et=l.views;u!==null&&(t.setRenderTargetFramebuffer(f,u.framebuffer),t.setRenderTarget(f));let J=!1;et.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let it=0;it<et.length;it++){let ut=et[it],xt=null;if(u!==null)xt=u.getViewport(ut);else{let Rt=h.getViewSubImage(d,ut);xt=Rt.viewport,it===0&&(t.setRenderTargetTextures(f,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(f))}let X=S[it];X===void 0&&(X=new ie,X.layers.enable(it),X.viewport=new Zt,S[it]=X),X.matrix.fromArray(ut.transform.matrix),X.projectionMatrix.fromArray(ut.projectionMatrix),X.viewport.set(xt.x,xt.y,xt.width,xt.height),it===0&&C.matrix.copy(X.matrix),J===!0&&C.cameras.push(X)}}for(let et=0;et<x.length;et++){let J=w[et],it=x[et];J!==null&&it!==void 0&&it.update(J,z,c||o)}Y&&Y(N,z),m=null}let W=new nl;W.setAnimationLoop(K),this.setAnimationLoop=function(N){Y=N},this.dispose=function(){}}};function qf(a,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,x,w,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,E)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,x,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Te&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Te&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x=t.get(f).envMap;if(x&&(p.envMap.value=x,p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let y=a.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let E;f.aoMap?E=f.aoMap:f.lightMap&&(E=f.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,x,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*x,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E;f.map?E=f.map:f.alphaMap&&(E=f.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let x;f.map?x=f.map:f.alphaMap&&(x=f.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,x){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Te&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Yf(a,t,e,n){let i={},s={},o=[],r=e.isWebGL2?a.getParameter(35375):0;function c(w,E){let y=E.program;n.uniformBlockBinding(w,y)}function l(w,E){let y=i[w.id];y===void 0&&(g(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",f));let S=E.program;n.updateUBOMapping(w,S);let C=t.render.frame;s[w.id]!==C&&(u(w),s[w.id]=C)}function h(w){let E=d();w.__bindingPointIndex=E;let y=a.createBuffer(),S=w.__size,C=w.usage;return a.bindBuffer(35345,y),a.bufferData(35345,S,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,E,y),y}function d(){for(let w=0;w<r;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let E=i[w.id],y=w.uniforms,S=w.__cache;a.bindBuffer(35345,E);for(let C=0,F=y.length;C<F;C++){let _=y[C];if(m(_,C,S)===!0){let T=_.value,R=_.__offset;typeof T=="number"?(_.__data[0]=T,a.bufferSubData(35345,R,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):T.toArray(_.__data),a.bufferSubData(35345,R,_.__data))}}a.bindBuffer(35345,null)}function m(w,E,y){let S=w.value;if(y[E]===void 0)return typeof S=="number"?y[E]=S:y[E]=S.clone(),!0;if(typeof S=="number"){if(y[E]!==S)return y[E]=S,!0}else{let C=y[E];if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(w){let E=w.uniforms,y=0,S=16,C=0;for(let F=0,_=E.length;F<_;F++){let T=E[F],R=p(T);if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,F>0){C=y%S;let $=S-C;C!==0&&$-R.boundary<0&&(y+=S-C,T.__offset=y)}y+=R.storage}return C=y%S,C>0&&(y+=S-C),w.__size=y,w.__cache={},this}function p(w){let E=w.value,y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function f(w){let E=w.target;E.removeEventListener("dispose",f);let y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),a.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function x(){for(let w in i)a.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}function $f(){let a=Ri("canvas");return a.style.display="block",a}function Hi(a={}){this.isWebGLRenderer=!0;let t=a.canvas!==void 0?a.canvas:$f(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=In,this.physicallyCorrectLights=!1,this.toneMapping=je,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,f=!1,x=0,w=0,E=null,y=-1,S=null,C=new Zt,F=new Zt,_=null,T=t.width,R=t.height,$=1,Z=null,U=null,I=new Zt(0,0,T,R),G=new Zt(0,0,T,R),Y=!1,K=new Di,W=!1,N=!1,z=null,et=new Ht,J=new yt,it=new P,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return E===null?$:1}let X=e;function Rt(M,O){for(let V=0;V<M.length;V++){let D=M[V],H=t.getContext(D,O);if(H!==null)return H}return null}try{let M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${la}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),X===null){let O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),X=Rt(O,M),X===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let pt,_t,ht,Nt,Mt,ft,qt,ne,jt,xe,Kt,Ft,we,_e,A,v,k,j,Q,at,mt,b,q,tt;function ot(){pt=new pd(X),_t=new ld(X,pt,a),pt.init(_t),b=new Wf(X,pt,_t),ht=new Hf(X,pt,_t),Nt=new xd,Mt=new Pf,ft=new Gf(X,pt,ht,Mt,_t,b,Nt),qt=new hd(p),ne=new fd(p),jt=new Cc(X,_t),q=new ad(X,pt,jt,_t),xe=new md(X,jt,Nt,q),Kt=new bd(X,xe,jt,Nt),Q=new yd(X,_t,ft),v=new cd(Mt),Ft=new Lf(p,qt,ne,pt,_t,q,v),we=new qf(p,Mt),_e=new If,A=new Uf(pt,_t),j=new rd(p,qt,ht,Kt,h,o),k=new Vf(p,Kt,_t),tt=new Yf(X,Nt,_t,ht),at=new od(X,pt,Nt,_t),mt=new gd(X,pt,Nt,_t),Nt.programs=Ft.programs,p.capabilities=_t,p.extensions=pt,p.properties=Mt,p.renderLists=_e,p.shadowMap=k,p.state=ht,p.info=Nt}ot();let rt=new Yr(p,X);this.xr=rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let M=pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(T,R,!1))},this.getSize=function(M){return M.set(T,R)},this.setSize=function(M,O,V){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,R=O,t.width=Math.floor(M*$),t.height=Math.floor(O*$),V!==!1&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(T*$,R*$).floor()},this.setDrawingBufferSize=function(M,O,V){T=M,R=O,$=V,t.width=Math.floor(M*V),t.height=Math.floor(O*V),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(I)},this.setViewport=function(M,O,V,D){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,O,V,D),ht.viewport(C.copy(I).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(G)},this.setScissor=function(M,O,V,D){M.isVector4?G.set(M.x,M.y,M.z,M.w):G.set(M,O,V,D),ht.scissor(F.copy(G).multiplyScalar($).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){ht.setScissorTest(Y=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(M=!0,O=!0,V=!0){let D=0;M&&(D|=16384),O&&(D|=256),V&&(D|=1024),X.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),_e.dispose(),A.dispose(),Mt.dispose(),qt.dispose(),ne.dispose(),Kt.dispose(),q.dispose(),tt.dispose(),Ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Pt),rt.removeEventListener("sessionend",te),z&&(z.dispose(),z=null),Gt.stop()};function gt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let M=Nt.autoReset,O=k.enabled,V=k.autoUpdate,D=k.needsUpdate,H=k.type;ot(),Nt.autoReset=M,k.enabled=O,k.autoUpdate=V,k.needsUpdate=D,k.type=H}function Ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function L(M){let O=M.target;O.removeEventListener("dispose",L),st(O)}function st(M){B(M),Mt.remove(M)}function B(M){let O=Mt.get(M).programs;O!==void 0&&(O.forEach(function(V){Ft.releaseProgram(V)}),M.isShaderMaterial&&Ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,V,D,H,dt){O===null&&(O=ut);let vt=H.isMesh&&H.matrixWorld.determinant()<0,wt=fl(M,O,V,D,H);ht.setMaterial(D,vt);let bt=V.index,Ot=V.attributes.position;if(bt===null){if(Ot===void 0||Ot.count===0)return}else if(bt.count===0)return;let Tt=1;D.wireframe===!0&&(bt=xe.getWireframeAttribute(V),Tt=2),q.setup(H,D,wt,V,bt);let Ct,kt=at;bt!==null&&(Ct=jt.get(bt),kt=mt,kt.setIndex(Ct));let vn=bt!==null?bt.count:Ot.count,Bn=V.drawRange.start*Tt,kn=V.drawRange.count*Tt,Be=dt!==null?dt.start*Tt:0,It=dt!==null?dt.count*Tt:1/0,Vn=Math.max(Bn,Be),Yt=Math.min(vn,Bn+kn,Be+It)-1,Ae=Math.max(0,Yt-Vn+1);if(Ae!==0){if(H.isMesh)D.wireframe===!0?(ht.setLineWidth(D.wireframeLinewidth*xt()),kt.setMode(1)):kt.setMode(4);else if(H.isLine){let sn=D.linewidth;sn===void 0&&(sn=1),ht.setLineWidth(sn*xt()),H.isLineSegments?kt.setMode(1):H.isLineLoop?kt.setMode(2):kt.setMode(3)}else H.isPoints?kt.setMode(0):H.isSprite&&kt.setMode(4);if(H.isInstancedMesh)kt.renderInstances(Vn,Ae,H.count);else if(V.isInstancedBufferGeometry){let sn=Math.min(V.instanceCount,V._maxInstanceCount);kt.renderInstances(Vn,Ae,sn)}else kt.render(Vn,Ae)}},this.compile=function(M,O){function V(D,H,dt){D.transparent===!0&&D.side===fn?(D.side=Te,D.needsUpdate=!0,qi(D,H,dt),D.side=li,D.needsUpdate=!0,qi(D,H,dt),D.side=fn):qi(D,H,dt)}u=A.get(M),u.init(),g.push(u),M.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights(p.physicallyCorrectLights),M.traverse(function(D){let H=D.material;if(H)if(Array.isArray(H))for(let dt=0;dt<H.length;dt++){let vt=H[dt];V(vt,M,D)}else V(H,M,D)}),g.pop(),u=null};let ct=null;function lt(M){ct&&ct(M)}function Pt(){Gt.stop()}function te(){Gt.start()}let Gt=new nl;Gt.setAnimationLoop(lt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(M){ct=M,rt.setAnimationLoop(M),M===null?Gt.stop():Gt.start()},rt.addEventListener("sessionstart",Pt),rt.addEventListener("sessionend",te),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,O,E),u=A.get(M,g.length),u.init(),g.push(u),et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(et),N=this.localClippingEnabled,W=v.init(this.clippingPlanes,N,O),d=_e.get(M,m.length),d.init(),m.push(d),nn(M,O,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(Z,U),W===!0&&v.beginShadows();let V=u.state.shadowsArray;if(k.render(V,M,O),W===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,M),u.setupLights(p.physicallyCorrectLights),O.isArrayCamera){let D=O.cameras;for(let H=0,dt=D.length;H<dt;H++){let vt=D[H];Bt(d,M,vt,vt.viewport)}}else Bt(d,M,O);E!==null&&(ft.updateMultisampleRenderTarget(E),ft.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(p,M,O),q.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function nn(M,O,V,D){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){D&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let vt=Kt.update(M),wt=M.material;wt.visible&&d.push(M,vt,wt,V,it.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Nt.render.frame&&(M.skeleton.update(),M.skeleton.frame=Nt.render.frame),!M.frustumCulled||K.intersectsObject(M))){D&&it.setFromMatrixPosition(M.matrixWorld).applyMatrix4(et);let vt=Kt.update(M),wt=M.material;if(Array.isArray(wt)){let bt=vt.groups;for(let Ot=0,Tt=bt.length;Ot<Tt;Ot++){let Ct=bt[Ot],kt=wt[Ct.materialIndex];kt&&kt.visible&&d.push(M,vt,kt,V,it.z,Ct)}}else wt.visible&&d.push(M,vt,wt,V,it.z,null)}}let dt=M.children;for(let vt=0,wt=dt.length;vt<wt;vt++)nn(dt[vt],O,V,D)}function Bt(M,O,V,D){let H=M.opaque,dt=M.transmissive,vt=M.transparent;u.setupLightsView(V),dt.length>0&&Ge(H,O,V),D&&ht.viewport(C.copy(D)),H.length>0&&Se(H,O,V),dt.length>0&&Se(dt,O,V),vt.length>0&&Se(vt,O,V),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Ge(M,O,V){let D=_t.isWebGL2;z===null&&(z=new Ke(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Pi:Rn,minFilter:Bs,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(J),D?z.setSize(J.x,J.y):z.setSize(Ir(J.x),Ir(J.y));let H=p.getRenderTarget();p.setRenderTarget(z),p.clear();let dt=p.toneMapping;p.toneMapping=je,Se(M,O,V),p.toneMapping=dt,ft.updateMultisampleRenderTarget(z),ft.updateRenderTargetMipmap(z),p.setRenderTarget(H)}function Se(M,O,V){let D=O.isScene===!0?O.overrideMaterial:null;for(let H=0,dt=M.length;H<dt;H++){let vt=M[H],wt=vt.object,bt=vt.geometry,Ot=D===null?vt.material:D,Tt=vt.group;wt.layers.test(V.layers)&&dl(wt,O,V,bt,Ot,Tt)}}function dl(M,O,V,D,H,dt){M.onBeforeRender(p,O,V,D,H,dt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(p,O,V,D,M,dt),H.transparent===!0&&H.side===fn?(H.side=Te,H.needsUpdate=!0,p.renderBufferDirect(V,O,D,H,M,dt),H.side=li,H.needsUpdate=!0,p.renderBufferDirect(V,O,D,H,M,dt),H.side=fn):p.renderBufferDirect(V,O,D,H,M,dt),M.onAfterRender(p,O,V,D,H,dt)}function qi(M,O,V){O.isScene!==!0&&(O=ut);let D=Mt.get(M),H=u.state.lights,dt=u.state.shadowsArray,vt=H.state.version,wt=Ft.getParameters(M,H.state,dt,O,V),bt=Ft.getProgramCacheKey(wt),Ot=D.programs;D.environment=M.isMeshStandardMaterial?O.environment:null,D.fog=O.fog,D.envMap=(M.isMeshStandardMaterial?ne:qt).get(M.envMap||D.environment),Ot===void 0&&(M.addEventListener("dispose",L),Ot=new Map,D.programs=Ot);let Tt=Ot.get(bt);if(Tt!==void 0){if(D.currentProgram===Tt&&D.lightsStateVersion===vt)return Ma(M,wt),Tt}else wt.uniforms=Ft.getUniforms(M),M.onBuild(V,wt,p),M.onBeforeCompile(wt,p),Tt=Ft.acquireProgram(wt,bt),Ot.set(bt,Tt),D.uniforms=wt.uniforms;let Ct=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=v.uniform),Ma(M,wt),D.needsLights=ml(M),D.lightsStateVersion=vt,D.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.directionalShadowMap.value=H.state.directionalShadowMap,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotShadowMap.value=H.state.spotShadowMap,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMap.value=H.state.pointShadowMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix);let kt=Tt.getUniforms(),vn=oi.seqWithValue(kt.seq,Ct);return D.currentProgram=Tt,D.uniformsList=vn,Tt}function Ma(M,O){let V=Mt.get(M);V.outputEncoding=O.outputEncoding,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function fl(M,O,V,D,H){O.isScene!==!0&&(O=ut),ft.resetTextureUnits();let dt=O.fog,vt=D.isMeshStandardMaterial?O.environment:null,wt=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:In,bt=(D.isMeshStandardMaterial?ne:qt).get(D.envMap||vt),Ot=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Tt=!!D.normalMap&&!!V.attributes.tangent,Ct=!!V.morphAttributes.position,kt=!!V.morphAttributes.normal,vn=!!V.morphAttributes.color,Bn=D.toneMapped?p.toneMapping:je,kn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Be=kn!==void 0?kn.length:0,It=Mt.get(D),Vn=u.state.lights;if(W===!0&&(N===!0||M!==S)){let ve=M===S&&D.id===y;v.setState(D,M,ve)}let Yt=!1;D.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Vn.state.version||It.outputEncoding!==wt||H.isInstancedMesh&&It.instancing===!1||!H.isInstancedMesh&&It.instancing===!0||H.isSkinnedMesh&&It.skinning===!1||!H.isSkinnedMesh&&It.skinning===!0||It.envMap!==bt||D.fog===!0&&It.fog!==dt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==v.numPlanes||It.numIntersection!==v.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Tt||It.morphTargets!==Ct||It.morphNormals!==kt||It.morphColors!==vn||It.toneMapping!==Bn||_t.isWebGL2===!0&&It.morphTargetsCount!==Be)&&(Yt=!0):(Yt=!0,It.__version=D.version);let Ae=It.currentProgram;Yt===!0&&(Ae=qi(D,O,H));let sn=!1,wi=!1,Gs=!1,oe=Ae.getUniforms(),yn=It.uniforms;if(ht.useProgram(Ae.program)&&(sn=!0,wi=!0,Gs=!0),D.id!==y&&(y=D.id,wi=!0),sn||S!==M){if(oe.setValue(X,"projectionMatrix",M.projectionMatrix),_t.logarithmicDepthBuffer&&oe.setValue(X,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),S!==M&&(S=M,wi=!0,Gs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let ve=oe.map.cameraPosition;ve!==void 0&&ve.setValue(X,it.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&oe.setValue(X,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||H.isSkinnedMesh)&&oe.setValue(X,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){oe.setOptional(X,H,"bindMatrix"),oe.setOptional(X,H,"bindMatrixInverse");let ve=H.skeleton;ve&&(_t.floatVertexTextures?(ve.boneTexture===null&&ve.computeBoneTexture(),oe.setValue(X,"boneTexture",ve.boneTexture,ft),oe.setValue(X,"boneTextureSize",ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Ws=V.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0&&_t.isWebGL2===!0)&&Q.update(H,V,D,Ae),(wi||It.receiveShadow!==H.receiveShadow)&&(It.receiveShadow=H.receiveShadow,oe.setValue(X,"receiveShadow",H.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(yn.envMap.value=bt,yn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),wi&&(oe.setValue(X,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&pl(yn,Gs),dt&&D.fog===!0&&we.refreshFogUniforms(yn,dt),we.refreshMaterialUniforms(yn,D,$,R,z),oi.upload(X,It.uniformsList,yn,ft)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(oi.upload(X,It.uniformsList,yn,ft),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&oe.setValue(X,"center",H.center),oe.setValue(X,"modelViewMatrix",H.modelViewMatrix),oe.setValue(X,"normalMatrix",H.normalMatrix),oe.setValue(X,"modelMatrix",H.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let ve=D.uniformsGroups;for(let Xs=0,gl=ve.length;Xs<gl;Xs++)if(_t.isWebGL2){let wa=ve[Xs];tt.update(wa,Ae),tt.bind(wa,Ae)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ae}function pl(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ml(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,O,V){Mt.get(M.texture).__webglTexture=O,Mt.get(M.depthTexture).__webglTexture=V;let D=Mt.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){let V=Mt.get(M);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,V=0){E=M,x=O,w=V;let D=!0;if(M){let bt=Mt.get(M);bt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),D=!1):bt.__webglFramebuffer===void 0?ft.setupRenderTarget(M):bt.__hasExternalTextures&&ft.rebindTextures(M,Mt.get(M.texture).__webglTexture,Mt.get(M.depthTexture).__webglTexture)}let H=null,dt=!1,vt=!1;if(M){let bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(vt=!0);let Ot=Mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=Ot[O],dt=!0):_t.isWebGL2&&M.samples>0&&ft.useMultisampledRTT(M)===!1?H=Mt.get(M).__webglMultisampledFramebuffer:H=Ot,C.copy(M.viewport),F.copy(M.scissor),_=M.scissorTest}else C.copy(I).multiplyScalar($).floor(),F.copy(G).multiplyScalar($).floor(),_=Y;if(ht.bindFramebuffer(36160,H)&&_t.drawBuffers&&D&&ht.drawBuffers(M,H),ht.viewport(C),ht.scissor(F),ht.setScissorTest(_),dt){let bt=Mt.get(M.texture);X.framebufferTexture2D(36160,36064,34069+O,bt.__webglTexture,V)}else if(vt){let bt=Mt.get(M.texture),Ot=O||0;X.framebufferTextureLayer(36160,36064,bt.__webglTexture,V||0,Ot)}y=-1},this.readRenderTargetPixels=function(M,O,V,D,H,dt,vt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){ht.bindFramebuffer(36160,wt);try{let bt=M.texture,Ot=bt.format,Tt=bt.type;if(Ot!==Ve&&b.convert(Ot)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ct=Tt===Pi&&(pt.has("EXT_color_buffer_half_float")||_t.isWebGL2&&pt.has("EXT_color_buffer_float"));if(Tt!==Rn&&b.convert(Tt)!==X.getParameter(35738)&&!(Tt===Tn&&(_t.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-D&&V>=0&&V<=M.height-H&&X.readPixels(O,V,D,H,b.convert(Ot),b.convert(Tt),dt)}finally{let bt=E!==null?Mt.get(E).__webglFramebuffer:null;ht.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(M,O,V=0){let D=Math.pow(2,-V),H=Math.floor(O.image.width*D),dt=Math.floor(O.image.height*D);ft.setTexture2D(O,0),X.copyTexSubImage2D(3553,V,0,0,M.x,M.y,H,dt),ht.unbindTexture()},this.copyTextureToTexture=function(M,O,V,D=0){let H=O.image.width,dt=O.image.height,vt=b.convert(V.format),wt=b.convert(V.type);ft.setTexture2D(V,0),X.pixelStorei(37440,V.flipY),X.pixelStorei(37441,V.premultiplyAlpha),X.pixelStorei(3317,V.unpackAlignment),O.isDataTexture?X.texSubImage2D(3553,D,M.x,M.y,H,dt,vt,wt,O.image.data):O.isCompressedTexture?X.compressedTexSubImage2D(3553,D,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,vt,O.mipmaps[0].data):X.texSubImage2D(3553,D,M.x,M.y,vt,wt,O.image),D===0&&V.generateMipmaps&&X.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(M,O,V,D,H=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let dt=M.max.x-M.min.x+1,vt=M.max.y-M.min.y+1,wt=M.max.z-M.min.z+1,bt=b.convert(D.format),Ot=b.convert(D.type),Tt;if(D.isData3DTexture)ft.setTexture3D(D,0),Tt=32879;else if(D.isDataArrayTexture)ft.setTexture2DArray(D,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,D.flipY),X.pixelStorei(37441,D.premultiplyAlpha),X.pixelStorei(3317,D.unpackAlignment);let Ct=X.getParameter(3314),kt=X.getParameter(32878),vn=X.getParameter(3316),Bn=X.getParameter(3315),kn=X.getParameter(32877),Be=V.isCompressedTexture?V.mipmaps[0]:V.image;X.pixelStorei(3314,Be.width),X.pixelStorei(32878,Be.height),X.pixelStorei(3316,M.min.x),X.pixelStorei(3315,M.min.y),X.pixelStorei(32877,M.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(Tt,H,O.x,O.y,O.z,dt,vt,wt,bt,Ot,Be.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Tt,H,O.x,O.y,O.z,dt,vt,wt,bt,Be.data)):X.texSubImage3D(Tt,H,O.x,O.y,O.z,dt,vt,wt,bt,Ot,Be),X.pixelStorei(3314,Ct),X.pixelStorei(32878,kt),X.pixelStorei(3316,vn),X.pixelStorei(3315,Bn),X.pixelStorei(32877,kn),H===0&&D.generateMipmaps&&X.generateMipmap(Tt),ht.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ft.setTextureCube(M,0):M.isData3DTexture?ft.setTexture3D(M,0):M.isDataArrayTexture?ft.setTexture2DArray(M,0):ft.setTexture2D(M,0),ht.unbindTexture()},this.resetState=function(){x=0,w=0,E=null,ht.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var $r=class extends Hi{};$r.prototype.isWebGL1Renderer=!0;var Ps=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var Fi=class extends mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Uo=new P,Bo=new P,ko=new Ht,Sr=new ws,ps=new di,Zr=class extends Xt{constructor(t=new ge,e=new Fi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Uo.fromBufferAttribute(e,i-1),Bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(Bo);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(i),ps.radius+=s,t.ray.intersectsSphere(ps)===!1)return;ko.copy(i).invert(),Sr.copy(t.ray).applyMatrix4(ko);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,l=new P,h=new P,d=new P,u=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let x=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let E=x,y=w-1;E<y;E+=m){let S=g.getX(E),C=g.getX(E+1);if(l.fromBufferAttribute(f,S),h.fromBufferAttribute(f,C),Sr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let _=t.ray.origin.distanceTo(u);_<t.near||_>t.far||e.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,o.start),w=Math.min(f.count,o.start+o.count);for(let E=x,y=w-1;E<y;E+=m){if(l.fromBufferAttribute(f,E),h.fromBufferAttribute(f,E+1),Sr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(u);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}},Vo=new P,Ho=new P,Rs=class extends Zr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Vo.fromBufferAttribute(e,i),Ho.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Vo.distanceTo(Ho);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var pi=class extends ge{constructor(t=1,e=1,n=1,i=8,s=1,o=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],m=[],g=0,p=[],f=n/2,x=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(m,2));function w(){let y=new P,S=new P,C=0,F=(e-t)/n;for(let _=0;_<=s;_++){let T=[],R=_/s,$=R*(e-t)+t;for(let Z=0;Z<=i;Z++){let U=Z/i,I=U*c+r,G=Math.sin(I),Y=Math.cos(I);S.x=$*G,S.y=-R*n+f,S.z=$*Y,d.push(S.x,S.y,S.z),y.set(G,F,Y).normalize(),u.push(y.x,y.y,y.z),m.push(U,1-R),T.push(g++)}p.push(T)}for(let _=0;_<i;_++)for(let T=0;T<s;T++){let R=p[T][_],$=p[T+1][_],Z=p[T+1][_+1],U=p[T][_+1];h.push(R,$,U),h.push($,Z,U),C+=6}l.addGroup(x,C,0),x+=C}function E(y){let S=g,C=new yt,F=new P,_=0,T=y===!0?t:e,R=y===!0?1:-1;for(let Z=1;Z<=i;Z++)d.push(0,f*R,0),u.push(0,R,0),m.push(.5,.5),g++;let $=g;for(let Z=0;Z<=i;Z++){let I=Z/i*c+r,G=Math.cos(I),Y=Math.sin(I);F.x=T*Y,F.y=f*R,F.z=T*G,d.push(F.x,F.y,F.z),u.push(0,R,0),C.x=G*.5+.5,C.y=Y*.5*R+.5,m.push(C.x,C.y),g++}for(let Z=0;Z<i;Z++){let U=S+Z,I=$+Z;y===!0?h.push(I,I+1,U):h.push(I+1,I,U),_+=3}l.addGroup(x,_,y===!0?1:2),x+=_}}static fromJSON(t){return new pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mi=class extends ge{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+r,Math.PI),l=0,h=[],d=new P,u=new P,m=[],g=[],p=[],f=[];for(let x=0;x<=n;x++){let w=[],E=x/n,y=0;x==0&&o==0?y=.5/e:x==n&&c==Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){let C=S/e;d.x=-t*Math.cos(i+C*s)*Math.sin(o+E*r),d.y=t*Math.cos(o+E*r),d.z=t*Math.sin(i+C*s)*Math.sin(o+E*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(C+y,1-E),w.push(l++)}h.push(w)}for(let x=0;x<n;x++)for(let w=0;w<e;w++){let E=h[x][w+1],y=h[x][w],S=h[x+1][w],C=h[x+1][w+1];(x!==0||o>0)&&m.push(E,y,C),(x!==n-1||c<Math.PI)&&m.push(y,S,C)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(f,2))}static fromJSON(t){return new mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gi=class extends mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function dn(a,t,e){return ol(a)?new a.constructor(a.subarray(t,e!==void 0?e:a.length)):a.slice(t,e)}function ms(a,t,e){return!a||!e&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function ol(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}var xi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let r=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(n=2,s=r);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let r=n+o>>>1;t<e[r]?o=r:n=r+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jr=class extends xi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qa,endingEnd:Qa}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,r=i[s],c=i[o];if(r===void 0)switch(this.getSettings_().endingStart){case to:s=t,r=2*e-n;break;case eo:s=i.length-2,r=e+i[s]-i[s+1];break;default:s=t,r=n}if(c===void 0)switch(this.getSettings_().endingEnd){case to:o=t,c=2*n-e;break;case eo:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-r),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=t*r,l=c-r,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),p=g*g,f=p*g,x=-u*f+2*u*p-u*g,w=(1+u)*f+(-1.5-2*u)*p+(-.5+u)*g+1,E=(-1-m)*f+(1.5+m)*p+.5*g,y=m*f-m*p;for(let S=0;S!==r;++S)s[S]=x*o[h+S]+w*o[l+S]+E*o[c+S]+y*o[d+S];return s}},jr=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=t*r,l=c-r,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==r;++u)s[u]=o[l+u]*d+o[c+u]*h;return s}},Kr=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ze=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case vs:e=this.InterpolantFactoryMethodLinear;break;case Js:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return Js}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let r=this.getValueSize();this.times=dn(n,s,o),this.values=dn(this.values,s*r,o*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let r=0;r!==s;r++){let c=n[r];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,c,o),t=!1;break}o=c}if(i!==void 0&&ol(i))for(let r=0,c=i.length;r!==c;++r){let l=i[r];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,l),t=!1;break}}return t}optimize(){let t=dn(this.times),e=dn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Js,s=t.length-1,o=1;for(let r=1;r<s;++r){let c=!1,l=t[r],h=t[r+1];if(l!==h&&(r!==1||l!==t[0]))if(i)c=!0;else{let d=r*n,u=d-n,m=d+n;for(let g=0;g!==n;++g){let p=e[d+g];if(p!==e[u+g]||p!==e[m+g]){c=!0;break}}}if(c){if(r!==o){t[o]=t[r];let d=r*n,u=o*n;for(let m=0;m!==n;++m)e[u+m]=e[d+m]}++o}}if(s>0){t[o]=t[s];for(let r=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[r+l];++o}return o!==t.length?(this.times=dn(t,0,o),this.values=dn(e,0,o*n)):(this.times=t,this.values=e),this}clone(){let t=dn(this.times,0),e=dn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ze.prototype.TimeBufferType=Float32Array;ze.prototype.ValueBufferType=Float32Array;ze.prototype.DefaultInterpolation=vs;var Fn=class extends ze{};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=_s;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends ze{};Qr.prototype.ValueTypeName="color";var ta=class extends ze{};ta.prototype.ValueTypeName="number";var ea=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,c=(n-e)/(i-e),l=t*r;for(let h=l+r;l!==h;l+=4)Oe.slerpFlat(s,0,o,l-r,o,l,c);return s}},Oi=class extends ze{InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}};Oi.prototype.ValueTypeName="quaternion";Oi.prototype.DefaultInterpolation=vs;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends ze{};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=_s;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends ze{};na.prototype.ValueTypeName="vector";var Go={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},ia=class{constructor(t,e,n){let i=this,s=!1,o=0,r=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Zf=new ia,Is=class{constructor(t){this.manager=t!==void 0?t:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};var sa=class extends Is{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Go.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;let r=Ri("img");function c(){h(),Go.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",c,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",c,!1),r.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}};var Ds=class extends Is{constructor(t){super(t)}load(t,e,n,i){let s=new me,o=new sa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Ns=class extends Xt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Fs=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wo=new Ht,Xo=new P,qo=new P,ra=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},aa=class extends ra{constructor(){super(new ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Os=class extends Ns{constructor(t,e,n=0,i=Math.PI/3,s=0,o=1){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DefaultUp),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new aa}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ua="\\[\\]\\.:\\/",Jf=new RegExp("["+ua+"]","g"),da="[^"+ua+"]",jf="[^"+ua.replace("\\.","")+"]",Kf=/((?:WC+[\/:])*)/.source.replace("WC",da),Qf=/(WCOD+)?/.source.replace("WCOD",jf),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",da),ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",da),np=new RegExp("^"+Kf+Qf+tp+ep+"$"),ip=["material","materials","bones","map"],oa=class{constructor(t,e,n){let i=n||Dt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Dt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Dt.parseTrackName(e),this.node=Dt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Dt.Composite(t,e,n):new Dt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jf,"")}static parseTrackName(t){let e=np.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ip.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let r=s[o];if(r.name===e||r.uuid===e)return r;let c=n(r.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Dt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=oa;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mp=new Float32Array(1);var zi=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yo=new P,zs=class extends Xt{constructor(t,e){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=e;let n=new ge,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,r=1,c=32;o<c;o++,r++){let l=o/c*Math.PI*2,h=r/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Jt(i,3));let s=new Fi({fog:!1,toneMapped:!1});this.cone=new Rs(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Yo.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Yo),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}};var gs=new P,Vt=new Ii,Ui=class extends Rs{constructor(t){let e=new ge,n=new Fi({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};r("n1","n2"),r("n2","n4"),r("n4","n3"),r("n3","n1"),r("f1","f2"),r("f2","f4"),r("f4","f3"),r("f3","f1"),r("n1","f1"),r("n2","f2"),r("n3","f3"),r("n4","f4"),r("p","n1"),r("p","n2"),r("p","n3"),r("p","n4"),r("u1","u2"),r("u2","u3"),r("u3","u1"),r("c","t"),r("p","c"),r("cn1","cn2"),r("cn3","cn4"),r("cf1","cf2"),r("cf3","cf4");function r(g,p){c(g),c(p)}function c(g){i.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}e.setAttribute("position",new Jt(i,3)),e.setAttribute("color",new Jt(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let l=new St(16755200),h=new St(16711680),d=new St(43775),u=new St(16777215),m=new St(3355443);this.setColors(l,h,d,u,m)}setColors(t,e,n,i,s){let r=this.geometry.getAttribute("color");r.setXYZ(0,t.r,t.g,t.b),r.setXYZ(1,t.r,t.g,t.b),r.setXYZ(2,t.r,t.g,t.b),r.setXYZ(3,t.r,t.g,t.b),r.setXYZ(4,t.r,t.g,t.b),r.setXYZ(5,t.r,t.g,t.b),r.setXYZ(6,t.r,t.g,t.b),r.setXYZ(7,t.r,t.g,t.b),r.setXYZ(8,t.r,t.g,t.b),r.setXYZ(9,t.r,t.g,t.b),r.setXYZ(10,t.r,t.g,t.b),r.setXYZ(11,t.r,t.g,t.b),r.setXYZ(12,t.r,t.g,t.b),r.setXYZ(13,t.r,t.g,t.b),r.setXYZ(14,t.r,t.g,t.b),r.setXYZ(15,t.r,t.g,t.b),r.setXYZ(16,t.r,t.g,t.b),r.setXYZ(17,t.r,t.g,t.b),r.setXYZ(18,t.r,t.g,t.b),r.setXYZ(19,t.r,t.g,t.b),r.setXYZ(20,t.r,t.g,t.b),r.setXYZ(21,t.r,t.g,t.b),r.setXYZ(22,t.r,t.g,t.b),r.setXYZ(23,t.r,t.g,t.b),r.setXYZ(24,e.r,e.g,e.b),r.setXYZ(25,e.r,e.g,e.b),r.setXYZ(26,e.r,e.g,e.b),r.setXYZ(27,e.r,e.g,e.b),r.setXYZ(28,e.r,e.g,e.b),r.setXYZ(29,e.r,e.g,e.b),r.setXYZ(30,e.r,e.g,e.b),r.setXYZ(31,e.r,e.g,e.b),r.setXYZ(32,n.r,n.g,n.b),r.setXYZ(33,n.r,n.g,n.b),r.setXYZ(34,n.r,n.g,n.b),r.setXYZ(35,n.r,n.g,n.b),r.setXYZ(36,n.r,n.g,n.b),r.setXYZ(37,n.r,n.g,n.b),r.setXYZ(38,i.r,i.g,i.b),r.setXYZ(39,i.r,i.g,i.b),r.setXYZ(40,s.r,s.g,s.b),r.setXYZ(41,s.r,s.g,s.b),r.setXYZ(42,s.r,s.g,s.b),r.setXYZ(43,s.r,s.g,s.b),r.setXYZ(44,s.r,s.g,s.b),r.setXYZ(45,s.r,s.g,s.b),r.setXYZ(46,s.r,s.g,s.b),r.setXYZ(47,s.r,s.g,s.b),r.setXYZ(48,s.r,s.g,s.b),r.setXYZ(49,s.r,s.g,s.b),r.needsUpdate=!0}update(){let t=this.geometry,e=this.pointMap,n=1,i=1;Vt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Wt("c",e,t,Vt,0,0,-1),Wt("t",e,t,Vt,0,0,1),Wt("n1",e,t,Vt,-n,-i,-1),Wt("n2",e,t,Vt,n,-i,-1),Wt("n3",e,t,Vt,-n,i,-1),Wt("n4",e,t,Vt,n,i,-1),Wt("f1",e,t,Vt,-n,-i,1),Wt("f2",e,t,Vt,n,-i,1),Wt("f3",e,t,Vt,-n,i,1),Wt("f4",e,t,Vt,n,i,1),Wt("u1",e,t,Vt,n*.7,i*1.1,-1),Wt("u2",e,t,Vt,-n*.7,i*1.1,-1),Wt("u3",e,t,Vt,0,i*2,-1),Wt("cf1",e,t,Vt,-n,0,1),Wt("cf2",e,t,Vt,n,0,1),Wt("cf3",e,t,Vt,0,-i,1),Wt("cf4",e,t,Vt,0,i,1),Wt("cn1",e,t,Vt,-n,0,-1),Wt("cn2",e,t,Vt,n,0,-1),Wt("cn3",e,t,Vt,0,-i,-1),Wt("cn4",e,t,Vt,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Wt(a,t,e,n,i,s,o){gs.set(i,s,o).unproject(n);let r=t[a];if(r!==void 0){let c=e.getAttribute("position");for(let l=0,h=r.length;l<h;l++)c.setXYZ(r[l],gs.x,gs.y,gs.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);var Le=class{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Le.nextNameID=Le.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Le.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},fa=class extends Le{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function pa(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}var rp={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:pa,toHexString:pa},Wi={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},ap={isPrimitive:!1,match:Array.isArray,fromHexString(a,t,e=1){let n=Wi.fromHexString(a);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([a,t,e],n=1)=>Wi.toHexString(a*(n=255/n)<<16^t*n<<8^e*n<<0)},op={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){let n=Wi.fromHexString(a);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:a,g:t,b:e},n=1)=>Wi.toHexString(a*(n=255/n)<<16^t*n<<8^e*n<<0)},lp=[rp,Wi,ap,op],ma=class extends Le{constructor(t,e,n,i){var s;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,lp.find(o=>o.match(s))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let o=pa(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},Gi=class extends Le{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}},ga=class extends Le{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);let r=o!==void 0;this.step(r?o:this._getImplicitStep(),r),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=h=>{let d=parseFloat(this.$input.value);isNaN(d)||(this._snapClampSetValue(d+h),this.$input.value=this.getValue())},e,n,i,s,o,r=!1,c=h=>{if(r){let d=h.clientX-e,u=h.clientY-n;Math.abs(u)>5?(h.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(d)>5&&l()}if(!r){let d=h.clientY-i;o-=d*this._step*this._arrowKeyMultiplier(h),s+o>this._max?o=this._max-s:s+o<this._min&&(o=this._min-s),this._snapClampSetValue(s+o)}i=h.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||this.setValue(this._clamp(h))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))}),this.$input.addEventListener("mousedown",h=>{e=h.clientX,n=i=h.clientY,r=!0,s=this.getValue(),o=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let t=u=>{let m=this.$slider.getBoundingClientRect(),g=(p=u,f=m.left,x=m.right,w=this._min,E=this._max,(p-f)/(x-f)*(E-w)+w);var p,f,x,w,E;this._snapClampSetValue(g)},e=u=>{t(u.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)},i,s,o=!1,r=u=>{u.preventDefault(),this._setDraggingStyle(!0),t(u.touches[0].clientX),o=!1},c=u=>{if(o){let m=u.touches[0].clientX-i,g=u.touches[0].clientY-s;Math.abs(m)>Math.abs(g)?r(u):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else u.preventDefault(),t(u.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},h=this._callOnFinishChange.bind(this),d;this.$slider.addEventListener("mousedown",u=>{this._setDraggingStyle(!0),t(u.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",u=>{u.touches.length>1||(this._hasScrollBar?(i=u.touches[0].clientX,s=u.touches[0].clientY,o=!0):r(u),window.addEventListener("touchmove",c),window.addEventListener("touchend",l))}),this.$slider.addEventListener("wheel",u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();let m=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},xa=class extends Le{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{let o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}},_a=class extends Le{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},ll=!1,vi=class{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:r=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),r&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!ll&&o&&(function(c){let l=document.createElement("style");l.innerHTML=c;let h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(l,h):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),ll=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,n,i,s){if(Object(n)===n)return new xa(this,t,e,n);let o=t[e];switch(typeof o){case"number":return new ga(this,t,e,n,i,s);case"boolean":return new fa(this,t,e);case"string":return new _a(this,t,e);case"function":return new Gi(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new ma(this,t,e,n)}addFolder(t){return new vi({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Gi||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Gi)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");let n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);let i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}};var cl={type:"change"},va={type:"start"},hl={type:"end"},Vs=class extends He{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:Un.ROTATE,TWO:Un.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",_e),this._domElementKeyEvents=b},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cl),n.update(),s=i.NONE},this.update=function(){let b=new P,q=new Oe().setFromUnitVectors(t.up,new P(0,1,0)),tt=q.clone().invert(),ot=new P,rt=new Oe,gt=2*Math.PI;return function(){let Ut=n.object.position;b.copy(Ut).sub(n.target),b.applyQuaternion(q),r.setFromVector3(b),n.autoRotate&&s===i.NONE&&T(F()),n.enableDamping?(r.theta+=c.theta*n.dampingFactor,r.phi+=c.phi*n.dampingFactor):(r.theta+=c.theta,r.phi+=c.phi);let L=n.minAzimuthAngle,st=n.maxAzimuthAngle;return isFinite(L)&&isFinite(st)&&(L<-Math.PI?L+=gt:L>Math.PI&&(L-=gt),st<-Math.PI?st+=gt:st>Math.PI&&(st-=gt),L<=st?r.theta=Math.max(L,Math.min(st,r.theta)):r.theta=r.theta>(L+st)/2?Math.max(L,r.theta):Math.min(st,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),b.setFromSpherical(r),b.applyQuaternion(tt),Ut.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,d||ot.distanceToSquared(n.object.position)>o||8*(1-rt.dot(n.object.quaternion))>o?(n.dispatchEvent(cl),ot.copy(n.object.position),rt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",qt),n.domElement.removeEventListener("pointercancel",xe),n.domElement.removeEventListener("wheel",we),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",jt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",_e)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,r=new zi,c=new zi,l=1,h=new P,d=!1,u=new yt,m=new yt,g=new yt,p=new yt,f=new yt,x=new yt,w=new yt,E=new yt,y=new yt,S=[],C={};function F(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function T(b){c.theta-=b}function R(b){c.phi-=b}let $=function(){let b=new P;return function(tt,ot){b.setFromMatrixColumn(ot,0),b.multiplyScalar(-tt),h.add(b)}}(),Z=function(){let b=new P;return function(tt,ot){n.screenSpacePanning===!0?b.setFromMatrixColumn(ot,1):(b.setFromMatrixColumn(ot,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(tt),h.add(b)}}(),U=function(){let b=new P;return function(tt,ot){let rt=n.domElement;if(n.object.isPerspectiveCamera){let gt=n.object.position;b.copy(gt).sub(n.target);let Et=b.length();Et*=Math.tan(n.object.fov/2*Math.PI/180),$(2*tt*Et/rt.clientHeight,n.object.matrix),Z(2*ot*Et/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(tt*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),Z(ot*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(b){n.object.isPerspectiveCamera?l/=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*b)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(b){n.object.isPerspectiveCamera?l*=b:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(b){u.set(b.clientX,b.clientY)}function K(b){w.set(b.clientX,b.clientY)}function W(b){p.set(b.clientX,b.clientY)}function N(b){m.set(b.clientX,b.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);let q=n.domElement;T(2*Math.PI*g.x/q.clientHeight),R(2*Math.PI*g.y/q.clientHeight),u.copy(m),n.update()}function z(b){E.set(b.clientX,b.clientY),y.subVectors(E,w),y.y>0?I(_()):y.y<0&&G(_()),w.copy(E),n.update()}function et(b){f.set(b.clientX,b.clientY),x.subVectors(f,p).multiplyScalar(n.panSpeed),U(x.x,x.y),p.copy(f),n.update()}function J(b){b.deltaY<0?G(_()):b.deltaY>0&&I(_()),n.update()}function it(b){let q=!1;switch(b.code){case n.keys.UP:U(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),q=!0;break}q&&(b.preventDefault(),n.update())}function ut(){if(S.length===1)u.set(S[0].pageX,S[0].pageY);else{let b=.5*(S[0].pageX+S[1].pageX),q=.5*(S[0].pageY+S[1].pageY);u.set(b,q)}}function xt(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{let b=.5*(S[0].pageX+S[1].pageX),q=.5*(S[0].pageY+S[1].pageY);p.set(b,q)}}function X(){let b=S[0].pageX-S[1].pageX,q=S[0].pageY-S[1].pageY,tt=Math.sqrt(b*b+q*q);w.set(0,tt)}function Rt(){n.enableZoom&&X(),n.enablePan&&xt()}function pt(){n.enableZoom&&X(),n.enableRotate&&ut()}function _t(b){if(S.length==1)m.set(b.pageX,b.pageY);else{let tt=mt(b),ot=.5*(b.pageX+tt.x),rt=.5*(b.pageY+tt.y);m.set(ot,rt)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);let q=n.domElement;T(2*Math.PI*g.x/q.clientHeight),R(2*Math.PI*g.y/q.clientHeight),u.copy(m)}function ht(b){if(S.length===1)f.set(b.pageX,b.pageY);else{let q=mt(b),tt=.5*(b.pageX+q.x),ot=.5*(b.pageY+q.y);f.set(tt,ot)}x.subVectors(f,p).multiplyScalar(n.panSpeed),U(x.x,x.y),p.copy(f)}function Nt(b){let q=mt(b),tt=b.pageX-q.x,ot=b.pageY-q.y,rt=Math.sqrt(tt*tt+ot*ot);E.set(0,rt),y.set(0,Math.pow(E.y/w.y,n.zoomSpeed)),I(y.y),w.copy(E)}function Mt(b){n.enableZoom&&Nt(b),n.enablePan&&ht(b)}function ft(b){n.enableZoom&&Nt(b),n.enableRotate&&_t(b)}function qt(b){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",ne),n.domElement.addEventListener("pointerup",jt)),j(b),b.pointerType==="touch"?A(b):Kt(b))}function ne(b){n.enabled!==!1&&(b.pointerType==="touch"?v(b):Ft(b))}function jt(b){Q(b),S.length===0&&(n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",jt)),n.dispatchEvent(hl),s=i.NONE}function xe(b){Q(b)}function Kt(b){let q;switch(b.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case zn.DOLLY:if(n.enableZoom===!1)return;K(b),s=i.DOLLY;break;case zn.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;W(b),s=i.PAN}else{if(n.enableRotate===!1)return;Y(b),s=i.ROTATE}break;case zn.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;Y(b),s=i.ROTATE}else{if(n.enablePan===!1)return;W(b),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function Ft(b){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;N(b);break;case i.DOLLY:if(n.enableZoom===!1)return;z(b);break;case i.PAN:if(n.enablePan===!1)return;et(b);break}}function we(b){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(b.preventDefault(),n.dispatchEvent(va),J(b),n.dispatchEvent(hl))}function _e(b){n.enabled===!1||n.enablePan===!1||it(b)}function A(b){switch(at(b),S.length){case 1:switch(n.touches.ONE){case Un.ROTATE:if(n.enableRotate===!1)return;ut(),s=i.TOUCH_ROTATE;break;case Un.PAN:if(n.enablePan===!1)return;xt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Un.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Rt(),s=i.TOUCH_DOLLY_PAN;break;case Un.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(va)}function v(b){switch(at(b),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_t(b),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ht(b),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(b),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ft(b),n.update();break;default:s=i.NONE}}function k(b){n.enabled!==!1&&b.preventDefault()}function j(b){S.push(b)}function Q(b){delete C[b.pointerId];for(let q=0;q<S.length;q++)if(S[q].pointerId==b.pointerId){S.splice(q,1);return}}function at(b){let q=C[b.pointerId];q===void 0&&(q=new yt,C[b.pointerId]=q),q.set(b.pageX,b.pageY)}function mt(b){let q=b.pointerId===S[0].pointerId?S[1]:S[0];return C[q.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",qt),n.domElement.addEventListener("pointercancel",xe),n.domElement.addEventListener("wheel",we,{passive:!1}),this.update()}};var ae,Ue,_n,xn,gn,yi,Lt,bi,Mi,Hs,Xi,ya=window.innerWidth,ba=window.innerHeight,ul=.3,cp=ul*ya/ba*108/192,hp=ul,up=cp,en=[{left:0,bottom:0,width:1,height:1,background:new St(.5,.5,.7)},{right:0,bottom:0,width:hp,height:up,background:new St(0,0,0)}];dp();function dp(){ae=new Hi({antialias:!0}),ae.setPixelRatio(window.devicePixelRatio),ae.setSize(window.innerWidth,window.innerHeight),ae.setAnimationLoop(pp),ae.shadowMap.enabled=!0,ae.shadowMap.type=Bi,ae.outputEncoding=zt,ae.toneMapping=ki,document.body.appendChild(ae.domElement),gn=new Hi({antialias:!0}),gn.setSize(1920,1080),gn.shadowMap.enabled=!0,gn.shadowMap.type=Bi,gn.outputEncoding=zt,gn.toneMapping=ki,yi=new Hi({antialias:!0}),yi.setSize(1920,1080),yi.shadowMap.enabled=!0,yi.shadowMap.type=Bi,yi.outputEncoding=zt,yi.toneMapping=ki,Ue=new Ps,_n=new ie(35,window.innerWidth/window.innerHeight,1,1e3),_n.position.set(76,50,10),_n.rotation.set(-1.29,1.15,1.26),en[0].camera=_n;let a=new Vs(_n,ae.domElement);a.minDistance=20,a.maxDistance=500,a.target.set(0,18,0),a.update();let t=new Fs(16777215,4473924,.05);Ue.add(t);let e=new Ds().setPath("textures/"),n=["colors.png","uv_grid_opengl.jpg","white.png","gradient.png"];Xi={none:null};for(let m=0;m<n.length;m++){let g=n[m],p=e.load(g);p.minFilter=le,p.magFilter=le,p.encoding=zt,p.name=g,Xi[g]=p}let i=50;Lt=new Os(16777215,10),Lt.position.set(0,i,50),Lt.angle=Math.PI/4,Lt.penumbra=.001,Lt.decay=.001,Lt.distance=500,Lt.map=Xi["white.png"],Lt.projector=!0,Lt.castShadow=!0,Lt.shadow.mapSize.width=1920,Lt.shadow.mapSize.height=1080,Lt.shadow.camera.near=10,Lt.shadow.camera.far=200,Lt.shadow.camera.fov=60,Lt.shadow.focus=.5,Ue.add(Lt),bi=new zs(Lt),Ue.add(bi),Mi=new Ui(Lt.shadow.camera),Ue.add(Mi);let s=new mi(1,32,32),o=new gi;Hs=new pe(s,o),Hs.position.set(0,i,-50),Ue.add(Hs),Lt.target=Hs;let r=en[1].width/en[1].height;xn=new ie(60,r,10,1e3),xn.position.set(50,i,50),xn.lookAt(0,i,-50),_n.lookAt(0,i,-50),xn.aspect=r,xn.updateProjectionMatrix(),en[1].camera=xn;let c=new Ui(xn);Ue.add(c);let l=new pe(new Qe(20,20,20),new gi);l.rotation.y=Math.PI/3,l.rotation.x=Math.PI/3,l.rotation.z=Math.PI/3,l.position.y=48,l.position.z=-40,l.castShadow=!0,l.receiveShadow=!0,Ue.add(l);let h=new pe(new pi(10,10,20,32),new gi);h.position.x=40,h.position.y=48,h.position.z=-50,h.castShadow=!0,h.receiveShadow=!0,Ue.add(h),window.addEventListener("resize",fp);let d=new vi,u={\u6295\u5F71\u56FE\u50CF:Xi["white.png"],\u6295\u5F71\u989C\u8272:Lt.color.getHex(),\u6295\u5F71\u4EAE\u5EA6:Lt.intensity,\u6295\u5F71\u8DDD\u79BB:Lt.distance,\u6295\u5F71\u89D2\u5EA6:Lt.angle,\u6295\u5F71\u7126\u8DDD:Lt.shadow.focus,\u6295\u5F71\u6BD4\u4F8B:1,\u76F8\u673A\u89C6\u56FE\u4E0B\u8F7D:function(){en[1].camera.updateProjectionMatrix();var m=document.createElement("a");bi.visible=!1,Mi.visible=!1,c.visible=!1,gn.render(Ue,en[1].camera),m.href=gn.domElement.toDataURL().replace("image/png","image/octet-stream"),m.download="camera_view.png",m.click()}};d.add(u,"\u6295\u5F71\u56FE\u50CF",Xi).onChange(function(m){Lt.map=m,en[1].camera.updateProjectionMatrix()}),d.addColor(u,"\u6295\u5F71\u989C\u8272").onChange(function(m){Lt.color.setHex(m)}),d.add(u,"\u6295\u5F71\u4EAE\u5EA6",0,10).onChange(function(m){Lt.intensity=m}),d.add(u,"\u6295\u5F71\u6BD4\u4F8B",.1,10).onChange(function(m){Lt.projectorAspect=m}),d.add(u,"\u6295\u5F71\u8DDD\u79BB",50,200).onChange(function(m){Lt.distance=m}),d.add(u,"\u6295\u5F71\u89D2\u5EA6",0,Math.PI/3).onChange(function(m){Lt.angle=m}),d.add(u,"\u6295\u5F71\u7126\u8DDD",0,1).onChange(function(m){Lt.shadow.focus=m}),d.add(u,"\u76F8\u673A\u89C6\u56FE\u4E0B\u8F7D"),d.open()}function fp(){_n.aspect=window.innerWidth/window.innerHeight,_n.updateProjectionMatrix(),ae.setSize(window.innerWidth,window.innerHeight)}function pp(){bi.update(),Mi.update(),Lt.projector?(bi.visible=!1,Mi.visible=!0):(bi.visible=!0,Mi.visible=!1);for(let a=0;a<en.length;++a){let t=en[a],e=t.camera,n=Math.floor(ya*t.left),i=Math.floor(ba*t.bottom),s=Math.floor(ya*t.width),o=Math.floor(ba*t.height);ae.setViewport(n,i,s,o),ae.setScissor(n,i,s,o),ae.setScissorTest(!0),ae.setClearColor(t.background),e.aspect=s/o,e.updateProjectionMatrix(),ae.render(Ue,e)}xn.updateProjectionMatrix(),Lt.shadow.camera.updateProjectionMatrix()}})();
//# sourceMappingURL=app-Z72OVWV3.js.map
