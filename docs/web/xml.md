# XML

用途：
XML 应用于 Web 开发的许多方面，常用于简化数据的存储和共享。

## XML 树结构

![img](https://www.runoob.com/wp-content/uploads/2013/09/nodetree.gif)

```XML
<bookstore>
    <book category="COOKING">
        <title lang="en">Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <year>2005</year>
        <price>30.00</price>
    </book>
    <book category="CHILDREN">
        <title lang="en">Harry Potter</title>
        <author>J K. Rowling</author>
        <year>2005</year>
        <price>29.99</price>
    </book>
    <book category="WEB">
        <title lang="en">Learning XML</title>
        <author>Erik T. Ray</author>
        <year>2003</year>
        <price>39.95</price>
    </book>
</bookstore>
```

## 语法

- XML 文档必须有根元素

```xml
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>
```

- XML 声明

```xml
<?xml version="1.0" encoding="utf-8"?>
```

- 所有的 XML 元素都必须有一个关闭标签  
  声明不是 XML 文档本身的一部分，它没有关闭标签。
- XML 标签对大小写敏感
- XML 属性值必须加引号
```xml
<note date="12/11/2007">
<to>Tove</to>
<from>Jani</from>
</note>
```
- 实体引用

| &lt;   | <    | less than      |
| ------ | ---- | -------------- |
| &gt;   | >    | greater than   |
| &amp;  | &    | ampersand      |
| &apos; | '    | apostrophe     |
| &quot; | "    | quotation mark |

- XML 中的注释

```xml
<!-- This is a comment -->
```

- 在 XML 中，空格会被保留

- XML 以 LF 存储换行

- 属性（Attribute）提供有关元素的额外信息

- 避免 XML 属性
	- 属性不能包含多个值（元素可以）
	- 属性不能包含树结构（元素可以）
	- 属性不容易扩展（为未来的变化）
	
- XML可以通过CSS或者XSLT（转化为HTML）添加显示信息
- XMLHttpRequest对象 用于在后台与服务器交换数据。
- XML DOM（XML Document Object Model）定义了访问和操作 XML 文档的标准方法。 和HTML DOM类似。
