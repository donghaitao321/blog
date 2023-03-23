# Webpack

参考：[Webpack 入门教程](https://zxuqian.cn/videos/frontend/webpack-get-started-in-30-minutes/#%E4%BD%BF%E7%94%A8-webpack-loader)

## 依赖库

```json
//webpack
"webpack": "^5.76.3",
"webpack-cli": "^5.0.1",
//babel loader
"@babel/core": "^7.21.3",
"@babel/preset-env": "^7.20.2",
"babel-loader": "^9.1.2",
//css loader
"style-loader": "^3.3.2",
"css-loader": "^6.7.3",
// 自动生成HTML
"html-webpack-plugin": "^5.5.0",
// 打包代码压缩
"terser-webpack-plugin": "^5.3.7",
// 打包分析
"webpack-bundle-analyzer": "^4.8.0",
// 实时加载
"webpack-dev-server": "^4.13.1"
```

案例:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name][contenthash].js", //使用哈希名，防止浏览器缓存
    path: path.resolve(__dirname, "dist"),
  },
  // 代码压缩
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  devtool: "inline-source-map", //方便查看源码
  devServer: { static: "./dist" }, //server 从哪找打包好的文件
  //模块Loader
  module: {
    rules: [
      {
        // css Loader
        test: /\.css$/i, //正则匹配对象
        use: ["style-loader", "css-loader"],
      },
      {
        // 图片 webpack 原生的支持 Loader
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 资源类型
      },
      {
        //babel 兼容低版本浏览器
        test: /\.js$/,
        exclude: /node_modules/, //不转义相应代码
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    // 自动生成HTML
    new HtmlWebpackPlugin({ title: "Test_Webpack" }),
    // 代码分析
    new BundleAnalyzerPlugin(),
  ],
  // 文件路径别名
  // resolve: {
  //   alias: path.resolve(__dirname, "src/utils"),
  // },
};
```
