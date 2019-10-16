// 这里引用 nodeJS 中的 path 模块,此模块提供了一些用于处理文件路径的工具
const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: {
        // path 模块中 resolve 为获取文件的绝对路径,用法为:path.resolve([from ...], to),将 to 解析为绝对路径,给定的路径是从右往左被处理的,后面每个 path 被依次解析,直到构造一个绝对路径.
        // __dirname 变量是获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, "dist"),      // 这里需要动态获取路径,并且必须是绝对路径
        filename: "bundle.js"
    }
}