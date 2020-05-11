var webpack = require("webpack");
var path = require("path");
var DIST_PATH = path.resolve(__dirname, '../dist');
const devMode = process.env.NODE_ENV === 'production'
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 入口JS路径
    // 指示Webpack应该使用哪个模块，来作为构建其内部依赖图的开始
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        // 编译输出的JS入路径 
        // 告诉Webpack在哪里输出它所创建的bundle，以及如何命名这些文件
        path: DIST_PATH,   // 创建的bundle生成到哪里  
        filename: 'js/[name].js', // 创建的bundle的名称
        publicPath: devMode ? './' : "/",
    },
    // 模块解析 
    module: {
    },
    // 插件 
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    // 开发服务器 
    devServer: {
        hot: true, // 热更新，无需手动刷新 contentBase: DIST_PATH, 
        // host: '0.0.0.0', // host地址
        contentBase: DIST_PATH,
        port: 8080, // 服务器端口 
        // historyApiFallback: true,// 该选项的作用所用404都连接到index.html 
        // proxy: {
        //     "/api": "http://localhost:3000" // 代理到后端的服务地址，会拦截所有以api开头的请求地址
        // }
    }
}