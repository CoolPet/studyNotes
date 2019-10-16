import Vue from 'vue'
import App from './App'

import axios from "axios"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 3.使用全局的 axios 和对应的配置在进行网络请求
axios.defaults.baseURL = "http://123.207.32.32:8000/api/v1"

// 1.axios 的基本使用
axios({
  url: "/home/data",
  // 选择请求方式 get/post
  methods: "get",
  // 专门针对 get 请求的参数拼接
  params:{
    type: "pop",
    page: 1
  }
}).then(res => {
  // console.log(res)
})

// 2.axios 发送并发请求
axios.all([axios({
  url: "/home/multidata"
}), axios({
  url: "/home/data",
  params:{
    type: "pop",
    page: 1
  }
})])
.then(results => {
  // console.log(results)
})

// 4.创建对应的 axios 的实例
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:8000/api/v1",
  timeout: 5000
})

instance1({
  url: "/home/multidata"
}).then(res => {
  // console.log(res)
})

// 5.封装 request 模块
import {request} from "./network/request"

// 1.方式一的使用
// request({
//   url: "/home/multidata"
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

// 2.方式二的使用
// request({
//   baseConfig: "/home/multidata",
//   success(res){
//     console.log(res)
//   },
//   fail(err){
//     console.log(err)
//   }
// })

// 3.方式三的使用
// request({
//   url: "home/multidata"
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// 4.方式四的使用
request({
  url: "home/multidata"
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})