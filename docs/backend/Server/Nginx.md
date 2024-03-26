# Nginx

参考：

> ​	[连前端都看得懂的《Nginx 入门指南》](https://juejin.cn/post/6844904129987526663)
>
> 

## Nginx是什么？

> “Nginx 是一款轻量级的 HTTP 服务器(web服务器)，采用事件驱动的异步非阻塞处理方式框架，这让其具有极好的 IO 性能，时常用于服务端的**反向代理**和**负载均衡**。”

- web服务器:

	负责处理和响应用户请求，一般也称为http服务器，如 Apache、IIS、Nginx

- 应用服务器：
	存放和运行系统程序的服务器，负责处理程序中的业务逻辑，如 Tomcat、Weblogic、Jboss（现在大多数应用服务器也包含了web服务器的功能）

总结：

- 一种轻量级的web服务器
- 设计思想是事件驱动的异步非阻塞处理（类node.js）
- 占用内存少、启动速度快、并发能力强
- 使用C语言开发
- 扩展性好，第三方插件非常多
- 在互联网项目中广泛应用

## 安装（linux）

```bash
apt-get install nginx
```

## 使用

启动 Nginx：

```bash
nginx
```

停止 Nginx：

```bash
nginx -s stop
```

热重启 Nginx：

```bash
nginx -s reload
```

强制停止 Nginx：

```bash
pkill -9 nginx
```

## 配置文件

常用的几个文件路径：

1. `/usr/local/etc/nginx/nginx.conf` （nginx配置文件路径）
2. `/usr/local/var/www` （nginx服务器默认的根目录）
3. `/usr/local/Cellar/nginx/1.17.9` （nginx的安装路径）
4. `/usr/local/var/log/nginx/error.log` (nginx默认的日志路径)

