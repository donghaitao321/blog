# [Less（Leaner Style Sheets ）](https://juejin.cn/post/7047705695377948686)

## 使用

### 导入

```html
<head>
    <!-- 引入自己写的 less 代码 -->
    <link rel="stylesheet/less" type="text/css" href="index.less" />
    <!-- 引入 less.js 核心库 -->
    <script src="https://cdn.bootcdn.net/ajax/libs/less.js/4.1.1/less.min.js"></script>
</head>
```

### npm安装

### webpack配置

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i, loader: [
          // 将 less 文件编译成 css 文件，注意 Webpack Loader 加载顺序从右到左
          'style-loader', 'css-loader', 'less-loader'
        ]
      }
    ]
  }
};
```

## 用法

### 嵌套

1. 父子嵌套
2. 父选择器省略写法 **&**

```less
/* less 写法 */
.msg-list {
  padding: 16px 20px;
  min-height: 200px;
  max-height: 400px;
  .msg-item {
    height: 24px;
    line-height: 24px;
    &-title {
      color: #333;
      font-size: 22px;
      &:hover {
        font-weight: bold;
        text-decoration: underline;
      }
    }
    &-body {
      color: #555;
      font-size: 16px;
    }
  }
}
```

### 变量

1. 一般用法

```less
// 声明变量
@fontSize: 16px;
@height: 24px;

// 使用变量
.msg-item {
  height: @height;
  line-height: @height;
  font-size: @fontSize;
}
```

变量声明可以单独一个文件，然后使用```@import``` 导入。

2. 插值用法

```less
// 定义变量
@selector: banner;
@fontSize: font-size;
@imgPath: img-path;

.@{selector} { // 选择器中使用
  @{fontSize}: 16px; // 属性中使用
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
  background-image: url("@{imgPath}/abc.png"); // URL 路径中使用
}
```

变量还能够以插值的形式在```选择器名称、属性名称、URL 路径以及 @import``` 声明中使用。

> 使用时首先定义一个变量 `a`
>
> 然后以 `@{a}` 的方式去使用

3. 转义用法

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 12px;
  }
}
```

以 `~` 开头且内容是用引号包裹起来的字符串，在使用这个变量时会将字符串原样输出。

4. 混合

```less
// mixins 垂直水平居中
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-wrap {
  padding: 8px 16px;
  border: 1px solid #333;
  .flex-center();
}

.card {
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #a0a0a0;
  .flex-center; // 括号可以省掉，但未来版本会被废除，最好加上
}
```

> 类似于继承
>
> 另外需要注意的是，`Less` 代码编译时，会把混合代码也选择渲染出来，如果不想保留混合原本的代码，定义的时候可以在它后面加上 `()`

5. 嵌套混合

```less
.box-outter() {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  .box-inner {
    padding: 8px;
  }
}

.box {
  margin: 4px;
  .box-outter();
}
```

6. 参数使用

```less
.size(@s) {
  width: @s;
  height: @s;
}
// 默认参数
.br(@r: 4px) {
  border-radius: @r;
}

.box {
  padding: 4px;
  .size(20px);
  .br();
}
```

7. !important

```
.text() {
  font-size: 12px;
  color: #353535;
}

.title {
  padding: 8px 12px;
  .text() !important;
}
```

子项全部继承```!important```

