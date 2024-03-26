# 浏览器

## 工作流程

1. 浏览器载入 **HTML** 文件（比如从网络上获取）。
2. 将 HTML 文件转化成一个 **DOM**（Document Object Model）。
3. 浏览器会**拉取该 HTML 相关的大部分资源**，比如嵌入到页面的图片、视频和 CSS 样式。JavaScript 则会稍后进行处理。
4. 浏览器拉取到 CSS 之后会进行解析，根据选择器的不同类型（比如 element、class、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 DOM 的节点中，并添加节点依赖的样式（这个中间步骤称为**渲染树**）。
5. 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行**布局**。
6. 网页**展示**在屏幕上（这一步被称为着色）。

结合下面的图示更形象：

![img](rendering.svg)

## DOM

一个 DOM 有一个树形结构，标记语言中的每一个**元素、属性以及每一段文字**都对应着结构树中的一个节点（Node/DOM 或 DOM node）。

### 当浏览器遇到无法解析的 CSS 代码会发生什么

什么也不会做，继续解析下一个 CSS 样式。

当你为一个元素指定多个 CSS 样式的时候，浏览器会加载样式表中的**最后**的 CSS 代码进行渲染。

**好处**：可以为同一个元素指定多个 CSS 样式来解决有些浏览器不兼容新特性的问题。

## URL

## [同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)

### 基础概念

#### **出现原因**

出于安全考虑

#### **源的定义**

- 如果两个 URL 的协议、域名、端口 (en-US)（如果有指定的话）和主机都相同的话，则这两个 URL 是同源的。

> 协议 + 域名 + 端口

#### **同源限制**

- **JavaScript 的跨域请求**
- **DOM 的跨域访问**：一个网页中的 JavaScript 无法直接访问另一个源的 DOM 结构。

####  **源的继承**

- 在页面中通过 about:blank 或 javascript: URL 执行的脚本会继承打开该 URL 的文档的源，因为这些类型的 URL 没有包含源服务器的相关信息。如果此弹出窗口也包含 JavaScript，则该脚本将从创建它的脚本那里继承对应的源。

####  **文件源：**

- 使用 file:/// 模式加载的文件的来源视为不透明的来源。
- 一个文件包括来自同一文件夹的其他文件，它们不会被认为来自同一来源，并可能引发 CORS 错误。
    - 文件的来源与实现有关，一些浏览器可能将同一目录或子目录下的文件视为同源文件

####  **跨源网络访问**

同源策略控制不同源之间的交互，例如在使用 XMLHttpRequest 或 <img> 标签时则会受到同源策略的约束。  
这些交互通常分为三类：

- 跨源**写操作**（Cross-origin writes）一般是被允许的。例如链接、重定向以及表单提交。特定少数的 HTTP 请求需要添加[预检请求](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS#预检请求)。
- 跨源**资源嵌入**（Cross-origin embedding）一般是被允许的（后面会举例说明）。
- 跨源**读操作**（Cross-origin reads）一般是不被允许的，但常可以通过内嵌资源来巧妙的进行读取访问。例如，你可以读取嵌入图片的高度和宽度，调用内嵌脚本的方法，或[得知内嵌资源的可用性](https://bugzil.la/629094)。

可能嵌入跨源的资源的一些示例：

- 使用 `<script src="…"></script>` 标签嵌入的 JavaScript 脚本。语法错误信息只能被同源脚本中捕捉到。
- 使用 `<link rel="stylesheet" href="…">` 标签嵌入的 CSS。由于 CSS 的松散的语法规则，CSS 的跨源需要一个设置正确的 `Content-Type` 标头。如果样式表是跨源的，且 MIME 类型不正确，资源不以有效的 CSS 结构开始，浏览器会阻止它的加载。
- 通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 展示的图片。
- 通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio) 播放的多媒体资源。
- 通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/object) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed) 和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed) 嵌入的插件。
- 通过 [`@font-face`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 引入的字体。一些浏览器允许跨源字体（cross-origin fonts），另一些需要同源字体（same-origin fonts）。
- 通过 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe) 载入的任何资源。站点可以使用 [`X-Frame-Options`]跨源交互。



### 如何允许跨源访问

#### CORS

**两类请求：**

简单请求+预检请求(preflight)

**简单请求**

>方法：GET、HEAD、POST
>
>头部符合CORS安全规范
>
>Content-Type: text/plain、multipart/form-data、application/x-www-form-urlencoded

**解决方案：**

带Origin:http://abc.com，

```
Access-Control-Allow-Origin: http://abc.com
```

或者

```
Access-Control-Allow-Origin: *
```

**预检请求：**

```
Access-Control-Allow-Origin: http://abc.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: a,b,content-type
Access-Control-Max-Age: 86400
```

#### JSONP

> 通过在页面创建script标签，通过服务端函数调用返回资源。
>
> 只能发GET

#### 代理服务器

> 在代理服务器转发请求，服务器间无跨域。

开发环境跨域问题，使用代理服务器连接nginx。
