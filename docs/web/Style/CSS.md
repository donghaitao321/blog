# CSS

## 工作原理

CSS 是一门基于规则的语言。  





## 一. 引入:

1. 外部样式表

```js
<link href="index.css" rel="stylesheet" type="text/css" />
```

2. 内部样式表

```js
<style type="text/css">
    p{color:Red;}
</style>
```

3. 内联样式表

```js
<p style="color:Red; ">绿叶学习网</p>
```

## 二. 元素的 id 和 class：

## 三. css 选择器

格式：

```js
选择器
{
  ``样式属性1:取值1;
  ``样式属性2:取值2;
  ``……
}
```

基本选择器:

1. 元素选择器

   ```css
   div{color:red}
   ```

2. id 选择器

   ```css
   #lvye{color:red;}
   ```

3. class 选择器

```css
.lv{color:red;}
```

4. 子元素选择器

   ```css
   #father2 #p1{…}
   ```

5. 相邻选择器

   注：操作对象是该元素的同级元素

```css
#lv+div{…}
```

6. 群组选择器

   注：同时对几个选择器进行相同的操作

   “,”（英文逗号）隔开

```css
h3,div,p,span{color:red;}
```

7. 通配选择器

    注：匹配任意类型的 HTML 元素。 性能低，不推荐使用。

    在 CSS3 中，星号 (`*`) 可以和命名空间组合使用:

    - `ns|*` - 会匹配`ns`命名空间下的所有元素
    - `*|*` - 会匹配所有命名空间下的所有元素
    - `|*` - 会匹配所有没有命名空间的元素

## 四. 文本样式

1. 字体

对应关系：

![img](_media/format.png)

| 属性        | 说明     | 常用项                                |
| :---------- | :------- | ------------------------------------- |
| font-family | 字体类型 | Times New Roman，微软雅黑             |
| font-size   | 字体大小 | 像素值                                |
| font-weight | 字体粗细 | bold、normal、粗细值(100~900，不建议) |
| font-style  | 字体斜体 | normal、italic、oblique               |
| color       | 颜色     | 关键字、颜色值                        |

注释：

```css
/*注释的内容*/
```

1. 段落

   | 属性                  | 说明                                    | 常用项                                  |
   | --------------------- | --------------------------------------- | --------------------------------------- |
   | ```text-decoration``` | 下划线、删除线、顶划线                  | none、underline、line-through、overline |
   | ```text-transform```  | 文本大小写                              | none、uppercase、lowercase、capitalize  |
   | ```font-varient```    | 将英文文本转换为“小型”大写字母          | normal、small-caps                      |
   | ```text-indent```     | 段落首行缩进                            | 像素值                                  |
   | ```text-align```      | 文本水平对齐方式（文本文字和<img>标签） | left、center、right                     |
   | ```line-height```     | 行高                                    | 像素值                                  |
   | ```letter-spacing```  | 字距                                    | 像素值                                  |
   | ```word-spacing```    | 词距                                    | 像素值                                  |

   ## 五. 边框样式

   1. 边框属性

      | 属性               | 说明       | 常用项        |
      | :----------------- | :--------- | ------------- |
      | ```border-width``` | 边框的宽度 | 像素值        |
      | ```border-style``` | 边框的外观 | solid、dashed |
      | ```border-color``` | 边框的颜色 | 颜色值        |

简介写法：

```css
border:1px solid gray;
```

2. 边框局部样式

简洁写法：

```css
border-top:1px solid red;
border-bottom:1px solid orange;
border-left:1px solid blue;
border-right:1px solid red;
```

## 六. 背景样式

1. 背景颜色

```css
background-color:颜色值;
```

注：color 指内容颜色

2. 背景图片

| 属性                        | 说明                                                         | 常用项                                                       |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ```background-image```      | 定义背景图像的路径，这样图片才能显示（需要设置 div 的宽 width 和 height） | url("图像地址")                                              |
| ```background-repeat```     | 定义背景图像显示方式，例如纵向平铺、横向平铺                 | no-repeat、repeat、repeat-x、repeat-y                        |
| ```background-position```   | 定义背景图像在元素哪个位置                                   | 像素值（x y）、关键字、top left、top center、<br />top right、left center、center center |
| ```background-attachment``` | 定义背景图像是否随内容而滚动                                 | scroll、fixed                                                |

