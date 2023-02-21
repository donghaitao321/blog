# CSS 模块化

参考：[梳理 CSS 模块化](https://juejin.cn/post/6844904034281734151)

参考：[如何为你的 React 应用设计样式——介绍 5 种 CSS 方法](https://www.freecodecamp.org/chinese/news/how-to-style-react-apps-with-css/)

## 大纲

- CSS 发展
- CSS 模块化定义
- CSS 模块化的实现方式

## 发展
### 发展阶段：
- 手写源生 CSS
- 使用预处理器 Sass/Less
- 使用后处理器 PostCSS
- 使用 css modules
- 使用 css in js

### 手写原生 CSS
方式： 

- ==行内样式==，即直接在 html 中的 style 属性里编写 css 代码。
- ==内嵌样式==，即在 html h 中的 style 标签内编写 class，提供给当前页面使用。
- ==导入样式==，即在内联样式中 通过 @import 方法，导入其他样式，提供给当前页面使用。
- ==外部样式==，即使用 html 中的 link 标签，加载样式，提供给当前页面使用。

主要使用：

**内嵌样式**和**外部样式**

```js
// 可以使用对象包裹样式
const styles = {
    section:{
        font:1.5;
    }
}
```

行内样式的缺点：

- 样式不能复用。
- 样式权重太高，样式不好覆盖。
- 表现层与结构层没有分离。
- 不能进行缓存，影响加载效率。

导入样式的缺点：

1、在 IE6-8 下，@import 声明指向的样式表并不会与页面其他资源并发加载，而是等页面所有资源加载完成后才开始下载。

2、如果在 link 标签中去 @import 其他 css，页面会等到所有资源加载完成后，才开始解析 link 标签中 @import 的 css。

- 导入样式，只能放在 style 标签的第一行，放其他行则会无效。
- @import 声明的样式表不能充分利用浏览器并发请求资源的行为，其加载行为往往会延后触发或被其他资源加载挂起。
- 由于 @import 样式表的延后加载，可能会导致页面样式闪烁。

### 使用预处理器 Sass/Less

出现原因：源生的 css 其实并不友好。

原理： 强化了 css 的语法，打包出来的结果和源生的 css 都是一样的。

### 后处理器 PostCSS

出现原因：把所有的重复性的工作都交给机器去做。

原理：通过 ast 去分析我们的 css 代码，然后将分析的结果进行处理。

### CSS 模块化迅速发展

出现原因：相同的类名，后者就会把前者的样式给覆盖掉。

## CSS 模块化的实现方式

### BEM (block element modifier)命名规范

```sql
/* 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。 */
.block {
}

/* 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。 */
.block__element {
}

/* 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观 */
.block--modifier {
}
```

### CSS Modules

像 import js 一样去引入我们的 css 代码。

1、定义 css 文件。

```css
.className {
  color: green;
}
/* 编写全局样式 */
:global(.className) {
  color: red;
}

/* 样式复用 */
.otherClassName {
  composes: className;
  color: yellow;
}

.otherClassName {
  composes: className from "./style.css";
}
```

### CSS In JS

使用 js 语言写 css，完全不需要些单独的 css 文件，所有的 css 代码全部放在组件内部，以实现 css 的模块化。

```css
import React from "react";
import styled from "styled-components";

// 创建一个带样式的 h1 标签
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// 创建一个带样式的 section 标签
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// 通过属性动态定义样式
const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 样式复用
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
  <Button primary>Primary</Button>
</Wrapper>;
```

比较出名的库：

- emotion
- radium
- glamorous

总结:

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/30/16f5477372d2bee3~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp)

