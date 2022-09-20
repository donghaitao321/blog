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