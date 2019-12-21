import axios from "axios"
import { Modal } from "antd"

export default class Axios{
  static ajax(options){
    let loading
    if(options.data && options.data.isShowLoading !== false){
      loading = document.getElementById("ajaxLoading")
      loading.style.display = "block"
    }
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
            loading.style.display = "none"
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