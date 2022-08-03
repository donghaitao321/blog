# JAVASCRIPT

## ES6 特性

### 列表(list)方法
```
.splice(index,num) 从index开始删除num项

```
### 对象(object)方法

### Map 与 Set

#### Map

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

1. Maps 和 Objects 的区别

- 键：Map 的是**任意值**，Object 的是**字符串或者 Symbols**。
- 键顺序：Map **有序**的（FIFO 原则），Object**无序**。
- size:Map 有 **size 属性**，Object 无。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

2. Map 的迭代

- for...of

```js
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
for (var key of myMap.keys()) {
  console.log(key);
}
for (var value of myMap.values()) {
  console.log(value);
}
```

- forEach()

```js
myMap.forEach(function (value, key) {
  console.log(key + " = " + value);
}, myMap);
```

4. Map 对象的操作

- Map 与 Array 的转换

```js
var kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

var myMap = new Map(kvArray);

var outArray = Array.from(myMap);
```

- Map 的克隆

```js
var myMap1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
var myMap2 = new Map(myMap1);

console.log(original === clone);
// 打印 false。 Map 对象构造函数生成实例，迭代出新的对象。
```

- Map 的合并

```js
var first = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
var second = new Map([
  [1, "uno"],
  [2, "dos"],
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
var merged = new Map([...first, ...second]);
```

#### Set

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。**有序**。

1. 特殊值

- +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
- undefined 与 undefined 是恒等的，所以不重复；
- NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。

2. 类型转换

```js
// Array 转 Set
var mySet = new Set(["value1", "value2", "value3"]);
// 用...操作符，将 Set 转 Array
var myArray = [...mySet];
String;
// String 转 Set
var mySet = new Set("hello"); // Set(4) {"h", "e", "l", "o"}
// 注：Set 中 toString 方法是不能将 Set 转换成 String
```

3. 作用

- 数组去重

```js
var mySet = new Set([1, 2, 3, 4, 4]);
[...mySet]; // [1, 2, 3, 4]
```

- 并集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var union = new Set([...a, ...b]); // {1, 2, 3, 4}
```

- 交集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var intersect = new Set([...a].filter((x) => b.has(x))); // {2, 3}
```

- 差集

```js
var a = new Set([1, 2, 3]);
var b = new Set([4, 3, 2]);
var difference = new Set([...a].filter((x) => !b.has(x))); // {1}
```

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
