# **Shell**

## **screen**

参考：
[Linux screen](https://www.myfreax.com/how-to-use-linux-screen/)

> 安装

```bash
sudo apt install screen
screen --version
```

> 启动

```bash
screen -S session_name 创建一个会话
screen -r session_name 进入会话
screen -ls 查看会话ID
screen -x 恢复之前离线的screen作业。
```

> 使用

一个 screen 会话中，可以有多个窗口
**常用命令**

```bash
Ctrl+a c 创建一个新窗口（带外壳）
Ctrl+a " 列出所有窗口
Ctrl+a 0 切换到窗口0（按数字）
Ctrl+a A 重命名当前窗口
Ctrl+a S 将当前区域水平分为两个区域
Ctrl+a | 将当前区域垂直分割为两个区域
Ctrl+a tab 将输入焦点切换到下一个区域
Ctrl+a Ctrl+a 在当前区域和上一个区域之间切换]
Ctrl+a Q 关闭当前区域以外的所有区域
Ctrl+a X 关闭当前区域
Ctrl+a d 从会话断开后，在screen会话中运行的程序将继续运行
```

> 自定义 Linux screen

启动 screen 时，如果存在配置文件，它将从/etc/screenrc 和~/.screenrc 中读取其配置参数。  
可以使用.screenrc 文件根据喜好修改默认的 screen 设置。  
例：

```bash
# Turn off the welcome message
startup_message off

# Disable visual bell
vbell off

# Set scrollback buffer to 10000
defscrollback 10000

# Customize the status line
hardstatus alwayslastline
hardstatus string '%{= kG}[ %{G}%H %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %m-%d %{W}%c %{g}]'
```

> 流程总结

1. 在命令提示符下，键入 screen。
2. 运行所需的程序。
3. 使用键序列 Ctrl-a + Ctrl-d 从 screen 会话中分离。
4. 通过输入 screen -r 来重新加入 screen 会话。

## 状态查看

### ps

常用 1：

```
ps -aux
```

参数说明：

- a：显示当前终端下的所有进程信息，包括其他用户的进程。
- u：使用以用户为主的格式输出进程信息。
- x：显示当前用户在所有终端下的进程

状态说明：

- USER：启动该进程的用户账号名称
- PID：该进程的 ID 号，在当前系统中是唯一的
- %CPU：CPU 占用的百分比
- %MEM：内存占用的百分比
- VSZ：占用虚拟内存（swap 空间）的大小
- RSS：占用常驻内存（物理内存）的大小
- TTY：该进程在哪个终端上运行。“？”表未知或不需要终端
- STAT：显示了进程当前的状态，如 S（休眠）、R（运行）、Z（僵死）、<（高优先级）、N（低优先级）、s（父进程）、+（前台进程）。对处于僵死状态的进程应予以手动终止。
- START：启动该进程的时间
- TIME：该进程占用 CPU 时间
- COMMAND：启动该进程的命令的名称

常用 2：

```
ps -elf
```

参数说明：

- e：显示系统内的所有进程信息。
- l：使用长（long）格式显示进程信息。
- f：使用完整的（full）格式显示进程信息。

### top

以全屏交互式的界面显示进程排名，及时跟踪包括 CPU、内存等系统资源占用情况，默认情况下每三秒刷新一次，其作用基本类似于 Windows 系统中的任务管理器。

状态说明：

- Tasks（系统任务）信息：total，总进程数；
  - running，正在运行的进程数；
  - sleeping，休眠的进程数；
  - stopped，中止的进程数；
  - zombie，僵死无响应的进程数。
- CPU 信息：us，用户占用；
  - sy，内核占用；
  - ni，优先级调度占用；
  - id，空闲 CPU；
  - wa，I/O 等待占用；
  - hi，硬件中断占用；
  - si，软件中断占用；
  - st，虚拟化占用。

了解空闲的 CPU 百分比，主要看%id 部分。

- Mem（内存）信息：

  - total，总内存空间；
  - used，已用内存；
  - free，空闲内存；
  - buffers，缓存区域。

- Swap（交换空间）信息：
  - total，总交换空间；
  - used，已用交换空间；
  - free，空闲交换空间；
  - cached，缓存空间。

### pstree

常用：

```
pstree -aup
```

以树状图的方式展现进程之间的派生关系，显示效果比较直观。

参数说明：

- a：显示每个程序的完整指令，包含路径，参数或是常驻服务的标示；
- c：不使用精简标示法；
- G：使用 VT100 终端机的列绘图字符；
- h：列出树状图时，特别标明现在执行的程序；
- H<程序识别码>：此参数的效果和指定”-h”参数类似，但特别标明指定的程序；
- l：采用长列格式显示树状图；
- n：用程序识别码排序。预设是以程序名称来排序；
- p：显示程序识别码；
- u：显示用户名称；

### 内容查找

```
sudo grep "HTTP_PROXY" /etc/ -rn
```

