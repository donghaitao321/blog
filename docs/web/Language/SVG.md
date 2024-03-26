# SVG

可缩放矢量图形。使用 XML 格式定义图像。

注：复杂图案使用编辑器生成。

## SVG 在 HTML 页面

SVG 文件可通过以下标签嵌入 HTML 文档：`<embed>、<object> 或者 <iframe>`。

SVG 的代码可以直接嵌入到 HTML 页面中，或直接链接到 SVG 文件。

```js
//内嵌
<embed src="circle1.svg" type="image/svg+xml" />
<object data="circle1.svg" type="image/svg+xml"></object>
<iframe src="circle1.svg"></iframe>
//直接使用
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>
//链接
<a href="circle1.svg">查看 SVG 文件</a>
```

## 元素

所有的开启标签必须有关闭标签！

### svg 根元素

> 属性

```xml
xmlns: 定义 SVG 命名空间
width 和 height: 设置此 SVG 文档的宽度和高度
version：定义所使用的 SVG 版本
```



### rect 矩形

> 属性

width 和 height
x
y
rx 和 ry 属性可使矩形产生圆角

style
fill
stroke-width
stroke
fill-opacity
stroke-opacity
opacity

### circle
cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0, 0)
r属性定义圆的半径


### ellipse
CX属性定义的椭圆中心的x坐标
CY属性定义的椭圆中心的y坐标
RX属性定义的水平半径
RY属性定义的垂直半径

### line
x1 属性在 x 轴定义线条的开始
y1 属性在 y 轴定义线条的开始
x2 属性在 x 轴定义线条的结束
y2 属性在 y 轴定义线条的结束

### polygon

points 属性定义多边形每个角的 x 和 y 坐标
fill-rule 填充规则，nonzero | evenodd | inherit

### polyline
points 属性定义多边形每个角的 x 和 y 坐标

### path
d 控制路径

下面的命令可用于路径数据：

- M = moveto
- L = lineto
- H = horizontal lineto
- V = vertical lineto
- C = curveto
- S = smooth curveto
- Q = quadratic Bézier curve
- T = smooth quadratic Bézier curveto
- A = elliptical Arc
- Z = closepath

**注意：**以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。


