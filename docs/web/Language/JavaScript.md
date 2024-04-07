# [<u>JS</u>](https://blog.csdn.net/wuyxinu/article/details/103583618#t16)

[详细内容](https://blog.csdn.net/Augenstern_QXL/article/details/119249534)

## 一. 引入

（1）内嵌JS；

```html
<script>
     alert('Hello World!');
</script>
```

（3）行内JS；

```html
<input type="button" value="点我试试" onclink="javascript:alert('Hello World')" />
```

（4）外部JS；

```html
<script src="my.js"></script>
```

## 二. 数据类型

JS 把数据类型分为两类：

1. 基本数据类型：

    > 值类型
    >
    > 存储的是值本身
    >
    > 存放到**栈**里面

    - （1）数字型（**Number**型）：如整型84，浮点型3.14；

        - 十六进制数字加**0x**
        - 八进制前面加**0**
        - 范围: **Number.MAX_VALUE、Number.MIN_VALUE**
        - 特殊：**Infinity、Nan**（非数值）
    - （2）字符串型（**String**型）：如"学习网"；
        - 因为 HTML 标签里面的属性使用的是双引号，JS更推荐**使用单引号**。
        - **转义**字符； 如：\n、
    - （3）布尔型（**Boolean**型）：true或fasle；
    - （4）空值（**null**型）；
    - （5）未定义值（**undefined**型）；

2. 复杂数据类型(Object)

> 引用类型
>
> 存储的仅仅是地址（引用）
>
> 存放到**堆**里面

3. 传参

    - **简单**类型传参：**传值**
    
    - **复杂**类型传参：**传引用**

可用```typeof``` 来获取检测变量的数据类型

## 三. 类型转换

1. 字符串 => 数值型

    ```
    parseInt() ``//将字符串型转换为整型
    parseFloat() ``//将字符串型转换为浮点型
    Number()强制转换函数
    js 隐式转换(- * /) 如：‘12’-0
    ```

2. 数值型 => 字符串

```
.toString()
String()强制转换
加号拼接字符串(隐式转换)
```

3. 其他类型 => 布尔值

- **false**: ’ ’ , 0, NaN , null , undefined
- **true**: 其余

## 四. 运算

浮点数的**精度问题**

```js
var result = 0.1 +0.2; //结果不是0.3，0.30000000000000004
```

**不要直接判断两个浮点数是否相等**

## 五. 流程控制

1. 分支结构
    在JavaScript中，选择结构共有5种：

    （1）**if**语句;

    （2）**if……else**语句;

    （3）**if……else if……**语句;

    （4）三元表达式：**表达式1 ? 表达式2 : 表达式3**

    （5）**switch**语句;

2. 循环结构
    在JavaScript中，循环结构总有3种：

    （1）**while**语句；

    （2）**do……while**语句；

    （3）**for**语句；

3. 跳转语句
    JavaScript支持的跳转语句主要有2种：

    （1）break语句；

    （2）continue语句；

## 六. 函数

1. 匿名函数（必须先申明后调用）

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

3. 箭头函数

    ```
    ()=>{}
    ```


### 参数
| 参数个数             | 说明                               |
| -------------------- | ---------------------------------- |
| 实参个数等于形参个数 | 输出正确结果                       |
| 实参个数多于形参个数 | 只取到形参的个数                   |
| 实参个数小于形参个数 | 多的形参定义为undefined，结果为NaN |

### arguments的使用

>  **arguments**用于指向调用者传入的所有参数
>
> 存储了传递的**所有实参**
>
> **伪数组**

### rest

> 多余的参数以数组的形式交给变量rest
>
> 如果传入的参数未填满函数定义的参数，rest会是一个空数组。

### 常用内置函数

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

### 定时器

1. **setTimeout()和clearTimeout()**

2. **setInterval()和clearInterval()**

```
var 变量名 = setTimeout(code, time);
```

```
var 变量名 = setInterval (code , time);
```

### 对话框

对话框共有3种：

- （1）alert()； 无返回
- （2）confirm()；返回值为true或false
- （3）prompt()；返回“字符串”

```
alert(message)
confirm(message)
prompt(message);
```

## 七.作用域

JavaScript (ES6前) 中的作用域有**两种**：

- **全局**作用域
- **局部**作用域(函数作用域)

### 作用域链

>  采取**就近原则**

## 八.预解析

JavaScript 解析器在运行 JavaScript 代码的时候分为两步：

> **预解析**：所有的 **var** 还有 **function** 提升到**当前作用域**的最前面
>
> **代码执行**： 从上到下执行JS语句

## 九. 内置对象

![img](/_media/object.png)

### 1. 对象

> 所有的事物都是对象。

对象是由属性和方法组成的：

- 属性：事物的**特征，\**在对象中用\**属性**来表示（常用名词）
- 方法：事物的**行为，\**在对象中用\**方法**来表示（常用动词）

**创建**

- **字面量**： { }

-  **new Object**：var 对象名 = new Object()

- **构造函数**：为对象成员变量赋初始值

    - **首字母要大写**

    - 属性和方法前面需要添加 **this**

    - 不需要 return

    -  与 **new** 运算符一起使用

    - ```js
        //构造函数的语法格式
        function 构造函数名() {
            this.属性 = 值;
            this.方法 = function() {}
        }
        new 构造函数名();
        ```


new 在执行时会做四件事:

1. 在内存中创建一个新的空对象。
2. 让 this 指向这个新的对象。
3. 执行构造函数里面的代码，给这个新对象添加属性和方法
4. 返回这个新对象（所以构造函数里面不需要return）

**调用**

- 对象.属性名
- 对象[‘属性名’]
- 对象.方法名()

**遍历**

```js
for(var k in obj) {
    console.log(k);		//这里的 k 是属性名
    console.log(obj[k]);//这里的 obj[k] 是属性值
}
```

### 2.内置对象

- JavaScript对象分为3种：自定义对象 、内置对象、 浏览器对象
- Math、 Date 、Array、String等
- MDN: https://developer.mozilla.org/zh-CN/

### 3.常用内置对象

#### 3.1 Math

- 不是构造函数

#### 3.2 Data()

- 构造函数
- 不写参数，就返回当前时间
- 写参数，就返回括号里面输入的时间
    - ‘2024-5-1’ 、'2024/5/1'

#### 3.3 数组对象

- **instanceof**判断

- .isArray()

- 添加

    - push、unshift

- 删除

    - pop、shift

- 排序

    - reverse()
    - sort()

- 索引

    - indexOf()
    - lastIndexOf()

- 数组 => 字符串

    - toString()：逗号分隔每一项
    - join(‘分隔符’)
- 其他方法
    - concat()：返回一个新的数组
    - slice()：返回被截取项目的新数组
    - splice()：会影响原数组

#### 3.4 字符串

> 为了方便操作基本数据类型，JavaScript 还提供了三个特殊的引用类型：**String**、**Number**和 **Boolean**。
>
> **基本包装类型**

- 字符串的不可变

    - 里面的**值不可变**，虽然看上去可以改变内容，但其实是地址变了，内存中**新开辟了一个内存空间**。
    - **操作完成会返回一个新的字符串**
    - 减少字符串赋值操作

- 索引

    - indexOf()
    - lastIndexOf()

- 根据位置返回字符

    - charAt(index)
    - charCodeAt(index):ASCII码
    - str[index]

- 字符串操作方法

    - concat(str1,str2,str3…) ： 拼接
- substr(start,length)：截取
    - slice(start,end)：截取
- substring(start,end)：截取
    - replace('旧', '新')：替换（1个）
- split("切分符"): 切分
    - toUpperCase()： 大写
- toLowerCase(): 小写



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

![img](/_media/dom.png)

> 文档**对象**模型（Document Object Model，简称 DOM）

> W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的**标准编程接口**

> 通过这些 DOM 接口可以**改变**网页的内容、结构和样式。

![img](/_media/domtree.png)

- 文档：**一个页面**就是一个文档，DOM中使用**doucument**来表示
- 元素：页面中的**所有标签**都是元素，DOM中使用 **element** 表示
- 节点：网页中的**所有内容**都是节点（标签，属性，文本，注释等），DOM中使用**node**表示

DOM 把以上内容都看做是**对象**

### 1. 获取元素

**方式**：

-  ID 
    - getElementByld()
    - 返回带ID的元素**对象**
- 标签名
    - getElementByTagName()
    - 返回带有指定标签名的**对象的集合**
    - document.getElementsByTagName('li'); ol.getElementsByTagName('li'); 都可以
    - 父元素必须是**单个对象**(必须指明是哪一个元素对象)
-  HTML5 新增的方法
    - getElementsByClassName()
    - querySelector()
        - 类选择器.box 
        - id选择器 #nav
        - 返回第一个元素对象
    - querySelectorAll()
        - 返回所有元素对象
-  特殊元素
    - document.body;
    - document.documentElement;

### 2.事件

> **JavaScript** 使我们有能力创建**动态页面**

> **事件**是可以被 JavaScript **侦测到**的行为

#### 2.1事件三要素

- 事件**源**(谁)
- 事件**类型**(什么事件)
- 事件**处理程序**(做啥)

#### 2.2执行事件的步骤

- **获取**事件源
- **注册**事件(绑定事件)
- **添加**事件处理程序(采取函数赋值形式)

#### 2.3 常见事件

- **鼠标**事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

- **键盘**事件

| 方法       | 说明                             |
| :--------- | :------------------------------- |
| onkeydown  | 按下键事件（包括数字键、功能键） |
| onkeypress | 按下键事件（只包含数字键）       |
| onkeyup    | 放开键事件（包括数字键、功能键） |

- **表单**事件

| 事件     | 说明         |
| :------- | :----------- |
| onfocus  | 获取焦点事件 |
| onblur   | 失去焦点事件 |
| onchange | 状态改变事件 |
| onselect | 选中文本事件 |

- **编辑**事件

| 方法    | 说明     |
| :------ | :------- |
| oncopy  | 复制事件 |
| oncut   | 剪切事件 |
| onpaste | 粘贴事件 |

这3个事件都对应有一个“**onbefore**XXX”事件，表示发生在该事件之前的事件。

- **页面**相关事件

| 方法     | 说明                   |
| :------- | :--------------------- |
| onload   | 页面加载事件           |
| onresize | 页面大小事件           |
| onerror  | 页面或图片加载出错事件 |

### 3. DOM节点

> 节点至少拥有**nodeType**（节点类型）**nodeName**（节点名称）和**nodeValue**（节点值）这三个基本属性

> 节点操作主要操作的是**元素节点**

> 利用 DOM 树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**



| 属性                   | 说明                                 |
| ---------------------- | ------------------------------------ |
| **parentNode**         | 获取当前节点的**父节点**             |
| childNodes             | 获取当前节点的**子节点集合**（所有） |
| **children**           | 返回**子元素节点**                   |
| firstChild             | 获取当前节点的第一个子节点           |
| firstElementChild      | 返回第一个子节点                     |
| lastChild              | 获取当前节点的最后一个子节点         |
| lastElementChild       | 返回最后一个子节点                   |
| previousSibling        | 获取当前节点的前一个兄弟节点         |
| previousElementSibling |                                      |
| nextSibling            | 获取当前节点的后一个兄弟节点         |
| nextElementSibling     |                                      |
| attributes             | 元素的属性列表                       |

2. ### DOM节点操作


- 创建节点：

```js
var e = document.createElement( "元素名" );
var txt = document.createTextNode( "元素内容" );
e.appendChild(txt);   //把新的节点插入到当前节点的“内部”
```

- 添加节点

    1）新的子节点添加到当前节点的前
```js
obj.insertBefore( new ,ref)
```

​		obj表示父节点；new表示新的子节点；ref指定一个节点，在这个节点前插入新的节点。

​	2）把新的节点插入到当前节点的“内部”


```js
obj.appendChild(``new``)
```

​		obj表示当前节点，new表示新节点。

- 删除节点

```js
obj.removeChild(oldChild);
```

​		参数obj表示当前节点，而参数oldChild表示需要当前节点内部的某个子节点。

- 复制节点

```js
obj.cloneNode(bool)
```

​		1）1或true：表示复制节点本身以及复制该节点下的所有子节点；

​		2）0或false：表示仅仅复制节点本身，不复制该节点下的子节点；

- 替换节点

```js
obj.replaceChild(new,old)
```

​		obj，表示被替换节点的父节点；new，表示替换后的新节点；old，需要被替换的旧节点。

### 4. 元素操作

1. 改变元素内容

    innerHTML识别HTML标签

    innerText不识别HTML标签

2. 改变元素属性

    ```js
    // img.属性
    img.src = "xxx";
    input.value = "xxx";
    input.type = "xxx";
    input.checked = "xxx";
    input.selected = true / false;
    input.disabled = true / false;
    ```

3. 改变样式

    ```js
    // element.style
    div.style.backgroundColor = 'pink';
    div.style.width = '250px';
    ```

    类样式操作：

    ```js
    element.className
    ```

4. 排他思想

5. 自定义属性

    - 获取内置属性值(元素本身自带的属性)

    ```js
    element.属性;
    ```

    - 获取自定义的属性

    ```js
    element.getAttribute('属性');
    ```

    - 设置内置属性值

    ```js
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

## 十二. 事件高级

### 1. 注册事件(绑定事件)

| **传统注册方式**                                             | **方法监听注册方式**                                  |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| 利用 on 开头的事件                                           | w3c 标准推荐方式                                      |
| <button onclick = "alert("hi")"></button>                    | addEventListener() 它是一个方法                       |
| btn.onclick = function() {}                                  | IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替 |
| 特点：注册事件的唯一性                                       | 特点：同一个元素同一个事件可以注册多个监听器          |
| 同一个元素同一个事件只能设置一个处理函数，<br />最后注册的处理函数将会覆盖前面注册的处理函数 | 按注册顺序依次执行                                    |

- addEventListener事件监听方式

```js
eventTarget.addEventListener(type,listener[,useCapture])
```

- attachEvent事件监听方式(兼容)

```js
eventTarget.attachEvent(eventNameWithOn,callback)
```

### 2. 删除事件

```js
eventTarget.onclick = null;
eventTarget.removeEventListener(type,listener[,useCapture]);
eventTarget.detachEvent(eventNameWithOn,callback);//(兼容)
```

### 3. 事件流

> 从页面中接收事件的顺序

> 事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即DOM事件流

#### 3.1.捕获阶段-冒泡阶段

> JS 代码中只能执行捕获或者冒泡其中的一个阶段

> `onclick` 和 `attachEvent`只能得到冒泡阶段

> - `addEventListener(type,listener[,useCapture])`
>     - 第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；
>     - 如果是 false (不写默认就是false),表示在事件冒泡阶段调用事件处理程序

> 有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

### 4. 事件对象

> **event** 对象代表事件的状态
>
> 事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面

> 兼容性方案
>
> - e = e || window.event;

- **e.target** 和 **this** 的区别：
    - this 是事件绑定的元素， 这个函数的调用者（绑定这个事件的元素）
    - e.target 是事件触发的元素

### 5. 事件委托

- 事件委托的原理
    - 不是每个子节点单独设置事件监听器，而是事件监听器设置在其**父节点上**，然后利用**冒泡原理**影响**设置每个子节点**

### 6. 常见的鼠标事件

| 鼠标事件    | 触发条件         |
| ----------- | ---------------- |
| onclick     | 鼠标点击左键触发 |
| onmouseover | 鼠标经过触发     |
| onmouseout  | 鼠标离开触发     |
| onfocus     | 获得鼠标焦点触发 |
| onblur      | 失去鼠标焦点触发 |
| onmousemove | 鼠标移动触发     |
| onmouseup   | 鼠标弹起触发     |
| onmousedown | 鼠标按下触发     |

#### 6.1 禁止鼠标右键与鼠标选中

- `contextmenu`主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单
- `selectstart` 禁止鼠标选中

```html
<body>
    <h1>我是一段不愿意分享的文字</h1>
    <script>
        // 1. contextmenu 我们可以禁用右键菜单
        document.addEventListener('contextmenu', function(e) {
                e.preventDefault(); // 阻止默认行为
            })
            // 2. 禁止选中文字 selectstart
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();

        })
    </script>
