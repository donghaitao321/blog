# Node

## 概念

*Node.js 就是运行在服务端的 JavaScript。*

*Node.js 是一个基于 Chrome JavaScript 运行时建立的一个平台。*

*Node.js 是一个事件驱动 I/O 服务端 JavaScript 环境，基于 Google 的 V8 引擎，V8 引擎执行 Javascript 的速度非常快，性能非常好。*

### 回调函数

> Node.js 异步编程的直接体现就是回调。

> 异步编程依托于回调来实现，但**不能说使用了回调后程序就异步化了**。

### 事件循环

> Node.js 是单进程单线程应用程序。

> V8 引擎提供的异步执行回调接口，通过这些接口可以处理大量的并发。

![eventloop](https://www.runoob.com/wp-content/uploads/2015/09/event_loop.jpg)

### 事件触发器（EventEmitter）

> Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

> 所有产生事件的对象都是 events.EventEmitter 的实例。

## EventEmitter 类

> events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

```js
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```

### 方法

> 添加：**addListener**、**newListener**、**on**、**once**

> 移除：**removeListener**、**removeAllListeners**

> 设置数量：**setMaxListeners**

> 获取监听器数组：**listeners**

> 执行：**emit**

> 数量：**listenerCount**

### error 事件

> EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。

> 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。

### 继承 EventEmitter

> 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。

### 注：

> 若事件队列中出现一个未绑定事件则触发error事件，若未绑定 error事件则程序抛出异常结束执行

## Buffer 类

> JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

> Buffer类用来创建一个专门存放二进制数据的缓存区。

> 当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。

> 它对应于 V8 堆内存之外的一块原始内存。

### Buffer 与字符编码

> 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

**Node.js 目前支持的字符编码包括：**

> **ascii**、**utf8**、**utf16le**、**ucs2**、**base64**、**latin1**、**binary**、**hex**

### 创建

Buffer 提供了以下 API 来创建 Buffer 类：

- **Buffer.alloc(size[, fill[, encoding]])：** 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
- **Buffer.allocUnsafe(size)：** 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
- **Buffer.allocUnsafeSlow(size)**
- **Buffer.from(array)：** 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
- **Buffer.from(arrayBuffer[, byteOffset[, length]])：** 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
- **Buffer.from(buffer)：** 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
- **Buffer.from(string[, encoding])：** 返回一个被 string 的值初始化的新的 Buffer 实例

### 写入缓冲区

**语法**

```js
buf.write(string[, offset[, length]][, encoding])
```

- **string** - 写入缓冲区的字符串。
- **offset** - 缓冲区开始写入的索引值，默认为 0 。
- **length** - 写入的字节数，默认为 buffer.length
- **encoding** - 使用的编码。默认为 'utf8' 。

**返回值**

> 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

### 从缓冲区读取数据

**语法**

```js
buf.toString([encoding[, start[, end]]])
```

- **encoding** - 使用的编码。默认为 'utf8' 。
- **start** - 指定开始读取的索引位置，默认为 0。
- **end** - 结束位置，默认为缓冲区的末尾。

**返回值**

> 解码缓冲区数据并使用指定的编码返回字符串。

### 将 Buffer 转换为 JSON 对象

**语法**

```js
buf.toJSON()
```

当字符串化一个 Buffer 实例时，[JSON.stringify()](https://www.runoob.com/js/javascript-json-stringify.html) 会隐式地调用该 **toJSON()**。

### 缓冲区合并

**语法**

```
Buffer.concat(list[, totalLength])
```

- **list** - 用于合并的 Buffer 对象数组列表。
- **totalLength** - 指定合并后Buffer对象的总长度。

### 缓冲区比较

**语法**

```
buf.compare(otherBuffer);
```

**返回值**

返回一个数字，表示 **buf** 在 **otherBuffer** 之前，之后或相同。

### 拷贝缓冲区

**语法**

```
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

- **targetBuffer** - 要拷贝的 Buffer 对象。
- **targetStart** - 数字, 可选, 默认: 0
- **sourceStart** - 数字, 可选, 默认: 0
- **sourceEnd** - 数字, 可选, 默认: buffer.length

### 缓冲区裁剪

**语法**

```
buf.slice([start[, end]])
```

- **start** - 数字, 可选, 默认: 0
- **end** - 数字, 可选, 默认: buffer.length

## Stream(流)

> Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
>
> 例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

Stream 有四种流类型：

- **Readable** - 可读操作。
- **Writable** - 可写操作。
- **Duplex** - 可读可写操作.
- **Transform** - 操作被写入数据，然后读出结果。

所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

- **data** - 当有数据可读时触发。
- **end** - 没有更多的数据可读时触发。
- **error** - 在接收和写入过程中发生错误时触发。
- **finish** - 所有数据已被写入到底层系统时触发。

### 读取流

```js
var fs = require("fs");
var readerStream = fs.createReadStream('input.txt');
```

### 写入流

```js
var fs = require("fs");
var writerStream = fs.createWriteStream('output.txt');
```

### 管道流

>管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。

```js
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");
```

### 链式流

> 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。
>
> 链式流一般用于管道操作。

```js
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
```

## 模块系统

> 文件和模块是一一对应的。
>
> 一个 Node.js 文件就是一个模块
>
> 这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展

### 引入模块

> require

#### 模块的访问接口

```js
module.exports = function() {
  // ...
}
```

#### 把一个对象封装到模块

```js
module.exports = function() {
  // ...
}
```

### 服务端的模块放在哪里

> Node.js 中存在 4 类模块（原生模块和3种文件模块）

#### 加载优先级

![require](nodejs-require.jpg)

## 函数

>一个函数可以作为另一个函数的参数
>
>Node.js 中函数的使用与 JavaScript 类似

```js
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");
```

### 匿名函数

```js
function execute(someFunction, value) {
  someFunction(value);
}

execute(function(word){ console.log(word) }, "Hello");
```

## 路由

**模块:** url、querystring

```js
                   url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring.parse(queryString)["foo"]    |
                                            |
                         querystring.parse(queryString)["hello"]
```

## 全局对象

> 浏览器 JavaScript 中，通常 window 是全局对象

> Node.js 中的全局对象是 global
>
> 所有全局变量（除了 global 本身以外）都是 global 对象的属性。

### 全局对象与全局变量

全局变量ECMAScript 的**定义**:

- 在最外层定义的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）。

**注意：** 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。

__filename：文件所在位置的绝对路径

__dirname：前执行脚本所在的目录

setTimeout(cb, ms)：返回一个代表定时器的句柄值。执行一次

clearTimeout(t)：停止一个之前通过 setTimeout() 创建的定时器

setInterval(cb, ms)：返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。循环执行。

### console

> 提供控制台标准输出

| 方法                                  | 描述                                                         |
| :------------------------------------ | :----------------------------------------------------------- |
| console.log([data][, ...])            | 向标准输出流打印字符并以换行符结束。该方法接收若干个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。 |
| console.info([data][, ...])           | 该命令的作用是返回**信息性消息**，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。 |
| console.error([data][, ...])          | 输出**错误消息**的。控制台在出现错误时会显示是红色的叉子。   |
| console.warn([data][, ...])           | 输出**警告消息**。控制台出现有黄色的惊叹号。                 |
| console.dir(obj[, options])           | 用来对一个**对象进行检查**（inspect），并以易于阅读和打印的格式显示。 |
| console.time(label)                   | 输出时间，表示**计时开始**。                                 |
| console.timeEnd(label)                | 结束时间，表示**计时结束**。                                 |
| console.trace(message[,...])          | 当前执行的代码在堆栈中的**调用路径**，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。 |
| console.assert(value[,message][,...]) | 用于**判断某个表达式或变量是否为真**，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。 |

### process

> 描述当前Node.js 进程状态

#### 事件

| 事件              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| exit              | 当进程准备退出时触发。                                       |
| beforeExit        | 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。 |
| uncaughtException | 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。 |
| Signal            | 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。 |

#### 退出状态码

| 状态码 | 名称                                            | 描述                                                         |
| :----- | ----------------------------------------------- | :----------------------------------------------------------- |
| 1      | **Uncaught Fatal Exception**                    | 有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。 |
| 2      | **Unused**                                      | 保留，由 Bash 预留用于内置误用                               |
| 3      | **Internal JavaScript Parse Error**             | JavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。 |
| 4      | **Internal JavaScript Evaluation Failure**      | JavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。 |
| 5      | **Fatal Error**                                 | V8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR |
| 6      | **Non-function Internal Exception Handler**     | 未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。 |
| 7      | **Internal Exception Handler Run-Time Failure** | 未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on('uncaughtException') 或 domain.on('error') 抛出了异常。 |
| 8      | **Unused**                                      | 保留，在以前版本的 Node.js 中，退出码 8 有时表示未捕获的异常。 |
| 9      | **Invalid Argument**                            | 可能是给了未知的参数，或者给的参数没有值。                   |
| 10     | **Internal JavaScript Run-Time Failure**        | JavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。 |
| 12     | **Invalid Debug Argument**                      | 设置了参数--debug 和/或 --debug-brk，但是选择了错误端口。    |
| 128    | **Signal Exits**                                | 如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。 |

#### 属性

| 序号. | 属性 | 描述                                                   |
| :---- | :----| :------------------------------------------------------- |
| 1     | **stdout** | 标准输出流。                                      |
| 2     | **stderr** | 标准错误流。                                      |
| 3     | **stdin** | 标准输入流。                                       |
| 4     | **argv** | 返回一个数组，由命令行执行脚本时的各个参数组成。<br />它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。 |
| 5     | **execPath** | 返回执行当前脚本的 Node 二进制文件的**绝对路径**。 |
| 6     | **execArgv** | 返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的**命令行参数**。 |
| 7     | **env** | 返回一个对象，成员为当前 shell 的**环境变量**        |
| 8     | **exitCode** | 进程退出时的代码，如果进程优通过 process.exit() 退出，不需要指定退出码。 |
| 9     | **version** | Node 的版本，比如v0.10.18。                      |
| 10    | **versions** | 一个属性，包含了 node 的版本和依赖.             |
| 11    | **config** | 一个包含用来编译当前 node 执行文件的 javascript 配置选项的对象。<br />它与运行 ./configure 脚本生成的 "config.gypi" 文件相同。 |
| 12    | **pid** | 当前进程的进程号。                                   |
| 13    | **title** | **进程名**，默认值为"node"，可以自定义该值。       |
| 14    | **arch** | 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'。         |
| 15    | **platform** | 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32' |
| 16    | **mainModule** | require.main 的备选方法。<br />不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。<br />可以认为，这两者引用了同一个模块。 |

#### 方法

| 序号 | 方法 | 描述                                                  |
| :--- | :----| :------------------------------------------------------- |
| 1    | **abort()** | 这将导致 node 触发 abort 事件。会让 node **退出**并生成一个核心文件。 |
| 2    | **chdir(directory)** | **改变当前工作进程的目录**，如果操作失败抛出异常。 |
| 3    | **cwd()** | 返回当前进程的工作目录                             |
| 4    | **exit([code])** | 使用指定的 code 结束进程。如果忽略，将会使用 code 0。 |
| 5    | **getgid()** | 获取进程的群组标识（参见 getgid(2)）。获取到的是群组的数字 id，而不是名字。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 6    | **setgid(id)** | 设置进程的群组标识（参见 setgid(2)）。可以接收数字 ID 或者群组名。如果指定了群组名，会阻塞等待解析为数字 ID 。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 7    | **getuid()** | 获取进程的用户标识(参见 getuid(2))。这是数字的用户 id，不是用户名。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 8    | **setuid(id)** | 设置进程的用户标识（参见setuid(2)）。接收数字 ID或字符串名字。如果指定了群组名，会阻塞等待解析为数字 ID 。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 9    | **getgroups()** | 返回进程的群组 ID 数组。POSIX 系统没有保证一定有，但是 node.js 保证有。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 10   | **setgroups(groups)** | 设置进程的群组 ID。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 11   | **initgroups(user, extra_group)** | 读取 /etc/group ，并初始化群组访问列表，使用成员所在的所有群组。这是授权操作，所以你需要有 root 权限，或者有 CAP_SETGID 能力。 注意：这个函数仅在 POSIX 平台上可用(例如，非Windows 和 Android)。 |
| 12   | **kill(pid[, signal])** | 发送信号给进程. pid 是进程id，并且 signal 是发送的信号的字符串描述。信号名是字符串，比如 'SIGINT' 或 'SIGHUP'。如果忽略，信号会是 'SIGTERM'。 |
| 13   | **memoryUsage()** | 返回一个对象，描述了 Node 进程所用的内存状况，单位为字节。 |
| 14   | **nextTick(callback)** | 一旦当前事件循环结束，调用回调函数。  |
| 15   | **umask([mask])** | 设置或读取进程文件的掩码。子进程从父进程继承掩码。如果mask 参数有效，返回旧的掩码。否则，返回当前掩码。 |
| 16   | **uptime()** | 返回 Node 已经运行的秒数。                      |
| 17   | **hrtime()** | 返回当前进程的高分辨时间，形式为 [seconds, nanoseconds]数组。它是相对于过去的任意事件。该值与日期无关，因此不受时钟漂移的影响。主要用途是可以通过精确的时间间隔，来衡量程序的性能。 你可以将之前的结果传递给当前的 process.hrtime() ，会返回两者间的时间差，用来基准和测量时间间隔。 |

## 常用工具

> **util**模块

```
const util = require('util');
```

| 序号 | 方法        | 描述                                    |
| ---- | ----------- | --------------------------------------- |
| 1    | callbackify | 遵循异常优先的回调风格的函数。          |
| 2    | inspect     | 将任意对象转换 为字符串的方法           |
| 3    | isArray     | 是一个数组返回 true，否则返回 false     |
| 4    | isRegExp    | 是一个正则表达式返回true，否则返回false |
| 5    | isDate      | 是一个日期返回true，否则返回false       |

## 文件系统

```js
var fs = require("fs")
```

### 异步和同步

> 文件系统（fs 模块）模块中的方法均有异步和同步版本
>
> 例：异步的 fs.readFile() 和同步的 fs.readFileSync()

### 打开文件(异步)

```js
fs.open(path, flags[, mode], callback)
```

**参数**

- **path** - 文件的路径。
- **flags** - 文件打开的行为。具体值详见下文。
- **mode** - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- **callback** - 回调函数，带有两个参数如：callback(err, fd)。

**flags 参数**

| Flag | 描述                                                   |
| :--- | :----------------------------------------------------- |
| r    | 以**读取**模式打开文件。如果文件不存在抛出异常。       |
| r+   | 以**读写**模式打开文件。如果文件不存在抛出异常。       |
| rs   | 以**同步**的方式**读取**文件。                         |
| rs+  | 以**同步**的方式读取和写入文件。                       |
| w    | 以**写入**模式打开文件，如果文件不存在则创建。         |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。       |
| w+   | 以**读写**模式打开文件，如果文件**不存在则创建**。     |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以**追加**模式打开文件，如果文件不存在则创建。         |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取**追加**模式打开文件，如果文件不存在则创建。     |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |

### 获取文件信息

```js
fs.stat(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，带有两个参数如：(err, stats), **stats** 是 fs.Stats 对象。

> 会将stats类的实例返回给其回调函数

```js
var fs = require('fs');

fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile());         //true
})
```

**stats类中的方法**

| 方法                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| stats.isFile()            | 如果是文件返回 true，否则返回 false。                        |
| stats.isDirectory()       | 如果是目录返回 true，否则返回 false。                        |
| stats.isBlockDevice()     | 如果是块设备返回 true，否则返回 false。                      |
| stats.isCharacterDevice() | 如果是字符设备返回 true，否则返回 false。                    |
| stats.isSymbolicLink()    | 如果是软链接返回 true，否则返回 false。                      |
| stats.isFIFO()            | 如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。 |
| stats.isSocket()          | 如果是 Socket 返回 true，否则返回 false。                    |

### 写入文件

```js
fs.writeFile(file, data[, options], callback)
```

**参数**

- **file** - 文件名或文件描述符。
- **data** - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
- **options** - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
- **callback** - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

### 读取文件

```js
fs.read(fd, buffer, offset, length, position, callback)
```

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **buffer** - 数据写入的缓冲区。
- **offset** - 缓冲区写入的写入偏移量。
- **length** - 要从文件中读取的字节数。
- **position** - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
- **callback** - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

### 关闭文件

```js
fs.close(fd, callback)
```

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **callback** - 回调函数，没有参数。

### 截取文件

```
fs.ftruncate(fd, len, callback)
```

**参数**

- **fd** - 通过 fs.open() 方法返回的文件描述符。
- **len** - 文件内容截取的长度。
- **callback** - 回调函数，没有参数。

### 删除文件

```
fs.unlink(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，没有参数。

### 创建目录

```
fs.mkdir(path[, options], callback)
```

**参数**

- **path** - 文件路径。
- **options** ：
    - **recursive** - 是否以递归的方式创建目录，默认为 false。
    - **mode** - 设置目录权限，默认为 0777。
- **callback** - 回调函数，没有参数。

### 读取目录

```
fs.readdir(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

### 删除目录

```
fs.rmdir(path, callback)
```

**参数**

- **path** - 文件路径。
- **callback** - 回调函数，没有参数

## GET/POST请求

### 获取GET请求内容

```js
var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(3000);
```

### 获取 POST 请求内容

```js
var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);
```

## 工具模块

###  **OS 模块**

> 基本的系统操作函数

### Path 模块

> 处理和转换文件路径的工具

### Net 模块

> 用于底层的网络通信。提供了服务端和客户端的的操作。

### DNS 模块

> 用于解析域名。

### Domain

> 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的。

