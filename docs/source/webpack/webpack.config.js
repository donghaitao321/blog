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