</body>
```

#### 6.2 鼠标事件对象

| 鼠标事件对象	|说明|
| ----------- | ---------------- |
|e.clientX	|返回鼠标相对于浏览器窗口可视区的X坐标|
|e.clientY	返回鼠标相对于浏览器窗口可视区的Y坐标|
|e.pageX（重点）	|返回鼠标相对于文档页面的X坐标 IE9+ 支持|
|e.pageY（重点）	|返回鼠标相对于文档页面的Y坐标 IE9+ 支持|
|e.screenX	|返回鼠标相对于电脑屏幕的X坐标|
|e.screenY	|返回鼠标相对于电脑屏幕的Y坐标|

### 7. 常用的键盘事件

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触发，但是它不识别功能键，比如 ctrl shift 箭头等 |

- 三个事件的执行顺序是： keydown – keypress — keyup

#### 7.1 键盘对象属性

| 键盘事件对象 **属性** | 说明                    |
| --------------------- | ----------------------- |
| keyCode               | 返回该**键**值的ASCII值 |

## 十三. BOM技术

![img](/_media/bom.png)

### 1. BOM概述

- BOM = Browser Object Model 👉浏览器对象模型
- 与**浏览器窗口**进行交互的对象(接口)
- 其核心对象是 window
- BOM 缺乏标准

#### 1.1 BOM构成

![img](/_media/bomc.png)

- 它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法
- 在调用的时候可以省略 window。如 `alert()、prompt()`等
- window 对象是浏览器的顶级对象
- **注意**：window下的一个特殊属性 window.name

### 2. window常见事件

#### 2.1 onload

- 当文档内容完全加载完成会触发（包括图像，脚本文件，CSS文件等）

- 传统注册事件方式，只能写一次，多个，会以最后一个`window.onload`为准

- **如果使用addEventListener 则没有限制**

    - ```js
        document.addEventListener('DOMContentLoaded',function(){})
        ```

        - 仅当DOM加载完成，不包括样式表，图片，flash等等

- 2.1 区别

- `load`等**页面内容全部**加载完毕，包括页面dom元素，图片，flash，css等
- `DOMContentLoaded` 是**DOM**加载完毕，不包含图片 flash css 等就可以执行，加载速度比load更快一些

#### 2.2 onresize

- 只要窗口大小发生像素变化，就会触发

### 3. 定时器

window 提供了两个定时器

- `window.setTimeout(调用函数,[延迟的毫秒数]);`
    - `window.clearTimeout(timeoutID)`
- `window.setInterval(回调函数,[间隔的毫秒数]);`
    - `window.clearInterval(timeoutID)`

### 4. this指向

- 只有**函数执行的时候**才能确定`this`到底指向谁
- **全局作用域或者普通函数**中`this`指向全局对象**window**(注意定时器里面的this指向window)
- 方法调用中**谁调用**`this`指向谁
- 构造函数中`this`指向构造函数**实例**

### 5. JS执行机制

#### 5.1 JS是单线程

#### 5.2 事件循环

- 同步任务都在主线程上执行，形成一个 **执行栈**
- JS中的异步是通过**回调函数**实现的
    - 回调函数添加到**任务队列**中

![img](/_media/eventloop.png)

### 6. location对象

- 用于获取或者设置窗体的url，并且可以解析url。

#### 6.1 属性


|location对象属性	|返回值|
| ----------- | ---------------- |
|location.**href**	|获取或者设置整个URL|
|location.host	|返回主机（域名）www.baidu.com|
|location.port	|返回端口号，如果未写返回空字符串|
|location.pathname	|返回路径|
|location.**search**	|返回参数|
|location.hash	|返回片段 #后面内容常见于链接 锚点|

#### 6.2 方法

| location对象方法	 | 返回值 |
| ----------- | ---------------- |
| location.assign()	 | 跟href一样，可以跳转页面（也称为**重定向**页面） |
| location.replace()	 | 替换当前页面，因为不记录历史，所以**不能后退**页面 |
| location.reload()	 | 重新加载页面，相当于**刷新**按钮或者 f5 ，如果参数为true 强制刷新 ctrl+f5 |

### 7. navigator对象

- `userAgent`,该属性可以返回由客户机发送服务器的`user-agent`**头部**的值

```js
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = "";     //手机
 } else {
    window.location.href = "";     //电脑
 }
