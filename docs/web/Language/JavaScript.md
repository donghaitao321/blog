# [JS](https://blog.csdn.net/wuyxinu/article/details/103583618#t16)

[详细内容](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)

## 一. 引入

（1）页头引入（head标签内）；

（2）页中引入（body标签内）；

（3）元素事件中引入（标签属性中引入）；

（4）引入外部JS文件；

## 二. 数据类型

1.  基本数据类型：
    - （1）数字型（Number型）：如整型84，浮点型3.14；
    - （2）字符串型（String型）：如"学习网"；
    - （3）布尔型（Boolean型）：true或fasle；
2. 特殊数据类型

- （1）空值（null型）；
- （2）未定义值（undefined型）；
- （3）转义字符； 如：\n、\'、\"

## 三. 类型转换

1. 字符串转数值型

    ```
    parseInt() ``//将字符串型转换为整型
    parseFloat() ``//将字符串型转换为浮点型
    Number()强制转换函数
    js 隐式转换(- * /) 如：‘12’-0
    ```

2. 数值型转字符串

```
.toString()
String()强制转换
加号拼接字符串(隐式转换)
```

## 四. 流程控制

1. 选择结构
    在JavaScript中，选择结构共有5种：

    （1）if语句;

    （2）if……else语句;

    （3）if……else if……语句;

    （4）if语句的嵌套;

    （5）switch语句;

2. 循环结构
    在JavaScript中，循环结构总有3种：

    （1）while语句；

    （2）do……while语句；

    （3）for语句；

3. 跳转语句
    JavaScript支持的跳转语句主要有2种：

    （1）break语句；

    （2）continue语句；

## 五. 函数

1. 匿名函数

    ```
    function (参数1,参数2,….,参数n)
    {
       //函数体语句
    }
    ```

2. 指定名字函数

```
function 函数名(参数1,参数2,….,参数n)
{
  //函数体语句
  return 表达式;
}
```

## 六. 参数

argument用于指向调用者传入的所有参数

多余的参数以数组的形式交给变量rest，如果传入的参数未填满函数定义的参数，rest会是一个空数组。

## 七. 常用内置函数

| 属性         | 说明                                               | 值           |
| ------------ | -------------------------------------------------- | ------------ |
| eval()       | 把一个字符串当做一个JavaScript表达式一样去执行它   |              |
| isFinite()   | 确定某一个数是否是一个有限数值                     |              |
| isNaN()      | 任何类型的数据，例如数字型、字符串型、日期时间型等 |              |
| parseInt()   |                                                    | 数值或字符串 |
| parseFloat() |                                                    | 数值或字符串 |
| escape()     | 编码                                               |              |
| unescape()   | 解码                                               |              |

2. 字符串对象

| 属性         | 说明                                       | 值                  |
| ------------ | ------------------------------------------ | ------------------- |
| .length      |                                            |                     |
| .match       | 匹配，返回匹配值，无匹配返回null           |                     |
| .search      |                                            |                     |
| indexOf      |                                            |                     |
| replace      |                                            | (原字符,替换字符)   |
| chartAt      | stringObject.charAt(n)                     | 数字                |
| toLowerCase  |                                            |                     |
| toUpperCase  |                                            |                     |
| concat       | 字符串1.concat(字符串2,字符串3,…,字符串n); |                     |
| localCompare | 字符串1.localeCompare(字符串2)             |                     |
| split        | 分割                                       | 分隔符              |
| substring    | 从字符串提取字符串                         | (开始位置,结束位置) |

3. 日期对象：

```
var 日期对象名 = new Date();
```

日期对象Date的方法主要分为三大组：setXxx、getXxx和toXxx。

| 方法                | 说明                                          |
| ------------------- | --------------------------------------------- |
| getFullYear()       | 返回一个表示年份的4位数字                     |
| getMonth()          | 返回值是0（一月）到11（十二月）之间的一个整数 |
| getDate()           | 返回值是1~31之间的一个整数                    |
| getHours()          | 返回值是0~23之间的一个整数，来表示小时数      |
| getMinutes()        | 返回值是0~59之间的一个整数，来表示分钟数      |
| getSeconds()        | 返回值是0~59之间的一个整数，来表示秒数        |
| getTime()=valueOf() | 得到距离现在时间的毫秒数                      |

| 方法          | 说明                     |
| :------------ | :----------------------- |
| setFullYear() | 可以设置年、月、日       |
| setMonth()    | 可以设置月、日           |
| setDate()     | 可以设置日数             |
| setHours()    | 可以设置时、分、秒、毫秒 |
| setMinutes()  | 可以设置分、秒、毫秒     |
| setSeconds()  | 可以设置秒、毫秒         |

| 方法             | 说明                                        |
| :--------------- | :------------------------------------------ |
| toString()       | 将日期时间转换为普通字符串                  |
| toUTCString()    | 将日期时间转换为世界时间（UTC）格式的字符串 |
| toLocaleString() | 将日期时间转换为本地时间格式的字符串        |

4. 数组对象

    ```
    var myArr = new Array();
    ```

