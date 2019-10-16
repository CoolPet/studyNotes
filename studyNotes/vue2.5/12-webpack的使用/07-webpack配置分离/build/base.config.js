// 这里引用 nodeJS 中的 path 模块,此模块提供了一些用于处理文件路径的工具
const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
// const uglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output: {
        // path 模块中 resolve 为获取文件的绝对路径,用法为:path.resolve([from ...], to),将 to 解析为绝对路径,给定的路径是从右往左被处理的,后面每个 path 被依次解析,直到构造一个绝对路径.
        // __dirname 变量是获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, "../dist"),      // 这里需要动态获取路径,并且必须是绝对路径
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                // /\.css$/ 意思是为所有以 .css 为结尾的文件
                test: /\.css$/,
                // style-loader 将模块的导出作为样式添加到 DOM 中
                // css-loader 解析 CSS 文件后,使用 import 加载,并且返回 CSS 代码
                // webpack 使用多个 loader 时,是从右向左运用
                use: ["style-loader", "css-loader"]
            },{
                // /\.less$/ 意思是为所有以 .css 为结尾的文件
                test: /\.less$/,
                // style-loader 将模块的导出作为样式添加到 DOM 中
                // css-loader 解析 CSS 文件后,使用 import 加载,并且返回 CSS 代码
                // less-loader 加载和转译 less 文件
                // webpack 使用多个 loader 时,是从右向左运用
                use: [{
                    loader: "style-loader"
                },{
                    loader: "css-loader"
                },{
                    loader: "less-loader"
                }]
            },{
                // /\.(png|jpg|gif)$/ 意思是为所有以 .png、.jpg 和 .gif 为结尾的文件
                test: /\.(png|jpg|gif)$/,
                use:[{
                    loader: "url-loader",
                    options:{
                        // 当加载的图片,小于 limit 时,会将图片编译成 base64 字符串形式
                        // 当加载的图片,大于 limit 时,需要使用 file-loader 模块进行加载
                        limit: 29000,
                        name: "img/[name].[hash:8].[ext]"
                    }
                }]
            },{
                test: /\.m?js$/,
                // exclude: 排除
                // include: 包含
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ["es2015"]
                    }
                }
            },{
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    // 为.vue文件配置加载器，只支持原生js
    plugins: [
        new VueLoaderPlugin(),
        new webpack.BannerPlugin("最终版权归Black所有"),
        new htmlWebpackPlugin({
            template: "index.html"
        })
    ],
    resolve:{
        // alias: 别名
        alias:{
            "vue$": "vue/dist/vue.esm.js"
        }
    }
}