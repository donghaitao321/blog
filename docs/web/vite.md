# [VITE](https://cn.vitejs.dev/guide/dep-pre-bundling.html)
## 背景：
**问题点1：**  
JavaScript 并没有提供原生机制让开发者以模块化的方式进行开发。  
这也正是我们对 “打包” 这个概念熟悉的原因：使用工具抓取、处理并将我们的源码模块串联成可以在浏览器中运行的文件。

诸如 webpack、Rollup 和 Parcel 等工具的变迁，它们极大地改善了前端开发者的开发体验。  
Vite 旨在利用生态系统中的新进展解决上述问题：浏览器开始原生支持 ES 模块，且越来越多 JavaScript 工具使用编译型语言编写。  

**问题点2：**  
缓慢的服务器启动  
当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。  
Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间。

- ```依赖``` 大多为在开发时不会变动的纯 JavaScript。一些较大的依赖（例如有上百个模块的组件库）处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。

Vite 将会使用 esbuild 预构建依赖。esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。

- ```源码``` 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。同时，并不是所有的源码都需要同时被加载（例如基于路由拆分的代码模块）。

Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。

**问题点3：**  
缓慢的更新  
传统打包器，采用了 HMR 模式，其热更新速度会随着应用规模的增长而显著下降。

在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失活[1]（大多数时候只是模块本身），使得无论应用大小如何，HMR 始终能保持快速更新。
Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。

**打包原因**  
为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。
esbuild 快得惊人，但一些针对构建 应用 的重要功能仍然还在持续开发中。
Rollup 在应用打包方面更加成熟和灵活。

## 使用
创建项目：
```npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template react-ts
```
社区模板:
```
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

### 命令行界面
```json
{
  "scripts": {
    "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
    "build": "vite build", // 为生产环境构建产物
    "preview": "vite preview" // 本地预览生产构建产物
  }
}
```
可以指定额外的命令行选项，如 --port 或 --https  

## [设置jest](https://hung.dev/posts/jest-vite)




## PS：
### esm  
esm 是将 javascript 程序拆分成多个单独模块，并能按需导入的标准。和webpack，babel不同的是，esm 是 javascript 的标准功能，在浏览器端和 nodejs 中都已得到实现。使用 esm 的好处是浏览器可以最优化加载模块，比使用库更有效率

esm 标准通过import, export语法实现模块变量的导入和导出

esm 模块的特点

1. 存在模块作用域，顶层变量都定义在该作用域，外部不可见
2. 模块脚本自动采用严格模式
3. 模块顶层的this关键字返回undefined
4. esm 是编译时加载，也就是只有所有import的模块都加载完成，才会开始执行
5. 同一个模块如果加载多次，只会执行一次