| 方法       | 说明                                   |
| :--------- | :------------------------------------- |
| slice()    | 获取数组中的某段数组元素               |
| splice()   | 数组删除splice(第几个开始要删除的个数) |
| unshift()  | 在数组开头添加元素                     |
| push()     | 在数组末尾添加元素                     |
| shift()    | 删除数组中第一个元素                   |
| pop()      | 删除数组最后一个元素                   |
| toString() | 将数组转换为字符串                     |
| join()     | 将数组元素连接成字符串                 |
| concat()   | 多个数组连接为字符串                   |
| sort()     | 数组元素正向排序                       |
| reverse()  | 数组元素反向排序                       |

5. 数值对象

| 方法     | 说明                       |
| -------- | -------------------------- |
| max(x,y) | 返回x和y中的最大值         |
| min(x,y) | 返回x和y中的最小值         |
| pow(x,y) | 返回x的y次幂               |
| abs(x)   | 返回数的绝对值             |
| round(x) | 把数四舍五入为最接近的整数 |
| random() | 返回0~1之间的随机数        |
| ceil(x)  | 对一个数进行上舍入         |
| floor(x) | 对一个数进行下舍入         |

6. 窗口对象

| 方法                           | 说明                           | 值                                |
| ------------------------------ | ------------------------------ | --------------------------------- |
| open()、close()                | 打开窗口、关闭窗口             | window.open(URL, 窗口名称, 参数); |
| resizeBy()、resizeTo()         | 改变窗口大小                   | window.resizeTo(x, y)             |
| moveBy()、moveTo()             | 移动窗口                       |                                   |
| setTimeout()、clearTimeout()   | 设置或取消“一次性”执行的定时器 |                                   |
| setInterval()、clearInterval() | 设置或取消“重复性”执行的定时器 |                                   |

7. 窗口历史对象

| 属性     | 说明                                     |
| :------- | :--------------------------------------- |
| current  | 当前窗口的URL                            |
| next     | 历史列表中的下一个URL                    |
| previous | 历史列表中的前一个URL                    |
| length   | 历史列表的长度，用于判断列表中的入口数目 |
| go()      | 进入指定的网页 |
| back()    | 返回上一页     |
| forward() | 进入下一页     |

```
<a href="javascript:window.history.forward();">下一页</a>
<a href="javascript:window.history.back();">上一页</a>
```

## 八. 定时器

1. **setTimeout()和clearTimeout()**

2. **setInterval()和clearInterval()**

```
var 变量名 = setTimeout(code, time);
```

```
var 变量名 = setInterval (code , time);
```

## 九. 对话框

对话框共有3种：

- （1）alert()； 无返回
- （2）confirm()；返回值为true或false
- （3）prompt()；返回“字符串”

```
alert(message)
confirm(message)
prompt(message);
```

## 十. 文档对象

1. **document对象属性**

| 属性             | 说明                      |
| ---------------- | ------------------------- |
| title            | 文档标题，即title标签内容 |
| URL              | 文档地址                  |
| fileCreateDate   | 文档创建日期              |
| fileModifiedDate | 文档修改时间（精确到天）  |
| lastModified     | 文档修改时间（精确到秒）  |
| fileSize         | 文档大小                  |
| fgColor          | 定义文档的前景色          |
| bgColor          | 定义文档的背景色          |
| linkColor        | 定义“未访问”的超链接颜色  |
| alinkColor       | 定义“被激活”的超链接颜色  |
| vlinkColor       | 定义“访问过”的超链接颜色  |

2. **document对象方法**

| 方法                         | 说明                                       |
| ---------------------------- | ------------------------------------------ |
| document.write()             | 输入文本到当前打开的文档                   |
| document.writeIn()           | 输入文本到当前打开的文档，并添加换行符“\n” |
| document.getElementById()    | 获取某个id值的元素                         |
| document.getElementsByName() | 获取某个name值的元素，用于表单元素         |

## 十一. DOM对象

通过DOM来操作页面中各种元素，例如添加元素、删除元素、替换元素等

1. ### DOM节点属性

    节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性

| 属性                   | 说明                             |
| ---------------------- | -------------------------------- |
| **parentNode**         | 获取当前节点的父节点             |
| childNodes             | 获取当前节点的子节点集合（所有） |
| **children**           | 返回子元素节点                   |
| firstChild             | 获取当前节点的第一个子节点       |
| firstElementChild      | 返回第一个子节点                 |
| lastChild              | 获取当前节点的最后一个子节点     |
| lastElementChild       | 返回最后一个子节点               |
| previousSibling        | 获取当前节点的前一个兄弟节点     |
| previousElementSibling |                                  |
| nextSibling            | 获取当前节点的后一个兄弟节点     |
| nextElementSibling     |                                  |
| attributes             | 元素的属性列表                   |

2. ### DOM节点操作

- 获取节点：

```
document.getElementById( "元素id" );
```

```
doucument.getElementsByTagName('标签名');
```

```
document.getElementsByClassName('类名'); 
```

```
document.querySelector('选择器');返回第一个
document.querySelectorAll('选择器');返回所有
```

  - 获取特殊元素

    ```
    document.body;	返回body元素对象
    document.documentElement;	返回html元素对象
    ```


