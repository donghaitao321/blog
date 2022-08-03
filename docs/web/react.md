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

拓展运算符：
...

注意 key 值问题

```jsx
<ul>
  {this.state.list.map((item, index) => {
    return <li key={index + item}>{item}</li>;
  })}
</ul>
```

注释推荐写法：

```jsx
{
  /* 正确注释的写法 */
}
```

css 的 class 换成 className
dangerouslySetInnerHTML 属性: 输入组件可以被解析

```jsx
<ul>
  {this.state.list.map((item, index) => {
    return (
      <li
        key={index + item}
        onClick={this.deleteItem.bind(this, index)}
        dangerouslySetInnerHTML={{ __html: item }}
      ></li>
    );
  })}
</ul>
```

JSX 中`<label>`标签
for 换成 htmlfor

```jsx
<div>
  <label htmlFor="jspang">加入服务：</label>
  <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
</div>
```

### Simple React Snippets

#### 快速进行引入 import

```jsx
imrc;
import React, { Component } from "react";
```

#### 快速生成 class

```jsx
cc
class  extends Component {
    state = {  }
    render() {
        return (  );
    }
}
export default ;
```

### 组件拆分

### 父子组件传值

- **父组件向子组件传递内容，靠属性的形式传递**

```jsx
父级
<testItem content={item} />

子级
import React, { Component } from 'react'; //imrc
class testItem  extends Component { //cc

    render() {
        return (
            <div>{this.props.content}</div>
         );
    }
}
export default testItem;
```

- **子组件向父组件传递数据,靠父级向子级传递方法**
  注意 this 的绑定

```jsx
父级
<ul>
    {
        this.state.list.map((item,index)=>{
            return (
                <XiaojiejieItem
                key={index+item}
                content={item}
                index={index}
                //关键代码-------------------start
                deleteItem={this.deleteItem.bind(this)}
                //关键代码-------------------end
                />
            )
        })
    }
</ul>
子级
handleClick(){
    this.props.deleteItem(this.props.index)
}
```

单向数据流：
子组件无法直接修改从父组件获得的数据。只能通过传递父组件的方式。

和其他框架配合使用：
理论上可以，不建议。

函数式编程：  
好处：

1. 函数式编程让我们的代码更清晰，每个功能都是一个函数。
2. 函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试。

### 调试工具

#### React developer tools

##### 安装

网上应用商店中安装

##### 状态

- 灰色： 不可用，页面不是又 React 编写的。
- 黑色: React 生成环境当中。
- 红色： React 调试环境当中。

### PropTypes 校验传递值

限制传递值**类型**,类似与 typescript

```jsx
import PropTypes from "prop-types";

testItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
};
```

**必传值**的校验

```jsx
avname: PropTypes.string.isRequired;
```

使用**默认值**

```jsx
testItem.defaultProps = {
  avname: "枫",
};
```

### ref 的使用

```jsx
<input
    id="jspang"
    className="input"
    value={this.state.inputValue}
    onChange={this.inputChange.bind(this)}
    //关键代码——----------start
    ref={(input)=>{this.input=input}}
    //关键代码------------end
    />

inputChange(){
    this.setState({
        inputValue:this.input.value
    })
}
```

可以直接传递组件引用

### 生命周期

生命周期函数指在某一个时刻组件会自动调用执行的函数。  
render()函数，就是一个生命周期函数，它在state发生改变时自动执行。
constructor不算生命周期函数。  
constructor我们叫构造函数，它是ES6的基本语法。虽然它和生命周期函数的性质一样，但不能认为是生命周期函数。
但是你要心里把它当成一个生命周期函数，我个人把它看成React的Initialization阶段，定义属性（props）和状态(state)。 

四大阶段：

1. Initialization:初始化阶段。
2. Mounting: 挂在阶段。
3. Updation: 更新阶段。
4. Unmounting: 销毁阶段

#### Mounting阶段
伴随着整个虚拟DOM的生成，它里边有三个小的生命周期函数：
1. componentWillMount : 在组件即将被挂载到页面的时刻执行。
2. render : 页面state或props发生变化时执行。
3. componentDidMount : 组件挂载完成时被执行。

