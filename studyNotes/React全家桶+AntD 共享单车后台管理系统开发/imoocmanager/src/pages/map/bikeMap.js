import React from "react"
import {
  Card,
  Form
} from "antd"
import axios from "../../axios"
import BaseForm from "../../components/BaseForm"

class BikeMap extends React.Component{
  state = {}
  map = ""
  formList = [
    {
      type: "城市"
    },
    {
      type: "时间查询"
    },
    {
      type: "SELECT",
      label: "订单状态",
      field: "order_status",
      placeholder: "全部",
      initialValue: "0",
      width: 120,
      list: [
        {
          id: "0",
          name: "全部"
        },
        {
          id: "1",
          name: "进行中"
        },
        {
          id: "2",
          name: "行程结束"
        }
      ]
    }
  ]

  render(){
    const { total_count } = this.state
    return(
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
        </Card>
        <Card>
          <div>共{total_count}辆车</div>
          <div id="container" className="order-map"></div>
        </Card>
      </div>
    )
  }

  // 查询表单
  handleFilterSubmit = (filterParams) => {
    this.params = filterParams
    this.requestList()
  }

  // 请求数据
  requestList = () => {
    axios.ajax({
      url: "/map/bike_list",
      data:{
        params: this.params
      }
    }).then((res) => {
      this.setState({
        total_count: res.total_count
      })
      this.renderMap(res)
    })
  }

  UNSAFE_componentWillMount(){
    this.requestList()
  }

  // 渲染地图数据
  renderMap = (res) => {
    let list = res.route_list 
    this.map = new window.BMap.Map("container")
    let first = list[0].split(",")
    let startPoint = new window.BMap.Point(first[0], first[1])
    let last = list[list.length - 1].split(",")
    let endPoint = new window.BMap.Point(last[0], last[1])
    this.map.centerAndZoom(endPoint, 11)

    // 绘制地图起点
    let startPointIcon = new window.BMap.Icon(
      "/assets/start_point.png", 
      new window.BMap.Size(36, 42),
      {
        imageSize: new window.BMap.Size(36, 42)
      }
    )
    // 创建起点标注
    let startMarker = new window.BMap.Marker(startPoint, {
      icon: startPointIcon
    })
    this.map.addOver

    // 绘制地图终点
    let endPointIcon = new window.BMap.Icon(
      "/assets/end_point.png", 
      new window.BMap.Size(36, 42),
      {
        imageSize: new window.BMap.Size(36, 42)
      }
    )


  }
}

export default BikeMap