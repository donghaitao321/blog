# React 使用技巧

## 条件渲染

1. If Else
在项目内部或 JSX 外部，可直接使用。

**JSX 中的 if else 语句**
使用立即调用函数表达式。过于冗长，不推荐。
```jsx
return (
  <div>
    {(() => {
      if (isLoggedIn) {
        return <div>I'm logged in.</div>;
      }
    })()}
  </div>
);
```
2. 三元运算符  
可以再JSX中使用。
```jsx
return <div>{isShow ? <SmallComponent /> : null}</div>; 
```
3. &&运算符  
无法替换有else的情况。
```jsx
isShow && <SmallComponent />;
```
4. switch-case  
只有一个变量可以判断条件, 需要立即执行函数。
```jsx
return (
  <div>
    {(() => {
      switch (status) {
        case "warning":
          return <AlertComponent status="warning" message={messageState} />;
        case "error":
          return <AlertComponent status="error" message={messageState} />;
        case "success":
          return <AlertComponent status="success" message={messageState} />;
        default:
          return <AlertComponent status="info" message={messageState} />;
      }
    })()}
  </div>
);
```
5. 枚举对象  
分配具有多个条件的变量值或返回值时，才使用它。  
switch-case语句优化。

```jsx
const ALERT_STATUS = {
  warning: <AlertComponent status="warning" />,
  error: <AlertComponent status="error" />,
  success: <AlertComponent status="success" />,
  info: <AlertComponent status="info" />,
};

return <div>{ALERT_STATUS[status]}</div>; 
```
若需要传参  
```jsx
const ALERT_STATUS = (message) => ({
  warning: <AlertComponent status="warning" message={message} />,
  error: <AlertComponent status="error" message={message} />,
  success: <AlertComponent status="success" message={message} />,
  info: <AlertComponent status="info" message={message} />,
});

return <div>{ALERT_STATUS(messageState)[status]}</div>; 
```
可以通过export 导出复用。

6. HOC(高阶函数)  
在渲染组件之前实现或检查某些条件时使用。  
如用户身份验证、加载指示器实现、空值检查。
```jsx
import React from "react";
export default function withAuthentication(Component) {
  // some code of authentication logic/service that result an isLoggedIn variable/state:
  let isLoggedIn = true;

  return function AuthenticatedComponent(props) {
    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <div class="alert alert-danger">You're not authenticated!</div>;
    }
  };
} 
```
7. 使用外部库  
不建议使用。  
有一个 babel 插件使 JSX 具有自己的条件渲染标记。
```jsx
<If condition={test}>
  <span>Truth</span>
</If>;

<Choose>
  <When condition={test1}>
    <span>IfBlock</span>
  </When>
  <When condition={test2}>
    <span>ElseIfBlock</span>
    <span>Another ElseIfBlock</span>
    <span>...</span>
  </When>
  <Otherwise>
    <span>ElseBlock</span>
  </Otherwise>
</Choose>; 
```
或自定义组件：  
```jsx
const If = (props) => {
  const condition = props.condition || false;
  const positive = props.then || null;
  const negative = props.else || null;

  return condition ? positive : negative;
}; 

<IF condition={isLoggedIn} then={<Hello />} else={<div>请先登录</div>} /> 
```