```jsx
componentWillMount(){
    console.log('componentWillMount----组件将要挂载到页面的时刻')
}
componentDidMount(){
    console.log('componentDidMount----组件挂载完成的时刻执行')
}
render(){
    console.log('render---组件挂载中.......')
}
/////////  
componentWillMount----组件将要挂载到页面的时刻执行
render----开始挂载渲染
componentDidMount----组件挂载完成的时刻执行
```
注意点：  
componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行。

#### update阶段
它有两个基本部分组成，一个是props属性改变，一个是state状态改变
里边有四个小的生命周期函数：
1. shouldComponentUpdate： 组件更新前执行。返回布尔值。
2. componentWillUpdate： 组件更新前执行。需shouldComponentUpdate返回true。
3. render：开始挂载渲染
4. componentDidUpdate：组件更新后执行。

```jsx
shouldComponentUpdate(){
    console.log('shouldComponentUpdate---组件发生改变前执行')
    return true
}
componentWillUpdate(){
    console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
}
componentDidUpdate(){
    console.log('componentDidUpdate----组件更新之后执行')
}
```
componentWillReceiveProps 函数  
```jsx
componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }
```
子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行

### Unmounting阶段  
```jsx
//当组件从页面中删除的时候执行
componentWillUnmount(){
    console.log('child - componentWillUnmount')
}
```

### 生命周期改善程序性能
使用```shouldComponentUpdate```:  
shouldComponentUpdate有两个参数：  
- nextProps:变化后的属性;
- nextState:变化后的状态;  

```jsx
shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
        return true
    }else{
        return false
    }

}
```

### axios数据请求
- 安装  
```bash
npm install -save axios
```
- 请求数据  
建议在```componentDidMount```中使用
```jsx
componentDidMount(){
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
```
### 接口模拟

### 用CSS3实现react动画
```react-transition-group```动画组件

安装
```bash
npm install react-transition-group --save
```
三个核心库:
1. Transition
2. CSSTransition
3. TransitionGroup

#### CSSTransition用法

```jsx
import { CSSTransition } from 'react-transition-group'

render() { 
    return ( 
        <div>
            <CSSTransition 
                in={this.state.isShow}   //用于判断是否出现的状态
                timeout={2000}           //动画持续时间
                classNames="boss-text"   //className值，防止重复
                unmountOnExit            //在元素退场时，自动把DOM也删除
            >
                <div>BOSS级人物-孙悟空</div>
            </CSSTransition>
            <div><button onClick={this.toToggole}>召唤Boss</button></div>
        </div>
        );
}
```
设置CSS
```css
xxx-enter: 进入（入场）前的CSS样式；
xxx-enter-active:进入动画直到完成时之前的CSS样式;
xxx-enter-done:进入完成时的CSS样式;
xxx-exit:退出（出场）前的CSS样式;
xxx-exit-active:退出动画知道完成时之前的的CSS样式。
xxx-exit-done:退出完成时的CSS样式。
```
#### TransitionGroup
负责多个DOM元素的动画
需要```<CSSTransition>```,来定义动画

```jsx
import {CSSTransition , TransitionGroup} from 'react-transition-group'

<ul ref={(ul)=>{this.ul=ul}}>
    <TransitionGroup>
    {
        this.state.list.map((item,index)=>{
            return (
                <CSSTransition
                    timeout={1000}
                    classNames='boss-text'
                    unmountOnExit
                    appear={true}
                    key={index+item}  
                >
                    <XiaojiejieItem 
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                    />
                </CSSTransition>
            )
        })
    }
    </TransitionGroup>
</ul>  
<Boss />
</Fragment>
```
#### npm
- ```npm install xxx```: 安装项目到项目目录下，不会将模块依赖写入devDependencies或dependencies。

- ```npm install -g xxx```: -g的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm cinfig prefix的位置

- ```npm install -save xxx```：-save的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。

- ```npm install -save-dev xxx```：-save-dev的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。