```

### 8. history对象

- 与浏览器历史记录进行交互

| history对象方法 | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| back()          | 可以后退功能                                                 |
| forward()       | 前进功能                                                     |
| go(参数)        | 前进后退功能，参数如果是 1 前进1个页面 如果是 -1 后退1个页面 |

## 十四. 面向对象

### 1. 类

#### 1.1 创建

```js
class name {
    // constructor 构造器或者构造函数
    constructor(uname, age) {
        this.uname = uname;
        this.age = age;
    }
    sing(song) {
        console.log(this.uname + song);
    }
}	
```

- 实例化

```js
var XX = new name();
```

- 构造函数
    - **constructor()**
    - 用于传递参数,返回实例对象
    - 共有属性放到`constructor` 里面
    - 习惯性**定义首字母大写**

- 类中添加方法
    - 方法之间不能加逗号分隔

#### 1.2 继承

```js
// 父类
class Father {
}
// 子类继承父类
class Son extends Father {
}
```

- super关键字
    - 可以调用父类的**构造函数**，也可以调用父类的**普通函数**
    - 必须放到**this前面**（必须先调用父类的构造方法，在使用子类构造方法）

- 继承中属性和方法的**查找原则**：就近原则，先看子类，再看父类

- 类没有变量提升

- `this`指向
    - constructor 里面的 `this`指向**实例对象**
    - 方法里面的`this`指向这个方法的**调用者**

### 2. 构造函数和原型

在 ES6之前 ，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征。

>  构造函数方法很好用，但是存在**浪费内存**的问题。

- 创建对象有三种方式
    - **对象字面量**
    - **new Object()**
    - **自定义构造函数**

```js
// 1. 利用 new Object() 创建对象
var obj1 = new Object();

