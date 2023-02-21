# Docker

 ## 安装Docker

```bash
#参考链接https://docs.docker.com/engine/install/ubuntu/
#1
sudo apt-get update
#2
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
#3
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
#4
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
#5
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
#6 加权限
sudo chmod a+r+w ///var/run/docker.sock
#7 替换daemon,下载下面的daemon.json附件
sudo cp ~/Downloads/daemon.json /etc/docker
#8 重启docker服务
service docker restart
#9 测试
docker run hello-world
```

## 拉取镜像

```bash

#1
docker pull 10.10.80.28:5000/tsari-ad
# 如果报错HTTPS啥的,请修改/etc/docker/daemon.json文件
sudo vim /etc/docker/daemon.json
{
  "registry-mirrors": ["https://registry.docker-cn.com"],
  "insecure-registries": ["10.10.80.28:5000"]
}
#2 重启docker服务
systemctl restart docker.service
docker pull 10.10.80.28:5000/tsari-ad
```

## 上传镜像

```bash
docker tag source_image target_image
docker push target_image
 # 示例
docker tag local_image_name 10.10.80.28:5000/remote_image_name
docker push 10.10.80.28:5000/remote_image_name
```

## 启动镜像

```bash

# 本地运行时需先添加master
sudo vim /etc/hosts
# 在localhost之后添加master
127.0.0.1 localhost master
# 启动
docker run -it -d --net=host --hostname='master' --name $1 -v $2:$3 $4
# $1 container的名字，任意
# $2:$3 本地目录:容器目录，可以理解容器和本机数据交换的共享空间
# $4 镜像名字，见下例
docker run -it -d --net=host --hostname="master" --name zhangyihuan -v /home/znqc/exchange:/root/exchange 10.10.80.28:5000/tsari-ad
# 启动的容器会在后台运行，可通过docker ps查看
# 进入容器,可通过多个终端开启多个容器bash窗口
docker exec -it $1 bash
# 工程的source code在/tsari-ad
cd /tsari-ad
catkin build
source devel/setup.bash
roslaunch tsari_ad_bringup bringup.launch
# 另起一个本地终端
rostopic list #能正常看到topic即可，后面rviz只需要运行在本地机器上就行
```

## docker-compose配置

```bash

# 运行以下命令以下载 Docker Compose 的当前稳定版本：
$ sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
# 将可执行权限应用于二进制文件：
$ sudo chmod +x /usr/local/bin/docker-compose
# 创建软链：
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
# 测试是否安装成功：
$ docker-compose --version
```

## 本地vscode进入远程主机内docker container的简单指南：

**准备：**

vscode插件：

- [docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

- [remote-containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

操作说明：

```bash
# 完成本地与远程主机之间的密钥登陆(ref.2)
ssh-keygen # skip if you already have keys
ssh-copy-id user@host # copy key to remote host
# 在本地创建远程主机的docker context
docker context create my-remote-docker-machine --docker "host=ssh://username@host[:port]" # add port if ssh use non default 22
```

Use the **Command Palette** (⇧⌘P) to issue the "**Docker Context: Use"** command to activate the Docker context pointing to the remote machine.
Use the **Command Palette** (⇧⌘P) to issue the **"remote containers: Attach To Running Container".**

参考：

1. https://code.visualstudio.com/docs/containers/ssh
2. http://www.ruanyifeng.com/blog/2011/12/ssh_remote_login.html

## 远程docker服务器镜像查看

```bash

ssh $user@10.10.80.28
# 查看registry中的镜像列表
curl http://localhost:5000/v2/_catalog
# 查看images版本
curl http://localhost:5000/v2/$image_name/tags/list
# 示例
curl http://localhost:5000/v2/tsari-ad/tags/list
```

