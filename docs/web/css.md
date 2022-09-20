# CSS

## 一. 引入:

1. 外部样式表

```
<link href="index.css" rel="stylesheet" type="text/css" />
```

2. 内部样式表

```
<style type="text/css">
    p{color:Red;}
</style>
```

3. 内联样式表

```
<p style="color:Red; ">绿叶学习网</p>
```

## 二. 元素的 id 和 class：

## 三. css 选择器

格式：

```
选择器
{
  ``样式属性1:取值1;
  ``样式属性2:取值2;
  ``……
}
```

基本选择器:

1. 元素选择器

   ```
   div{color:red}
   ```

2. id 选择器

   ```
   #lvye{color:red;}
   ```

3. class 选择器

```
.lv{color:red;}
```

4. 子元素选择器

   ```
   #father2 #p1{…}
   ```

5. 相邻选择器

   注：操作对象是该元素的同级元素

```
#lv+div{…}
```

6. 群组选择器

   注：同时对几个选择器进行相同的操作

   “,”（英文逗号）隔开

```
h3,div,p,span{color:red;}
```

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

```
/*注释的内容*/
```

1. 段落

   | 属性            | 说明                                    | 常用项                                  |
   | --------------- | --------------------------------------- | --------------------------------------- |
   | text-decoration | 下划线、删除线、顶划线                  | none、underline、line-through、overline |
   | text-transform  | 文本大小写                              | none、uppercase、lowercase、capitalize  |
   | font-varient    | 将英文文本转换为“小型”大写字母          | normal、small-caps                      |
   | text-indent     | 段落首行缩进                            | 像素值                                  |
   | text-align      | 文本水平对齐方式（文本文字和<img>标签） | left、center、right                     |
   | line-height     | 行高                                    | 像素值                                  |
   | letter-spacing  | 字距                                    | 像素值                                  |
   | word-spacing    | 词距                                    | 像素值                                  |

   ## 五. 边框样式

   1. 边框属性

      | 属性         | 说明       | 常用项        |
      | :----------- | :--------- | ------------- |
      | border-width | 边框的宽度 | 像素值        |
      | border-style | 边框的外观 | solid、dashed |
      | border-color | 边框的颜色 | 颜色值        |

简介写法：

```
border:1px solid gray;
```

2. 边框局部样式

简洁写法：

    border-top:1px solid red;
    border-bottom:1px solid orange;
    border-left:1px solid blue;
    border-right:1px solid red;

## 六. 背景样式

1. 背景颜色

```
background-color:颜色值;
```

注：color 指内容颜色

2. 背景图片

| 属性                  | 说明                                                                      | 常用项                                                                                   |
| --------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| background-image      | 定义背景图像的路径，这样图片才能显示（需要设置 div 的宽 width 和 height） | url("图像地址")                                                                          |
| background-repeat     | 定义背景图像显示方式，例如纵向平铺、横向平铺                              | no-repeat、repeat、repeat-x、repeat-y                                                    |
| background-position   | 定义背景图像在元素哪个位置                                                | 像素值（x y）、关键字、top left、top center、<br />top right、left center、center center |
| background-attachment | 定义背景图像是否随内容而滚动                                              | scroll、fixed                                                                            |

## 七.超链接样式

1. 去除下划线

```
text-decoration:none
```

2. 定义超链接伪类（顺序）

```
a:link{CSS样式}
a:visited{CSS样式}
a:hover{CSS样式}  常用
a:actived{CSS样式}
```

3. hover 伪类扩展

```
元素:hover{}
```

4. 鼠标样式

```
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

   ```
   float:取值left/right
   ```

## 九. 列表样式

1. list-style-type

语法：

```
list-style-type:属性值;
```

​ 说明

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

```
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
