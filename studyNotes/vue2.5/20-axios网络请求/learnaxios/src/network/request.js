import axios from "axios"
import { resolve } from "url";
import { rejects } from "assert";

// 1.方式一,使用看 main.js
// export function request(config, success, fail){
//   // 1.创建 axios 的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000/api/v1",
//     timeout: 5000
//   })

//   // 2.发送网络请求
//   instance(config)
//   .then(res => {
//     success(res)
//   })
//   .catch(err => {
//     fail(err)
//   })
// }

// 2.方式二,使用看 main.js
// export function request(config){
//   // 1.创建 axios 的实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000/api/v1",
//     timeout: 5000
//   })

//   // 2.发送网络请求
//   instance(config.baseConfig)
//   .then(res => {
//     config.success(res)
//   })
//   .catch(err => {
//     config.fail(err)
//   })
// }

// 3.方式三,使用看 main.js
// export function request(config){
//   return new Promise((resolve, reject) => {
//     // 1.创建 axios 的实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000/api/v1",
//       timeout: 5000
//     })

//     // 发送网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 4.方式四,使用看 main.js
export function request(config){
  // 1.创建 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/v1",
    timeout: 5000
  })

  // 2.axios 的拦截器
  // 请求拦截器
  instance.interceptors.request.use(config =>{
    console.log(config)
    return config
  },err =>{
    console.log(err)
  })
  // 响应拦截器
  instance.interceptors.response.use(config =>{
    console.log(config)
    return config
  },err =>{
    console.log(err)
  })

  // 3.发送网络请求
  return instance(config)
}