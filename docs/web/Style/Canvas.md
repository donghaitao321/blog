# Canvas

参考：  
[全新 Canvas 全网最详细课程](https://www.bilibili.com/video/BV1kv4y1D7uS?p=13&vd_source=c85024401ed583635d3f5f2d8f984cbd)

[canvas 中 getContext(“2d“) 对象的属性和方法](https://blog.csdn.net/monparadis/article/details/120760302)

[canvas 保姆级教程](https://juejin.cn/post/7008064185972031524)

## 基础方法

canvas 元素本身没有绘制能力仅仅是**图形容器**，必须使用脚本来完成实际的绘图任务。
Canvas 可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
Canvas API 主要聚焦于 **2D** 图形。

getContext() 方法可返回一个对象，该对象提供了用于在画布上**绘图的方法和属性**。

```js
let ctx = canvas.getContext(contextType, contextAttributes?);
```

- 上下文类型（contextType）
  - 2d：创建一个二维渲染上下文
  - webgl：创建一个三维渲染上下文（WebGL 版本 1）
  - webgl2：创建一个三维渲染上下文（WebGL 版本 2）

```html
<body>
  <!-- id：标识元素的唯一性 width:画布的宽度 height:画布的高度 -->
  <canvas id="c1" width="600" height="400">
    当前浏览器不支持canvas，请下载最新的浏览器
    <a href="https://www.google.cn/intl/zh-CN/chrome/">立即下载</a>
  </canvas>

  <script>
    // 1. 找到画布
    var c1 = document.getElementById("c1");
    // 判断是否有getContext
    if (!c1.getContext) {
      console.log("当前浏览器不支持canvas，请下载最新的浏览器");
    }
    // 2. 获取画笔，上下文对象，返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
    var ctx = c1.getContext("2d");
    console.log(ctx);
    // console.log(document.body);
    // console.log(document.body.getContext);
    // console.log(c1.getContext);
    // 3. 绘制图形
    // 3.1 绘制矩形fillRect(位置x，位置y，宽度，高度)
    ctx.fillRect(100, 200, 300, 300);
  </script>
</body>
```

### 图形绘制方法

#### 基础画笔

```js
// 矩形
rect(x, y, width, height);
fillRect();    //绘制一个填充的矩形，填充色为当前的 fillStyle。
strokeRect();  //绘制一个矩形的边框，边框色为当前的 strokeStyle。
clearRect(); //擦除一个矩形区域

//路径
beginPath(); //创建路径起始点
moveTo(x, y);  //移动到指定点
lineTo(x, y);  
closePath(); //闭合路径
stroke() / fill(); //描边或填充路径区域

//圆弧
arc(x, y, radius, startAngle, endAngle, anticlockwise);

//切线圆
arcTo(x1, y1, x2, y2, radius);

//贝塞尔曲线(2、3次)
quadraticCurveTo(cp1x, cp1y, x, y);
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

#### Path2D

Path2D 可以用缓存或记录绘画。

```js
//创建：
new Path2D(); // 空的Path对象
new Path2D(path); // 克隆Path对象
new Path2D(d); // 从SVG建立Path对象

//拼接
Path2D.addPath(path[, transform])


clip() //从原始画布剪切任意形状和尺寸的区域。
```

#### 文字

```js
//属性
font; //定义字体;
textAlign; //设置或返回文本内容的当前对齐方式。
textBaseline; //设置或返回在绘制文本时使用的当前文本基线。

//方法
fillText(text, x, y); //实心的文本
strokeText(text, x, y); //空心的文本
measureText(); //返回包含指定文本宽度的对象。
```

### 颜色样式

#### 属性

```js
fillStyle; //设置图形的填充颜色。
strokeStyle; //设置图形轮廓的颜色。
shadowColor; //设置或返回用于阴影的颜色。
shadowBlur; //设置或返回用于阴影的模糊级别。
shadowOffsetX; //设置或返回阴影与形状的水平距离。
shadowOffsetY; //设置或返回阴影与形状的垂直距离。
```

#### 方法

##### 渐变

```js
createLinearGradient(x, y, x1, y1); //创建线条渐变
createRadialGradient(x, y, r, x1, y1, r1); //创建一个径向/圆渐变
addColorStop(t, color); //方法指定颜色停止，参数使用坐标来描述，可以是0至1.
createPattern(img, mode); //在指定的方向上重复指定的元素。mode: repeat、repeat-x、repeat-y、no-repeat
```

### 转换

```js
//变化的是坐标轴
scale();
rotate();
translate();
transform(); // 转换矩阵
setTransform(); //将当前转换重置为单位矩阵。然后运行 transform()。
```

### 图像

```js
drawImage(image, x, y);
```

### 像素操作

```js
//属性
width; //返回 ImageData 对象的宽度。
height; //返回 ImageData 对象的高度。
data; //返回一个对象，其包含指定的 ImageData 对象的图像数据。

//方法
createImageData(w, h, img); //创建新的ImageData 对象。
getImageData(x, y, w, h); //返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。
putImageData(img, x, y, [dirtyX, dirtyy, dirtyWidth, dirtyHeight]); //把图像数据（从指定的 ImageData 对象）放回画布上。
```

### 合成

```js
globalAlpha; //设置或返回绘图的当前 alpha 或透明值。
globalCompositeOperation; //设置或返回新图像如何绘制到已有的图像上。
```

### 状态

```js
save(); //保存当前环境的状态。
restore(); //返回之前保存过的路径状态和属性。
```