## 七.超链接样式

1. 去除下划线

```css
text-decoration:none
```

2. 定义超链接伪类（顺序）

```css
a:link{CSS样式}
a:visited{CSS样式}
a:hover{CSS样式}  常用
a:actived{CSS样式}
```

3. hover 伪类扩展

```css
元素:hover{}
```

4. 鼠标样式

```css
cursor:属性值
```

常用：“default”和“pointer”

## 八. 图片样式

1. 常用例

```
img
{
    width:60px;
    height:60px;
    border:1px solid red;
}
```

| 属性值         | 说明                 | 常用项                        |
| -------------- | -------------------- | ----------------------------- |
| text-align     | 水平对齐             | left、center、right           |
| vertical-align | 定义行内元素垂直对齐 | top、middle、baseline、bottom |

2. 文字环绕

   ```css
   float:取值left/right
   ```

## 九. 列表样式

1. list-style-type

语法：

```
list-style-type:属性值;
```

 说明

| list-style-type | 说明           | 常用项                                                      |
| --------------- | -------------- | ----------------------------------------------------------- |
| 有序列表        | 1、i、I、a、A  | decimal、lower-roman、upper-roman、lower-alpha、upper-alpha |
| 无序列表        | “●”、“○”、“■”  | disc、circle、square                                        |
|                 | 去除列表项符号 | none                                                        |

2. 自定义列表项符号 list-style-image

语法：

```
list-style-image:url(图像地址);
例： ul{list-style-image:url("../App_images/lesson/run_cj/list.png");}
```

## 十. 表格样式

| 属性            | 说明                             | 值                 |
| --------------- | -------------------------------- | ------------------ |
| border-collapse | 表格边框合并                     | separate、collapse |
| border-spacing  | 表格边框间距（2 个值表示横纵向） | 像素值             |
| caption-side    | 表格标题的位置                   | top、bottom        |

## 十一. 盒子模型

| 属性    | 说明                                         | 包含属性                                                          |
| :------ | :------------------------------------------- | ----------------------------------------------------------------- |
| border  | （边框）元素边框                             | border-width、border-style、border-color、border                  |
| margin  | （外边距）用于定义页面中元素与元素之间的距离 | margin-top、margin-bottom、margin-left、margin-right、margin      |
| padding | （内边距）用于定义内容与边框之间的距离       | padding-top、padding-bottom、padding-left、padding-right、padding |
| content | （内容）可以是文字或图片                     | width、height、overflow                                           |

