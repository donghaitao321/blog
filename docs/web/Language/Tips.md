# 技巧

## call、apply、bind

### 作用

改变**函数执行时的上下文**，再具体一点就是**改变函数运行时的 this 指向**。

### 区别

> call、apply 与 bind 的差别

call 和 apply 改变了函数的 this 上下文后便执行该函数,而 bind 则是返回改变了上下文后的一个函数。

> call、apply 的区别

他们俩之间的差别在于参数的区别，call 和 apply 的第一个参数都是要改变上下文的对象，而 call 从第二个参数开始以参数列表的形式展现，apply 则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。

### 应用

> 伪数组转数组

```js
let obj4 = {
  0: 1,
  1: "thomas",
  2: 13,
  length: 3, // 一定要有length属性
};
console.log(Array.prototype.slice.call(obj4)); // [1, "thomas", 13]
```

> 数组拼接添加

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//数组的concat方法：返回一个新的数组
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]

console.log(arr1); // [1, 2, 3] 不变
console.log(arr2); // [4, 5, 6] 不变
// 用 apply方法
[].push.apply(arr1, arr2); // 给arr1添加arr2
console.log(arr1); // [1, 2, 3, 4, 5, 6]
console.log(arr2); // 不变
```

> 变量类型判定

```js
let arr1 = [1, 2, 3];
let str1 = "string";
let obj1 = { name: "thomas" };
//
function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}
console.log(fn1(arr1)); // true

//  判断类型的方式，这个最常用语判断array和object，null(因为typeof null等于object)
console.log(Object.prototype.toString.call(arr1)); // [object Array]
console.log(Object.prototype.toString.call(str1)); // [object String]
console.log(Object.prototype.toString.call(obj1)); // [object Object]
console.log(Object.prototype.toString.call(null)); // [object Null]
```

> 继承

```js
function Animal(name) {
  this.name = name;
  this.showName = function () {
    console.log(this.name);
  };
}

function Cat(name) {
  Animal.call(this, name);
}

// Animal.call(this) 的意思就是使用this对象代替Animal对象，那么
// Cat中不就有Animal的所有属性和方法了吗，Cat对象就能够直接调用Animal的方法以及属性了
var cat = new Cat("TONY");
cat.showName(); //TONY
```

> 多继承

```js
function Class1(a, b) {
  this.showclass1 = function (a, b) {
    console.log(`class1: ${a},${b}`);
  };
}

function Class2(a, b) {
  this.showclass2 = function (a, b) {
    console.log(`class2: ${a},${b}`);
  };
}

function Class3(a, b, c) {
  Class1.call(this);
  Class2.call(this);
}

let arr10 = [2, 2];
let demo = new Class3();
demo.showclass1.call(this, 1); // class1: 1,undefined
demo.showclass1.call(this, 1, 2); // class1: 1,2
demo.showclass2.apply(this, arr10); // class2: 2,2
```

## 柯里化

目的： 解决不方便传参、参数固定问题
将多个参数转化为单一参数
思路：
固定参数先传入，返回新函数接受不固定参数

手写 bind 函数：

```js
function(thisArg){
  if(typeof this !=="function"){ //健壮性考虑
    return
  }
  var _self = this //防止混乱
  var args = Array.prototype.slice.call(arguments,1)
  return function(){
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
}
```

## 防抖

目的： 处理高频事件，减少无效处理。
思路：

事件触发 ==> 定时器 ==> **再次触发，结束上一个定时器，新建一个定时器** ==> 定时到，触发操作

## 节流

目的： 处理高频事件， 且需要触发一次再防抖
思路：

上一个操作完成，再做下一个

事件触发 ==> 触发 ==> 关闭阀门 ==> 触发无效 ==> 一定条件成立，阀门打开 ==> 再次触发

## 内存管理

V8 引擎 64 位 1.4G 32 位 700MB

### 存储方式：

新生代： 短时间存活的新变量， 64 位下 32MB
老生代：生存时间长的变量，64 位下 1400MB

#### 新生代

分为两部分：
可以复制清空，form-to 交替标记清空

#### 老生代

分为 3 步：

1. 标记已死变量
2. 清除已死变量
3. 整理磁盘

### 触发机制

1. 代码执行完一次
2. 内存不够时候

### 回收条件

1. 全局代码直到程序执行完毕
2. 普通变量，失去引用时

### 新旧转化

1. 新生代发现复制后，会占用超过 25 到 to 空间
2. 该对象已经经历过一次回收

### 优化内存

查看

```js
//浏览器端
window.performance.memory;
//node
process.memoryUsage();
fucntion testMemory(){
  var memory = process.memoryUsage().heapUsad
  console.log(memory/0124/1024+"mb")
}
```

#### 建议

1. 不要定义全局变量，注意及时释放(null,undifand)
2. 注意闭包 (外部方法引用着局部变量，导致不会释放内存)

### Node 特殊点

可以手动触发垃圾回收 glabal.gc
可以设置内存 node --mad-old-space-size=1700 test.js

### v8 1.4G 原因

1. 脚本语言够用
2. 垃圾回收是阻塞式的，太大会阻塞太久