// 2. 利用对象字面量创建对象
var obj2 = {}；

// 3.利用构造函数创建对象
function Star(uname,age) {
    this.uname = uname;
    this.age = age;
    this.sing = function() {
        console.log('我会唱歌');
    }
}
var ldh = new Star('刘德华',18);
```

#### 2.1 静态成员和实例成员

- 静态成员: 在**构造函数本身**上添加的成员为静态成员，只能由构造函数本身来访问
- 实例成员: 在**构造函数内部创建**的对象成员称为实例成员，只能由实例化的对象来访问

#### 2.2 构造函数原型 prototype

- 构造函数通过**原型**分配的函数是所有对象所**共享**的,这样就解决了内存浪费问题
- 每一个构造函数都有一个**prototype**属性，指向另一个对象
- 这个`prototype`就是一个**对象**，这个对象的所有属性和方法，都会被构造函数所拥有
- 把那些**不变的方法**，直接定义在`prototype` 对象上

```js
<body>
    <script>
        // 1. 构造函数的问题. 
        function Star(uname, age) {
    		//公共属性定义到构造函数里面
            this.uname = uname;
            this.age = age;
            // this.sing = function() {
            //     console.log('我会唱歌');
            // }
        }
		//公共的方法我们放到原型对象身上
        Star.prototype.sing = function() {
            console.log('我会唱歌');
        }
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
        console.log(ldh.sing === zxy.sing);
        ldh.sing();
        zxy.sing();
        // 2. 一般情况下,我们的公共属性定义到构造函数里面, 公共的方法我们放到原型对象身上
    </script>
