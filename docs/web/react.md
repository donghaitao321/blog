# React

参考：

- [技术胖](https://www.jspang.com/article/46#toc325)

## 相关知识

1. 简介
   React.js 是 Facebook 推出的前端框架，主打特点是**函数式编程**风格,衍生出了更多有用的框架，比如 ReactNative 和 React VR。  
   ![img](http://blogimages.jspang.com/React%E4%B8%89%E5%A4%A7%E4%BD%93%E7%B3%BB.png)

2. React 和 Vue 对比

- React.js 相对于 Vue.js 它的灵活性和协作性更好一点，适合处理复杂项目或公司核心项目。
- Vue.js 有着丰富的 API，实现起来更简单快速，所以当团队不大，沟通紧密时，选择 Vue，因为它更快速更易用。

## React 开发环境搭建

1. 安装 Node.js

```
//查看版本
node -v
npm -v
```

2. 脚手架安装

```
npm install -g create-react-app
```

3. 创建项目

```
mkdir ReactDemo
create-react-app demo01
cd demo01
npm start
```

4. 脚手架生成的项目目录介绍

- **README.md**: 这个文件主要作用就是对项目的说明，已经默认写好了一些东西。

- **package.json**: 这个文件是 webpack 配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这个里边进行配置。

- **package-lock.json**： 这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到 git，以保证其他人再 npm install 时大家的依赖能保证一致。

- **gitignore**: 这个是 git 的选择性上传的配置文件，比如一会要介绍的 node_modules 文件夹，就需要配置不上传。

- **node_modules**: 这个文件夹就是我们项目的依赖包。

- **public**： 公共文件，里边有公用模板和图标等一些东西。

- **src**： 主要代码编写文件。

5. **public** 文件夹介绍

   - **favicon.ico**: 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。

   - **index.html**: 首页的模板文件。

   - **mainifest.json**：移动端配置文件。

6. **src** 文件夹介绍

   - **index.js**: 这个就是项目的入口文件，视频中我们会简单的看一下这个文件。

   - **index.css**：这个是 index.js 里的 CSS 文件。

   - **app.js**: 这个文件相当于一个方法模块，也是一个简单的模块化编程。

   - **serviceWorker.js**: 这个是用于写移动端开发的，PWA 必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。

## 组件及语法

1. 入口文件的编写(src/index.js)

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

作用：用 React 的语法把 APP 模块渲染到了 root ID 上面.这个 rootID 是在 **public\index.html** 文件中的

2. 组件的编写

```jsx
import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello JSPang</div>;
  }
}
export default App;
```

使用 npm start 命令查看效果。

### JSX

- JSX 就是 Javascript 和 XML 结合的一种格式。React 发明了 JSX，可以方便的利用 HTML 语法来创建虚拟 DOM，当遇到<，JSX 就当作 HTML 解析，遇到{就当 JavaScript 解析.
- 自定义的组件必须首写字母要进行大写，而 JSX 是小写字母开头的
- React 要求必须在一个组件的最外层进行包裹。
- 使用**Fragment**,进行伪包裹。(**Flex**布局的时候,外层还真的不能有包裹元素。）

#### 响应式设计和数据绑定

组件注意点：
事件绑定：

```jsx
<input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```

状态变化:

```jsx
inputChange(e){
   // console.log(e.target.value);
   // this.state.inputValue=e.target.value;
   this.setState({
       inputValue:e.target.value
   })
}
```