![img](https://imgconvert.csdnimg.cn/aHR0cDovL3d3dy5sdnllc3R1ZHkuY29tL0FwcF9pbWFnZXMvbGVzc29uL2NqLzExLTEtMS5wbmc?x-oss-process=image/format,png)

注：display 属性来将行内元素转换为块元素，或者将块元素转换为行内元素。

## 十二. 浮动布局

1. 文档流

**正常文档流**、**脱离正常文档流**

2. 浮动 float

| 属性  | 说明                                           | 值                |
| ----- | ---------------------------------------------- | ----------------- |
| float | 任何元素都可以浮动、浮动元素会生成一个块级框。 | left、right       |
| clear | 清除浮动                                       | left、right、both |

注：采用“overflow:hidden;”来清除浮动

## 十三. 定位布局

语法：

```css
position:属性值;
```

| 属性                 | 说明                             | 值  |
| -------------------- | -------------------------------- | --- |
| 固定定位（fixed）    | 浏览器内的位置固定，如：回顶部   |     |
| 相对定位（relative） | 相对原始位置，作用：站位         |     |
| 绝对定位（absolute） | 脱离正常文档流、相对浏览器的位置 |     |
| 静态定位（static）   | 默认                             |     |

### 动画

transition

```css
.show {
  opacity: 1;
  transition: all 1.5s ease-in;
}
.hide {
  opacity: 0;
  transition: all 1.5s ease-in;
}
```

keyframes 关键帧

```css
@keyframes hide-item {
  0% {
    opacity: 1;
    color: yellow;
  }
  50% {
    opacity: 0.5;
    color: red;
  }
  100% {
    opacity: 0;
    color: green;
  }
}
```

使用：

```css
.hide {
  animation: hide-item 2s ease-in forwards;
}
```

`forwards`属性，它是用来控制停止到最后一帧的

### vw,vh 单位是什么

% : 相对父元素
px: 绝对像素
vw：浏览器可见视口【宽度】的百分比（1vw 代表视窗【宽度】的 1%）  
vh：浏览器可见视口【高度】的百分比（1vw 代表视窗【高度】的 1%）  
vmin：当前 vw 和 vh 较小的一个值。  
vmax：当前 vw 和 vh 中较大的一个值。  
注：视窗 与 可见视口 是一个意思

字体大小：
rem： 相对根元素
em： 相对于父元素
px ： 绝对值

> vw,vh 与 % 的区别是什么？

% 是基于【父元素】的宽度/高度的百分比，vw，vh 是根据视窗的宽度/高度的百分比。
视口单位优势在于【vh】能够直接获取高度，而用 % 在没有设置 body 高度情况下，是无法正确获得可视区域的高度。

## 继承

部分属性会被被子元素继承。通过常识和应用区别，不需要记。

CSS 的简写属性 [`all`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/all) 可以用于同时将这些继承值中的一个应用于（几乎）**所有属性**。



### 控制继承

| 属性                                                         | 功能                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`inherit`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inherit) | 设置该属性会使子元素属性和父元素相同。实际上，就是“开启继承”。 |
| [`initial`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial) | 将应用于选定元素的属性值设置为该属性的[初始值](https://developer.mozilla.org/zh-CN/docs/Web/CSS/initial_value)。 |
| [`revert` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/revert) | 将应用于选定元素的属性值重置为浏览器的默认样式，而不是应用于该属性的默认值。在许多情况下，此值的作用类似于 [`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset)。 |
| [`revert-layer` (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/revert-layer) | 将应用于选定元素的属性值重置为在上一个[层叠层](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@layer)中建立的值。 |
| [`unset`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/unset) | 将属性重置为自然值，也就是如果属性是自然继承那么就是 `inherit`，否则和 `initial` 一样 |



## 优先级

ID选择器(#) > 类选择器(. 属性选择器type=“radio”  伪类 :hover) > 元素选择器 (h1 伪元素 ::before) 

**通配选择符**（universal selector）（[`*`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)）**关系选择符**（combinators）（[`+`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator), [`>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator), [`~`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator), [" "](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator), [`||`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Column_combinator)）和 **否定伪类**（negation pseudo-class）（[`:not()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)）对优先级没有影响。（但是，在 `:not()` 内部声明的选择器会影响优先级）。

- **ID**：选择器中包含 ID 选择器则百位得一分。

- **类**：选择器中包含类选择器、属性选择器或者伪类则十位得一分。

- **元素**：选择器中包含元素、伪元素选择器则个位得一分。

     **0-0-0**

内联样式，即 [`style`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes#style) 属性内的样式声明，优先于所有普通的样式。



### [!important](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#!important)

覆盖所有上面所有优先级计算。**强烈建议除了非常情况不要使用它。**

## 布局



## 调试工具

DevTools ： F12

检查器（Inspector）：DOM 浏览器和 CSS 编辑器

- 单击任何规则的关闭大括号，以在新行上显示一个文本框，可以在其中为页面写入一个全新的声明。
- chrome的debugger在源代码处
- 可以审查CSS (查看css关系，**是否有父属性没被覆盖等**)
- 编辑值
- 添加新属性
- 理解和盒模型 (**`content-box`** 和 **border-box**  的区别)
- 解决优先级问题