</body>
```

- 一般情况下,我们的**公共属性**定义到构造函数里面, **公共的方法**我们放到原型对象身上

#### 2.3 对象原型 __ proto __

- 对象都会有一个**属性 `_proto_`** 指向构造函数的**`prototype`原型对象**
- 之所以我们对象**可以使用构造函数`prototype` 原型对象的属性和方法**，就是因为对象有`_proto_`原型的存在。
- 实例对象的**proto** 等价与构造函数的**prototype**

![img](/_media/proto.png)

#### 2.4 constructor 构造函数

- 对象原型(__ proto __) 和构造函数(prototype)原型对象 里面都有一个 **constructor 属性**，指回构造函数本身。
- **一般情况下，对象的方法都在构造函数(prototype)的原型对象中设置**
- 修改后的原型对象中，添加一个`constructor`指向原来的构造函数

```js
<body>
    <script>
        function Star(uname, age) {
            this.uname = uname;
            this.age = age;
        }
        // 很多情况下,我们需要手动的利用constructor 这个属性指回 原来的构造函数
        // Star.prototype.sing = function() {
        //     console.log('我会唱歌');
        // };
        // Star.prototype.movie = function() {
        //     console.log('我会演电影');
        // }
        Star.prototype = {
            // 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
            constructor: Star,
            sing: function() {
                console.log('我会唱歌');
            },
            movie: function() {
                console.log('我会演电影');
            }
        }
        var ldh = new Star('刘德华', 18);
        var zxy = new Star('张学友', 19);
    </script>