- 创建节点：

```
var e = document.createElement( "元素名" );
var txt = document.createTextNode( "元素内容" );
e.appendChild(txt);   //把新的节点插入到当前节点的“内部”
```

- 添加节点

    1）新的子节点添加到当前节点的前
```
obj.insertBefore( new ,ref)
```

​		obj表示父节点；new表示新的子节点；ref指定一个节点，在这个节点前插入新的节点。

​	2）把新的节点插入到当前节点的“内部”


```
obj.appendChild(``new``)
```

​		obj表示当前节点，new表示新节点。

- 删除节点

```
obj.removeChild(oldChild);
```

​		参数obj表示当前节点，而参数oldChild表示需要当前节点内部的某个子节点。

- 复制节点

```
obj.cloneNode(bool)
```

​		1）1或true：表示复制节点本身以及复制该节点下的所有子节点；

​		2）0或false：表示仅仅复制节点本身，不复制该节点下的子节点；

- 替换节点

```
obj.replaceChild(new,old)
```

​		obj，表示被替换节点的父节点；new，表示替换后的新节点；old，需要被替换的旧节点。

## 十二. 事件对象

调用事件的方式共有2种：

1)在script标签中调用；

```
var` `变量名 = document.getElementById(``"元素id"``);``//获取某个元素，并赋值给某个变量
变量名.事件处理器 = ``function``()
{
  ``……
}
```

2)在元素中调用

```
<input type="button" onclick="alert('绿叶学习网')" value="按钮"/>
```

1. 鼠标事件

| 事件        | 说明         |
| :---------- | :----------- |
| onclick     | 鼠标单击事件 |
| ondbclick   | 鼠标双击事件 |
| onmouseover | 鼠标移入事件 |
| onmouseout  | 鼠标移出事件 |
| onmousemove | 鼠标移动事件 |
| onmousedown | 鼠标按下事件 |
| onmouseup   | 鼠标松开事件 |

2. 键盘事件

| 方法       | 说明                             |
| :--------- | :------------------------------- |
| onkeydown  | 按下键事件（包括数字键、功能键） |
| onkeypress | 按下键事件（只包含数字键）       |
| onkeyup    | 放开键事件（包括数字键、功能键） |

3. 表单事件

| 事件     | 说明         |
| :------- | :----------- |
| onfocus  | 获取焦点事件 |
| onblur   | 失去焦点事件 |
| onchange | 状态改变事件 |
| onselect | 选中文本事件 |

4. 编辑事件

| 方法    | 说明     |
| :------ | :------- |
| oncopy  | 复制事件 |
| oncut   | 剪切事件 |
| onpaste | 粘贴事件 |

这3个事件都对应有一个“onbeforeXXX”事件，表示发生在该事件之前的事件。

5. 页面相关事件

| 方法     | 说明                   |
| :------- | :--------------------- |
| onload   | 页面加载事件           |
| onresize | 页面大小事件           |
| onerror  | 页面或图片加载出错事件 |

## 十三. 元素操作

1. 改变元素内容

    innerHTML识别HTML标签

    innerText不识别HTML标签

2. 改变元素属性

    ```
    // img.属性
    img.src = "xxx";
    input.value = "xxx";
    input.type = "xxx";
    input.checked = "xxx";
    input.selected = true / false;
    input.disabled = true / false;
    ```

3. 改变样式

    ```
    // element.style
    div.style.backgroundColor = 'pink';
    div.style.width = '250px';
    ```

    类样式操作：

    ```
    element.className
    ```

4. 排他思想

5. 自定义属性

    - 获取内置属性值(元素本身自带的属性)

    ```js
    element.属性;
    ```

    - 获取自定义的属性

    ```
    element.getAttribute('属性');
    ```

    - 设置内置属性值

    ```
    element.属性 = '值';
    ```

    - 主要设置自定义的属性

    ```js
    element.setAttribute('属性','值');
    ```

    - 移除属性

    ```js
    element.removeAttribute('属性');
    ```

6. H5自定义属性

    H5规定自定义属性 `data-`开头作为属性名并赋值
    
    - 获取H5自定义属性
		- 兼容性获取 `element.getAttribute('data-index')`
		- H5新增的：`element.dataset.index` 或`element.dataset['index']` IE11才开始支持

## 十四. 事件高级

1. 注册事件

    ```
    btn.onclick = function() {}
    eventTarget.addEventListener(type,listener[,useCapture])
    第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false (不写默认就是false),表示在事件冒泡阶段调用事件处理程序
    attachEvent('onclick', function() {})
    ```

2. 删除事件

    ```
    eventTarget.onclick = null;
    eventTarget.removeEventListener(type,listener[,useCapture]);
    eventTarget.detachEvent(eventNameWithOn,callback);
    ```

3. 事件流

    捕获阶段-冒泡阶段

4. 事件对象

    this 是事件绑定的元素， 这个函数的调用者（绑定这个事件的元素）

    e.target 是事件触发的元素

5. 事件委托
    - 事件委托的原理
        - **不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点**

