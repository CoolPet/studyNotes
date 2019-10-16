import {request} from "./index"

export function getHomeMultidata(){
  return request({
    url: "/home/multidata"
  })
}