</body>
```

#### 2.5 构造函数、实例、原型对象三者关系

![img](/_media/relation.png)

#### 2.6. 原型链查找规则

- 当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性
- 如果没有就查找它的原型(也就是_proto_指向的prototype原型对象)
- 如果还没有就查找原型对象的原型(Object的原型对象)
- 依次类推一直找到Object为止(null)
- __ proto __对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线

![img](/_media/protoChain.png)

#### 2.7 扩展内置对象

- 可以通过原型对象，对原来的内置对象进行扩展自定义的方法
- 比如给数组增加自定义求偶数和的功能

### 3. 继承

ES6 之前并没有给我们提供`extends`继承

- 我们可以通过**构造函数+原型对象**模拟实现继承，被称为**组合继承**

#### 3.1. call()

调用这个函数，并且修改函数运行时的 this 指向

```js
fun.call(thisArg,arg1,arg2,......)
```

- `thisArg`：当前调用函数 this 的指向对象
- `arg1,arg2`： 传递的其他参数

#### 3.2. 借用构造函数继承父类型属性

- 通过 **call()** 把父类型的 this 指向子类型的 this

```html
<body>
    <script>
        // 借用父构造函数继承属性
        // 1. 父构造函数
        function Father(uname, age) {
            // this 指向父构造函数的对象实例
            this.uname = uname;
            this.age = age;
        }
        // 2 .子构造函数 
        function Son(uname, age, score) {
            // this 指向子构造函数的对象实例
            Father.call(this, uname, age);
            this.score = score;
        }
        var son = new Son('刘德华', 18, 100);
        console.log(son);
    </script>
</body>
```

#### 3.3. 借用原型对象继承父类型方法

- 一般情况下，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法
- 核心
    - 将子类所共享的方法提取出来，让子类的 `prototype 原型对象 = new 父类()`
    - 本质： 子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象
    - 将子类的`constructor`重新指向子类的构造函数

```html
<body>
    <script>
        // 借用父构造函数继承属性
        // 1. 父构造函数
        function Father(uname, age) {
            // this 指向父构造函数的对象实例
            this.uname = uname;
            this.age = age;
        }
        Father.prototype.money = function() {
            console.log(100000);
        };
        // 2 .子构造函数 
        function Son(uname, age, score) {
            // this 指向子构造函数的对象实例
            Father.call(this, uname, age);
            this.score = score;
        }
        // Son.prototype = Father.prototype;  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
        Son.prototype = new Father();
        // 如果利用对象的形式修改了原型对象,别忘了利用constructor 指回原来的构造函数
        Son.prototype.constructor = Son;
        // 这个是子构造函数专门的方法
        Son.prototype.exam = function() {
            console.log('孩子要考试');
        }
        var son = new Son('刘德华', 18, 100);
        console.log(son);
        console.log(Father.prototype);
        console.log(Son.prototype.constructor);
    </script>
