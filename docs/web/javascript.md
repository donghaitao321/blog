# JAVASCRIPT

## 常见问题

## 常见算法实现

### 递归

- 概念：
  自己调用自己
- 步骤：
  1. 假设递归函数已经写好
  2. 寻找递推关系
  3. 将递推关系的结构转换为递归体
  4. 将临界条件加入到递归体中
- 案例：
  1. **求和**
     求 1-100 的和

```javascript
function sum(n) {
  if (n == 1) return 1;
  return sum(n - 1) + n;
}
```

2. **斐波那契数列**
   1,1,2,3,5,8,13,21,34,55,89...求第 n 项

```javascript
//递归方法
function fib(n) {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
//非递归方法 //
function fib(n) {
  let a = 0;
  let b = 1;
  let c = a + b;
  for (let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}
```

3. **爬楼梯**
   JS 递归 假如楼梯有 n 个台阶，每次可以走 1 个或 2 个台阶，请问走完这 n 个台阶有几种走法

```javascript
function climbStairs(n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
```

4. **深拷贝**
   原理: clone(o) = new Object; 返回一个对象

```javascript
function clone(o) {
  var temp = {};
  for (var key in o) {
    if (typeof o[key] == "object") {
      temp[key] = clone(o[key]);
    } else {
      temp[key] = o[key];
    }
  }
  return temp;
}
```

5. **组件递归**
   - 递归组件: 组件在它的模板内可以递归的调用自己，只要给组件设置 name 组件就可以了。
   - 不过需要注意的是，必须给一个条件来限制数量，否则会抛出错误: max stack size exceeded
   - 组件递归用来开发一些具体有未知层级关系的独立组件。比如：联级选择器和树形控件

```xml
<template>
  <div v-for="(item,index) in treeArr"> {{index}} <br/>
      <tree :item="item.arr" v-if="item.flag"></tree>
  </div>
</template>
<script>
export default {
  // 必须定义name，组件内部才能递归调用
  name: 'tree',
  data(){
    return {}
  },
  // 接收外部传入的值
  props: {
     item: {
      type:Array,
      default: ()=>[]
    }
  }
}
</script>
```

6. **其他案例：**

   [React 中创建递归组件](https://www.cclliang.com/2021/09/21/React/React%E4%B8%AD%E5%88%9B%E5%BB%BA%E9%80%92%E5%BD%92%E7%BB%84%E4%BB%B6/)