## 轮训的使用
参考：
[如何在React中优雅的使用Interval（轮询）](https://segmentfault.com/a/1190000041831958)
1. 通过ref
```jsx
//定义：
import { useEffect, useRef } from "react";

export const useInterval = (cb: Function, time = 1000) => {
  const cbRef = useRef<Function>();
  useEffect(() => {
    cbRef.current = cb;
  });
  useEffect(() => {
    const callback = () => {
      cbRef.current?.();
    };
    const timer = setInterval(() => {
      callback();
    }, time);
    return () => clearInterval(timer);
  }, []);
};

//使用：
useInterval(() => {
    setCount(count + 1);
  }, 1000);
```

2. 通过useReducer
```jsx
import React, { useEffect, useReducer } from "react";

function reducer(state: { count: number }) {
  return { count: state.count + 1 };
}
export default function IntervalExp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  useEffect(() => {
    setInterval(() => {
      dispatch();
    }, 1000);
  }, []);

  return (
    <div>
      <p>当前计数{state.count}</p>
    </div>
  );
}
```

## 性能指标
参考：
[浅谈前端性能指标](https://juejin.cn/post/7076455229377478692#heading-11)
[优化react渲染性能的技术：第1部分](https://www.it102.com/blog/article/30985.html)
[React性能优化，六个小技巧教你减少组件无效渲染](https://juejin.cn/post/7131939171802808350)

无效渲染的原因：
1. 数据前后不管是值还是引用都是完全相同的，可以说就是同一份数据；
2. 前后数据引用每次都不同，但它们的数据结构和值看起来又完全一样。

class组件的PureComponent以及函数组件的memo都具有浅比较的作用

常见问题：  

```jsx
//每次都会传入新的引用，导致重渲染。
const App = (props) => {
  return (
    <Child userList={[...props.list]} />
  )
};

//改进：
const emptyArr = [];
const App = (props) => {
  // 当存在时赋予空数组，保证下层数组类型的正确性
  const userList = props.userList || emptyArr;
  return (
    <Child userList={userList} />
  )
};

```
合理使用useMemo与useCallback：
```jsx
const list = [];

const App = ()=> {
    // 使用 useCallback 缓存函数
    const handleClick = useCallback(() => {});

    // 只是自己使用，不作为props传递时，没必要使用 useCallback 嵌套
    const handleOther = () => {}

    // 使用 useMemo 缓存结果
    const user = useMemo(()=>{
        return userList.filter();
    },[userList])

    return <C onClick={handleClick} list={list} user={user} />
}
```
一般useMemo、useCallback与memo会联合使用，既然你的下层组件都会做浅比较，我们尽可能稳定上层数据引用的稳定性就很有必要。

更稳定的useSelector:
```jsx
//sate并不稳定，会因其他节点变化，会重复执行
const userList = useSelector((state) => {
  const users = state.userList;
  return users.filter((user) => user.age > 18);
});

//改进：
//redux分支节点不受其他节点影响
const users = useSelector((state) => {
  return state.userList;
});

const userList = useMemo(() => {
  return users.filter(user => user.age > 18);
}, [users])
```
配合createSelector：  
createSelector可以理解成一个缓存函数，只是一般我们会将其与state挂钩，用于在加工state时初步做一些缓存。
```jsx
export const getUserListSelector = createSelector([a, b], (a, b) => {
  // 一些加工
});
```
getUserListSelector方法: 接受a,b两个参数，只要这两个参数不变，那么紧跟其后的callback就不会重复执行，这样就起到缓存的作用。  

createSelector这个东西与传统的缓存函数不同，一般的缓存函数是，只要你的参数不同，我们就用你参数的作为key，让结果作为value存起来，对应到上面的场景执行两次后，我们最终缓存可能是这样：
```js
const cache = {
  a-b:value1,
  a:value2
}
```
两次入参不同，导致2次不同的缓存结果。

**然而createSelector永远只缓存最新一次的缓存结果**，也就是说对于上述createSelector只要a b两个场景都会调用，那么这个最终的数据永远都稳定不下来，两个场景始终会影响彼此。

解决方式：
1. 解耦即可，我们应该让createSelector去取更稳定的数据，即便这个数据不够精准  
2. 返回后再分别在a b两个场景中单独去加工。  
   
为什么强调这一点呢？  
要知道createSelector经常存在嵌套关系，某个selector可能是另一个selector的入参，假设上述这个不稳定的selector返回的数据又成了其它selector的参数，这就会导致多条数据源全部不稳定，这是非常糟糕的。


如何排查不稳定数据？  
1. 借助why-did-you-update或者why-did-you-render性能监测库  
![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b60f78e00f1b42b186411e4360232ffa~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

2. react官方的插件Profiler  
![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4075411db4644559b4e6ec63676f146f~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)