</body>
```

## 十五. ES5新增方法

### 1. 数组方法

- 迭代(遍历)方法：
    - **foreach**() 
        - `array.forEach(function(currentValue,index,arr)`
    - **map**()
    - **filter**()
        - 返回一个新数组
    - **some**() 
        - 返回**布尔值**，如果查找到这个元素，就返回true，如果查找不到就返回false
        - 如果找到**第一个**满足条件的元素，则终止循环，不再继续查找
    - **every**() ;

### 2. 字符串方法

- **trim**()
    - 两端删除空白字符
    - 返回的是一个**新**的字符串

### 3. 对象方法

- **Object.keys**()

    - 返回一个由**属性名**组成的**数组**
- **Object.defineProperty**()
    - 定义对象中新属性或修改原有的属性
    - Object.defineProperty(obj,prop,descriptor)
        - 第三个参数 **descriptor** :**以对象形式{ }书写**
            - value：设置**属性**的值，默认为undefined
            - writeable: 值是否可以**重写** true | false 默认为false
            - enumerable: 目标属性是否可以被**枚举** true | false 默认为false
            - configurable: 目标属性是否可以被**删除**或是否可以**再次修改**特性 true | false 默认为false

### 4. 函数进阶

- 函数也属于对象

#### 4.1 函数内this的指向

| 调用方式     | this指向                                   |
| ------------ | ------------------------------------------ |
| 普通函数调用 | window                                     |
| 构造函数调用 | 实例对象，原型对象里面的方法也指向实例对象 |
| 对象方法调用 | 该方法所属对象                             |
| 事件绑定方法 | 绑定事件对象                               |
| 定时器函数   | window                                     |
| 立即执行函数 | window                                     |

#### 4.2 改变函数内部this指向

- call()

    - `fun.call(thisArg,arg1,arg2,.....)`
        - `thisArg`: 在 fun 函数运行时指定的 this 值
        - `arg1,arg2`: 传递的其他参数
    - 主要作用可以实现**继承**

- apply()

    - `fun.apply(thisArg,[argsArray])`
        - thisArg: 在 fun 函数运行时指定的 this 值
        - argsArray : 传递的值，必须包含在**数组**里面
    - 主要跟数组有关系

- bind()

    - `fun.bind(thisArg,arg1,arg2,....)`
        - 返回由指定的 `this`值和初始化参数改造的 原函数拷贝
        - 只是想改变 this 指向，并且不想调用这个函数的时候

## 十六. ES6

![img](/_media/es6object.png)

严格模式对正常的JavaScript语义做了一些更改：

- 消除了Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为
- 消除代码运行的一些不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class, enum, export, extends, import, super 不能做变量名

### 1. 开启严格模式

- **整个脚本**

    - ```html
        <script>
            'user strict';
        	console.log("这是严格模式。");
        </script>
        ```

    - ```html
        
        <script>
        	(function (){
            	'use strict';
            	 var num = 10;
            	 function fn() {}
        	})();   
        </script>
        ```

        

- **个别函数**。

    - ```html
        <script>
            // 此时只是给fn函数开启严格模式
            function fn() {
                'use strict';
                // 下面的代码按照严格模式执行
            }
            function fun() {
                // 里面的还是按照普通模式执行
            }
        </script>
        ```

### 2. 变量规则

- 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量
- 严格模式禁止这种用法，变量都必须先用var 命令声明，然后再使用
- 严禁删除已经声明变量，例如，``delete x` 语法是错误的

### 3. 严格模式下this指向问题
- 以前在全局作用域函数中的this指向**window**对象
    - 严格模式下全局作用域中函数中的this 是 **undefined**
- 以前构造函数时不加 **new** 也可以调用，当普通函数，this指向全局对象
    - 严格模式下，如果构造函数不加 new 调用，this指向的是 **undefined** ，如果给它赋值，会报错
- new 实例化的构造函数指向创建的**对象实例**
- 定时器this 还是指向**window**
- 事件、对象还是指向**调用者**

### 4. 函数变化

- 函数不能有重名的**参数**
- 函数必须声明在**顶层**

### 5. 高阶函数

> 高阶函数是**对其他函数进行操作**的函数，它**接收函数**作为参数或**将函数作为返回值输出**

```html
<body>
    <div></div>
    <script>
        // 高阶函数- 函数可以作为参数传递
        function fn(a, b, callback) {
            console.log(a + b);
            callback && callback();
        }
        fn(1, 2, function() {
            console.log('我是最后调用的');
        });
    </script>
    
    <script>
        // 将函数作为返回值
        function fn(){
            return function() {}
        }
	</script>
</body>
```

### 6. 闭包

> 闭包指有权访问另一个函数作用域中的变量的函数

> 简单理解：一个作用域可以访问另外一个函数内部的局部变量

### 7. 递归

> 如果一个函数在内部可以调用其本身，那么这个函数就是递归函数

> 简单理解： 函数内部自己调用自己，这个函数就是递归函数

> **必须要加退出条件 return**

### 8. 浅拷贝和深拷贝

1. **浅拷贝**只是拷贝**一层**，更深层次对象级别的只拷贝引用
2. **深拷贝**拷贝**多层**，每一级别的数据都会拷贝
3. **Object.assign(target,....sources)** ES6新增方法可以浅拷贝

```js
var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    }
};
var o = {}

// 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用
for(var k in obj){
    // k是属性名，obj[k]是属性值
    o[k] = obj.[k];
}
console.log(o);
// 浅拷贝语法糖
Object.assign(o,obj);

// 深拷贝拷贝多层，每一级别的数据都会拷贝
// 封装函数
function deepCopy(newobj,oldobj){
    for(var k in oldobj){
        // 判断属性值属于简单数据类型还是复杂数据类型
        // 1.获取属性值   oldobj[k]
        var item = obldobj[k];
        // 2.判断这个值是否是数组
        if(item instanceof Array){
            newobj[k] = [];
            deepCopy(newobj[k],item)
        }else if (item instanceof Object){
              // 3.判断这个值是否是对象
            newobj[k] = {};
            deepCopy(newobj[k],item)
        }else {
            // 4.属于简单数据类型
            newobj[k] = item;
            
        } 
    }
}
deepCopy(o,obj);
```

### 9. 正则表达式

> 正则表达式也是对象

> 实际开发，一般都是直接复制写好的正则表达式



#### 9.1 创建

- 通过调用 **RegExp** 对象的构造函数创建

    - ```js
        var 变量名 = new RegExp(/表达式/);
        ```

- 通过**字面量**创建

    - ```js
        var 变量名 = /表达式/;
        ```

#### 9.2 测试

- ```js
    regexObj.test(str)
    ```

    - 返回`true`或`false`

#### 9.3 特殊字符

- 边界符
    - 提示字符所处的位置
    
    - 如果^ 和 $ 在一起，表示必须是**精确匹配**
    
        - ```js
            // 边界符 ^ $
            var rg = /abc/;   //正则表达式里面不需要加引号，不管是数字型还是字符串型
            // /abc/只要包含有abc这个字符串返回的都是true
            console.log(rg.test('abc'));
            console.log(rg.test('abcd'));
            console.log(rg.test('aabcd'));
            
            var reg = /^abc/;
            console.log(reg.test('abc'));   //true
            console.log(reg.test('abcd'));	// true
            console.log(reg.test('aabcd')); // false
            
            var reg1 = /^abc$/
            // 以abc开头，以abc结尾，必须是abc
            ```

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 表示匹配行首的文本(以谁开始) |
| $      | 表示匹配行尾的文本(以谁结束) |

- 字符类

    - 所有可供选择的字符都放在**方括号**内

    - 只要**匹配其中一个**就可以了

        - [] 方括号

            ```js
            /[abc]/.test('andy');     // true
            ```

            后面的字符串只要包含 abc 中任意一个字符,都返回true

        - [-]方括号内部 **范围符**

            ```js
            /^[a-z]$/.test()
            ```

            方括号内部加上 - 表示范围，这里表示 a - z 26个英文字母都可以

        - [^] 方括号内部 **取反符 ^**

            

            ```js
            /[^abc]/.test('andy')   // false
            ```

            方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false

            注意和边界符 ^ 区别，边界符写到方括号外面

        - 字符**组合**

            ```js
            /[a-z1-9]/.test('andy')    // true
            ```

            a 到 z的26个英文字母和1到9的数字都可以

- 量词类
    - 设定某个模式出现的次数

| 量词  | 说明             |
| ----- | ---------------- |
| *     | 重复零次或更多次 |
| +     | 重复一次或更多次 |
| ?     | 重复零次或一次   |
| {n}   | 重复n次          |
| {n,}  | 重复n次或更多次  |
| {n,m} | 重复n到m次       |

#### 9.4 括号总结

1. 大括号 量词符 里面面表示重复次数
2. 中括号 字符集合 匹配方括号中的任意字符
3. 小括号 表示优先级

#### 9.5 预定义类

- 某些常见模式的简写写法

| 预定类	 | 说明 |
| ----- | ---------------- |
| \d	 | 匹配0-9之间的任一数字，相当于[0-9] |
| \D	 | 匹配所有0-9以外的字符，相当于[ ^ 0-9] |
| \w	 | 匹配任意的字母、数字和下划线,相当于[A-Za-z0-9_ ] |
| \W	 | 除所有字母、数字、和下划线以外的字符，相当于[ ^A-Za-z0-9_ ] |
| \s	 | 匹配空格（包括换行符，制表符，空格符等），相当于[\t\t\n\v\f] |
| \S	 | 匹配非空格的字符，相当于[ ^ \t\r\n\v\f] |

#### 9.6 替换

```js
stringObject.replace(regexp/substr,replacement)
```

#### 9.7 正则参数

```js
/表达式/[switch]
```

`switch`的模式有三种:

- `g`: 全局匹配
- `i`:忽略大小写
- `gi`: 全局匹配 + 忽略大小写
