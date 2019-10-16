// 1.使用 commonJS 的模块化规范
const {add, mul} = require("./js/mathUtils.js")

console.log(add(20, 30))
console.log(mul(20, 30))

// 2.使用 ES6 的模块化的规范
import * as info from "./js/info.js"

console.log(info.name, info.age, info.height)

// 3.依赖 css 文件
require("./css/normal.css")

// 4.依赖 less 文件
require("./css/special.less")

// 5.使用 Vue 进行开发
import Vue from "vue"
import App from "./vue/App.vue"

const vm = new Vue({
    el: "#app",
    template:"<App/>",
    components:{
        App
    }
})