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
>使用  

一个screen会话中，可以有多个窗口
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

>自定义Linux screen  

启动screen时，如果存在配置文件，它将从/etc/screenrc和~/.screenrc中读取其配置参数。  
可以使用.screenrc文件根据喜好修改默认的screen设置。  
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

>流程总结
1. 在命令提示符下，键入screen。
2. 运行所需的程序。
3. 使用键序列Ctrl-a + Ctrl-d从screen会话中分离。
4. 通过输入screen -r来重新加入screen会话。