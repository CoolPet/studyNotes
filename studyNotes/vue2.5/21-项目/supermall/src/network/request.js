import axios from "axios"

export function request(config){
  // 1.创建 axios 的实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/v1",
    // timeout: 5000
  })

  // 2.axios 的拦截器
  // 请求拦截器
  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    return err
  })
  // 响应拦截器
  instance.interceptors.response.use(config =>{
    return config.data
  },err =>{
    return err
  })

  // 3.发送网络请求
  return instance(config)
}