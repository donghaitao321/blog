# Git 技术总结

参考资料：

[菜鸟教程](https://www.runoob.com/git/git-workflow.html)

[博客](https://www.liaoxuefeng.com/wiki/896043488029600/896067008724000)

## 背景

作用：版本控制

类型：

**集中式的版本控制系统**:

![img](https://git-scm.com/figures/18333fig0102-tn.png)

**分布式版本控制系统**:

![img](https://git-scm.com/figures/18333fig0103-tn.png)

原理：Git 中所有数据在存储前都计算**校验和**，然后以校验和来引用。 这意味着不可能在 Git 不知情时更改任何文件内容或目录内容。 这个功能建构在 Git 底层，是构成 Git 哲学不可或缺的部分。 若你在传送过程中丢失信息或损坏文件，Git 就能发现。当你一个项目到本地或创建一个 git 项目，项目目录下会有一个隐藏的 **`.git`** 子目录。这个目录是 git 用来跟踪管理版本库的。

历史：Linux内核开源社区在BitKeeper上管理和维护，2005年，这厮说要收钱才给使用了。

Linus Torvalds：自己搞个。

![](https://tse2-mm.cn.bing.net/th/id/OIP-C.Xb9dWN-zQqoXHva-SNkwsQHaEG?pid=ImgDet&rs=1)

## 安装

**Ubuntu**

```
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
$ apt-get install git
$ git --version
git version 1.8.1.2
```

## 配置

```
git config --global user.name "Dong"
git config --global user.email xxx@xxx.com
git config --global core.editor vim
git config --list
```

**.gitignore**: 会自动被 git 所忽略，不纳入版本控制。



## [添加远程库]([Git 远程仓库(Github) | 菜鸟教程 (runoob.com)](https://www.runoob.com/git/git-remote-repo.html))

```
git remote add [shortname] [url]
```

Git 支持三种协议：HTTPS / SSH / GIT

而 Github 上支持 HTTPS 和 SSH。

HTTPS 这种方式要求你每次 push 时都要输入用户名、密码，有些繁琐。

而 SSH 要求你本地生成证书，然后在你的 Github 账户中注册。第一次配置麻烦是麻烦了点，但是以后就免去了每次 push 需要输入用户名、密码的繁琐。

生成 SSH Key：

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

之后会要求确认路径和输入密码，一般一路回车就行。

成功的话会在 **~/** 下生成 **.ssh** 文件夹，进去，打开 **id_rsa.pub**，复制里面的 **key**。

回到 github 上，进入 Account => Settings => SSH and GPG keys =>New SSH key

验证：

```
$ ssh -T git@github.com
The authenticity of host 'github.com (52.74.223.119)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes                   # 输入 yes
Warning: Permanently added 'github.com,52.74.223.119' (RSA) to the list of known hosts.
Hi tianqixin! You've successfully authenticated, but GitHub does not provide shell access. # 成功信息
```



## 基本概念

### 文件状态

在 GIt 中，你的文件可能会处于三种状态之一：

- **已修改（modified）**

  已修改表示修改了文件，但还没保存到数据库中。

- **已暂存（staged）**

  已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。

- **已提交（committed）**

  已提交表示数据已经安全的保存在本地数据库中。
  
  

### 工作区域

与文件状态对应的，不同状态的文件在 Git 中处于不同的工作区域。

- **工作区（working）**

  当你 `git clone` 一个项目到本地，相当于在本地克隆了项目的一个副本。

  工作区是对项目的某个版本独立提取出来的内容。 这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。

- **暂存区（staging）**

  暂存区是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 有时候也被称作`‘索引’'，不过一般说法还是叫暂存区。

- **本地仓库（local）**

  提交更新，找到暂存区域的文件，将快照永久性存储到 Git 本地仓库。

- **远程仓库（remote）**

  以上几个工作区都是在本地。为了让别人可以看到你的修改，你需要将你的更新推送到远程仓库。

![img](https://www.runoob.com/wp-content/uploads/2015/02/1352126739_7909.jpg)

- **index**: 暂存区（stage/index）
- **master**: master 分支所代表的目录树
- **HEAD**: 指向 master 分支的一个"游标"
- **objects**: Git 的对象库 (实际位于 ".git/objects" 目录下，里面包含了创建的各种对象及内容)
- `git add`: 暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的ID被记录在暂存区的文件索引中。
- `git commit`: 暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。
- `git reset HEAD`: 暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。
- `git rm --cached <file>`: 直接从暂存区删除文件，工作区则不做出改变。
- `git checkout .` 或者 `git checkout -- <file>`: 会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区中的改动。
- `git checkout HEAD `. 或者 `git checkout HEAD <file>` : 会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。



## 基本操作

![img](https://www.runoob.com/wp-content/uploads/2015/02/git-command.jpg)

| `命令`    | 说明                          | 参数 |
| ------------ | ---------------------------------------- | ------------ |
| **`git add`** | 添加文件到仓库                           | . ~ [file1] ~ [dir] |
| **`git commit`** | 提交暂存区到本地仓库。                   | -m [message] ~ -a |
| **`git push`** | 上传远程代码并合并 | -f |
| **`git clone`** | 拷贝一份远程仓库，也就是下载一个项目。 |  |
| **`git fetch`** | 从远程获取代码库   |  |
| **`checkout`** | 切换分支 |  |
| **`git pull`** | 下载远程代码并合并 |  |
| `git init`  | 初始化仓库                             |  |
| `git status` | 查看仓库当前的状态，显示有变更的文件。   |  |
| `git diff`   | 比较文件的不同，即暂存区和工作区的差异。 |  |
| `git reset`  | 回退版本。                               | --hard HEAD^ |
| `git rm`     | 删除工作区文件。                         |  |
| `git mv`     | 移动或重命名工作区文件。                 |  |
| `git log`          | 查看历史提交记录                     | -p <file> |
| `git blame <file>` | 以列表形式查看指定文件的历史修改记录 |  |
| `git remote` | 远程仓库操作       |  |

 **分支管理**

创建分支命令：

```
# 列出所有的分支
$ git branch

# 列出所有的远端分支
$ git branch -r

# 基于当前分支创建新分支
$ git branch <new-branch>

# 基于远程分支创建新的可追溯的分支
$ git branch --track <new-branch> <remote-branch>

# 删除本地分支
$ git branch -d <branch>

# 强制删除本地分支，将会丢失未合并的修改
$ git branch -D <branch>

# 切换分支命令:
$ git checkout (branchname)
$ git switch (branchname)

# 创建并切换到新分支
$ git checkout -b <branch>
$ git switch -c <branch>

# 合并分支命令:
$ git merge (branchname)
```

暂时将未提交的变化移除，稍后再移入：草稿

```
# 1. 将修改作为当前分支的草稿保存
$ git stash

# 2. 查看草稿列表
$ git stash list
stash@{0}: WIP on master: 6fae349 :memo: Writing docs.

# 3.1 删除草稿
$ git stash drop stash@{0}

# 3.2 读取草稿
$ git stash apply stash@{0}
$ git stash pop  读取最新草稿
```

更改最近的提交消息：

```
`git commit --amend` 
```

在 Git 中，提交消息的文本是提交的一部分。 更改提交消息将更改提交 ID ， 实际上，您是创建一个新提交以替换旧提交。

**撤销本地修改**

```
移除缓存区的所有文件（i.e. 撤销上次git add）
$ git reset HEAD

将HEAD重置到上一次提交的版本，并将之后的修改标记为未添加到缓存区的修改
$ git reset <commit>

将HEAD重置到上一次提交的版本，并保留未提交的本地修改
$ git reset --keep <commit>

放弃工作目录下的所有修改
$ git reset --hard HEAD

将HEAD重置到指定的版本，并抛弃该版本之后的所有修改
$ git reset --hard <commit-hash>

用远端分支强制覆盖本地分支
$ git reset --hard <remote/branch> e.g., upstream/master, origin/my-feature

放弃某个文件的所有本地修改
$ git checkout HEAD <file>
```

常用后悔药：

```
git reflog
```

记录你的每一次**`HEAD` 指向发生改变的时间列表**

**标签**

```
# 给当前版本打标签
$ git tag <tag-name>

# 给当前版本打标签并附加消息
$ git tag -a <tag-name>
```

**显示搜索内容**

```
# 从当前目录的所有文件中查找文本内容
$ git grep "Hello"

# 在某一版本中搜索文本
$ git grep "Hello" v2.5
```

**重置**

```
# 将当前HEAD版本重置到分支中，请勿重置已发布的提交
$ git rebase <branch>
```



## 总结

![img](https://upload-images.jianshu.io/upload_images/3101171-2044cc669d78eef9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## [常见问题](https://segmentfault.com/a/1190000023734704)：

1. 修改未提交或者暂存就想进行切换分支，合并等跨域操作。

2. 合并冲突问题：

![img](https://www.liaoxuefeng.com/files/attachments/919023000423040/0)

Git用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容。

把Git合并失败的文件手动编辑为我们希望的内容，再提交。

```
git add .
git commit -m "***"
```

用`git log --graph`命令可以看到分支合并图。

3. [rebese的使用](http://jartto.wang/2018/12/11/git-rebase/)：

   - 合并多个commit
   - 分支合并

   使用merge：

   ![img](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/git-rebase/git3.png)

   使用rebase：

   ![img](https://raw.githubusercontent.com/chenfengyanyu/my-web-accumulation/master/images/git-rebase/git5.png)


## Gitlab CI/CD
### Cache
目的  
缓存依赖，加速job时间。

用法  
全局或者job局部。局部会覆盖全局。

配置  
1. paths
使用基于项目的相对路径。

job局部例：
```
rspec:
  script: test
  cache:
    paths:
      - binaries/*.apk     - .config
```
在binaries 目录下以 .apk 结尾的所有文件以及 .config 文件会被缓存下来。
局部覆盖全局：
```
cache:
  paths:
    - my/files

rspec:
  script: test
  cache:
    paths:
      - binaries/
```

2. key
为每个 job 创建独立的 cache。使缓存互不影响。
结合 GitLab CI/CD 中预定义的参数使用。
```
比如，不同的分支采用不同的 cache，防止分支之间相互影响：
cache:
  key: ${CI_COMMIT_REF_SLUG}

比如每个分支的每个 job 使用不同的 cache :
cache:
  key: "$CI_JOB_NAME-$CI_COMMIT_REF_SLUG"

再比如每个分支的每个 job 使用不同的 stage：
cache:
  key: "$CI_JOB_STAGE-$CI_COMMIT_REF_SLUG"

比如不同的分支之间需要共享 cache，但是 pipeline 中的 job 之间的 cache 是相互独立的：
cache:
  key: ${CI_JOB_NAME}
```

3. policy
在默认情况下，如果有 cache 的配置，那么每个 job 会在开始执行前将对应路径的文件下载下来，并在任务结束前重新上传，不管文件是否有变化都会如此操作。pull-push 策略。

例：
```
rspec:
  stage: test
  cache:
    paths:
      - vendor/bundle
    policy: pull
  script:
    - bundle exec rspec ...
```
参考：
[Gitlab CI/CD 中的 Cache 机制](https://zhuanlan.zhihu.com/p/106971627)

##  配置多个git账号

1. 分别生成秘钥, （选择个性化名字，不要全回车）

```bash
ssh-keygen -t rsa -C "***@***.com"
```

2. 专用秘钥添加到网页。
3. 专用秘钥添加到高速缓存

```bash
ssh-add -k ~/.ssh/id_rsa_***
```

4. 修改配置文件```~/.ssh/config```

```
Host znqc.github.com
HostName 10.10.80.28
User Dong
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_company

Host donghaitao321.github.com
HostName github.com
User dong
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github
```

5. 配置局部信息

```bash
git config --local user.name ***
git config --local user.email ***@***.com
```

