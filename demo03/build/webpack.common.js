const webpack = require('webpack');
const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist/'); // 声明/dist的路径 
module.exports = {

    // 入口JS路径 
    // 指示Webpack应该使用哪个模块，来作为构建其内部依赖图的开始 

    entry: path.resolve(__dirname, '../src/index.js'), // 编译输出的JS入口路径

    // 告诉Webpack在哪里输出它所创建的bundle，以及如何命名这些文件 
    output: {
        path: DIST_PATH, // 创建的bundle生成到哪里 
        filename: 'main.js', // 创建的bundle的名称 
    },
    // 模块解析 
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    // options: {
                    //     name(file) {
                    //         if (process.env.NODE_ENV === 'development') {
                    //             return '[path][name].[ext]';
                    //         }
                    //         return '[name].[ext]';
                    //     },
                    //     outputPath: 'images',
                    // }
                },
            ],
        },]
    },
    // 插件
    plugins: []

}