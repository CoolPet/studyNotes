import React from "react"
import { Select } from "antd"
const { Option } = Select

export default {
  // 时间格式化
  formateDate(time){
    if(!time) return ""
    let date = new Date(time)
    let obj = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate(),
      H: date.getHours(),
      Mi: date.getMinutes(),
      S: date.getSeconds()
    }
    let strTime = obj.Y + '-' + this.supplement(obj.M) + '-' + this.supplement(obj.D) + " " + this.supplement(obj.H) + ':' + this.supplement(obj.Mi) + ':' + this.supplement(obj.S)
    return strTime
  },
  // 位数不足两位的补全 0
  supplement(nn){
    return nn = nn < 10 ? '0' + nn : nn;
  },
  // 分页
  pagination(data, callback){
    return {
      onChange:(current) => {
        callback(current)
      },
      current: data.page,
      pageSize: data.page_size,
      total: data.total_count,
      showTotal:() => {
        return `共${data.total_count}条`
      },
      showQuickJumper: true
    }
  },
  getOptionList(data){
    if(!data){
      return []
    }
    let options = []
    data.map((item) => {
      return options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options
  },
  updateSelectedItem(selectedRowKeys, selectedItem){
    this.setState({
      selectedRowKeys,
      selectedItem
    })
  }
}