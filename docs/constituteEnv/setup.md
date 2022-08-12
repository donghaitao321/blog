# 常用软件环境配置

## 格式校验工具

### 前端

#### Prettier

1. 安装插件 Prettier  
   在应用商店搜索
   <img src="_media/Prettier.png" width="800px" height="200px" alt="Prettier" />

2. 配置默认格式化工具  
   打开快速搜索界面(ctrl + ,)，搜索 editor.defaultFormatter，选择 Prettier
   <img src="_media/editor.defaultFormatter.png" width="800px" height="200px" alt="Prettier" />

3. 本地格式化方案设置  
   打开快速搜索界面，搜素 Format Document ，配置文件(参考)也可以打开快速搜索界面，搜索 editor.formatOnSave，选择保存时自动格式化
   <img src="_media/editor.formatOnSave.png" width="800px" height="200px" alt="Prettier" />

#### Git中集成
原理：使用lint-stated,在pre-commit阶段，对修改过的代码进行格式校验并调整。

**安装：**
```
确认prettier已安装
npm install -D prettier

npx mrm@2 lint-staged
```
**配置：**
创建```.prettierrc```文件，放在项目根目录  
```
{
  "tabWidth": 2,
  "printWidth": 120,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "bracketSameLine": true,
  "htmlWhitespaceSensitivity": "ignore",
  "quoteProps": "as-needed"
}
```

#### 常用命令
```--config .prettierrc.js``` 意思是使用```.prettierrc.js```的配置来格式化文件
```--write``` 意思是写入权限

```
格式化单个文件
prettier --config .prettierrc.js --write ./a/b.js

格式化某文件夹下某类文件
prettier --config .prettierrc.js --write ./a/*.js

格式化多个文件夹下的某类型文件
prettier --config .prettierrc.js --write ./a/*.js' './b/*.css

格式化某类文件
prettier --config .prettierrc.js --write ./**/**/*.js

格式化多种类型文件
prettier --config .prettierrc.js --write ./**/**/*.{js,css,vue}

```

未在全局安装prettier，用npx
```
npx prettier --write ./
```

#### 常见问题
1. 找不到文件：给文件地址加引号。
```
prettier --config .prettierrc.js --write './a/b.js'
```
2. No parser could be inferred for file

.prettierrc配置中的overrides作用是指定A类文件使用B类文件作为分析器。
```js
  overrides: [
    {
      files: ['*.jsx'],
      options: {
        parser: 'react',
      },
    },
  ],
  ```

参考：

[CSDN](https://blog.csdn.net/ganyingxie123456/article/details/105957586?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-105957586-blog-108685176.pc_relevant_multi_platform_whitelistv1_exp2&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-105957586-blog-108685176.pc_relevant_multi_platform_whitelistv1_exp2&utm_relevant_index=1)

[官网](https://prettier.io/docs/en/index.html)
[Prettier + ESLint](https://juejin.cn/post/7008013389331070984#heading-2)
