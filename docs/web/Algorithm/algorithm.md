# Algorithm - JS

## 1. 深比较

```js
const deepCompareEquals = (obj1, obj2) => {
  // Type check
  if (Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2)) {
    return false;
  }

  // For arrays and objects, compare lengths/keys
  if (typeof obj1 === 'object') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Deep compare objects
    for (const key of keys1) {
      if (!keys2.includes(key) || !deepCompareEquals(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  // Handle primitives and functions
  return obj1 === obj2;
};

const arePropsEqual = (prevProps, nextProps) => {
  // Use deepCompareEquals for deep comparison
  return deepCompareEquals(prevProps, nextProps);
};

// Usage with React.memo
const MyComponent = React.memo(SomeComponent, arePropsEqual);
```

## 2. 柯里化

```js
function curry(func) {
  function curried(...args) {
    return function (...args2) {
      if (args2.length === 0) {
        return func.apply(
          this,
          args.filter((arg) => typeof arg !== "function")
        );
      }
      return curried.apply(this, args.concat(args2));
    };
  }
  return curried;
}

function add(...args) {
  let a = args.reduce((acc, cur) => acc + cur, 0);
  return a;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)());
console.log(curriedAdd(1, 2)(3)());
console.log(curriedAdd(1)(2, 3)());
console.log(curriedAdd(1, 2, 3)());
```

## 3. 扁函数

```js
function add(a, b) {
    return a + b;
}

function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
}

const add5 = partial(add, 5);
console.log(add5(10));		
```



### 复制构造函数

```js
// 原始构造函数
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

Parent.staticMethod = function() {
  console.log('This is a static method');
};

// 复制构造函数
function copyConstructor(originalConstructor) {
  // 创建一个新的构造函数
  function NewConstructor(...args) {
      originalConstructor.apply(this, args);
  } 

  // 复制原型链
  NewConstructor.prototype = Object.create(originalConstructor.prototype);
  NewConstructor.prototype.constructor = NewConstructor;

  // 复制静态属性和方法
  for (let key in originalConstructor) {
      if (originalConstructor.hasOwnProperty(key)) {
          NewConstructor[key] = originalConstructor[key];
      }
  }

  return NewConstructor;
}

// 使用copyConstructor复制Parent构造函数
const ParentCopy = copyConstructor(Parent);

// 验证
const parentInstance = new ParentCopy('Alice', 30);
parentInstance.sayHello(); // 输出：Hello, my name is Alice
ParentCopy.staticMethod(); // 输出：This is a static method
console.log(parentInstance instanceof ParentCopy); // true
console.log(parentInstance instanceof Parent); // true
```

## 4. 防抖、节流

```js
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let arg = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, arg);
    } else {
      timeout = setTimeout(function () {
        func.apply(context, arg);
      }, wait);
    }
  };
}
```

