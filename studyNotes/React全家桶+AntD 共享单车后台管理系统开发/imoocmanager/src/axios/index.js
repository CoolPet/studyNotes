import axios from "axios"
import { Modal } from "antd"

export default class Axios{
  static ajax(options){
    let baseURL = "https://www.fastmock.site/mock/756fffdb95ba2b7df109c2ae429b872b/mockapi"
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL,
        timeout: 5000,
        params: (options.data && options.data.params) || ""
      }).then((response) => {
        if(response.status === 200){
          if(response.data.code === 0){
            resolve(response.data.result.list)
          }else{
            Modal.info({
              title: "提示",
              content: response.data.desc
            })
          }
        }else{
          reject(response.data)
        }
      })
    })
  }
}