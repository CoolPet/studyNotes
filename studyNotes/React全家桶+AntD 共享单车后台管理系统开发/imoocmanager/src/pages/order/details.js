import React from "react"
import { 
  Card, 
  Button 
} from "antd"
import "./detail.less"
import axios from "../../axios"

class Details extends React.Component{
  state = {
    orderInfo: {}
  }

  render(){
    const { orderInfo } = this.state
    return(
      <div>
        <Card>
          <Button type="primary">原始轨迹</Button>
          <div id="orderDetailMap" className="order-map"></div>
          <div className="detail-items">
            <div className="item-title">基础信息</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">用车模式</div>
                <div className="detail-form-content">
                  {orderInfo.mode === 1 ? "服务区" : "停车点" }
                </div>
              </li>
              <li>
                <div className="detail-form-left">订单编号</div>
                <div className="detail-form-content">{orderInfo.order_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">车辆编号</div>
                <div className="detail-form-content">{orderInfo.bike_sn}</div>
              </li>
              <li>
                <div className="detail-form-left">用户姓名</div>
                <div className="detail-form-content">{orderInfo.user_name}</div>
              </li>
              <li>
                <div className="detail-form-left">手机号码</div>
                <div className="detail-form-content">{orderInfo.mobile}</div>
              </li>
            </ul>
          </div>
          <div className="detail-items">
            <div className="item-title">行驶轨迹</div>
            <ul className="detail-form">
              <li>
                <div className="detail-form-left">行程起点</div>
                <div className="detail-form-content">{orderInfo.start_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行程终点</div>
                <div className="detail-form-content">{orderInfo.end_location}</div>
              </li>
              <li>
                <div className="detail-form-left">行驶里程</div>
                <div className="detail-form-content">
                  {parseInt(orderInfo.distance) / 1000}公里
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    const orderId = this.props.match.params.orderId
    this.requestOrder(orderId)
  }

  requestOrder = (orderId) =>{
    axios.ajax({
      url: "/order/detail",
      data:{
        params:{
          orderId: orderId
        }
      }
    }).then((res) => {
      this.setState({
        orderInfo: res
      })
      this.renderMap(res)
    })
  }

  // 定义百度地图
  renderMap = (result) => {
    this.map = new window.BMap.Map("orderDetailMap")
    // 添加地图控件
    this.addMapControl()
    // 调用路线图绘制方法
    this.drawBikeRoute(result.position_list)
    // 调用绘制服务区方法
    this.drawServiceArea(result.area)
  }

  // 添加地图控件
  // 使用 addControl() 方法向地图添加控件
  addMapControl = () => {
    let map = this.map
    // 比例尺,显示与现实的比例数
    map.addControl(new window.BMap.ScaleControl({
      anchor: window.BMAP_ANCHOR_TOP_LEFT
    }))
    // 平移缩放控件,显示缩放比例
    map.addControl(new window.BMap.NavigationControl({
      type: window.BMAP_NAVIGATION_CONTROL_LARGE
    }))
    // 版权
    map.addControl(new window.BMap.CopyrightControl())
    // 地图类型,地图,卫星,三维
    map.addControl(new window.BMap.MapTypeControl())
    // 缩略地图,可折叠的缩略地图
    map.addControl(new window.BMap.OverviewMapControl())
    // 定位,获取当前位置
    // map.addControl(new window.BMap.GeolocationControl({
    //   anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT
    // }))
  }

  // 绘制用户的路线图
  drawBikeRoute = (positionList) => {
    let map = this.map
    let startPoint = ""
    let endPoint = ""
    if(positionList.length > 0){
      // 起始位置的坐标数组
      let first = positionList[0]
      // 终点的坐标数组
      let last = positionList[positionList.length - 1]
      // 获取开始位置的坐标点
      startPoint = new window.BMap.Point(first.lon, first.lat)
      // 设置自定义起点图标
      let startIcon = new window.BMap.Icon(
        "/assets/start_point.png", 
        // Size,第一个参数宽度,第二个参数高度
        new window.BMap.Size(36, 42), 
        {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(36, 42)
        }
      )
      // Marker 创建点,第一个必填参数,坐标点,第二个可选参数,图标样式
      let startMarker = new window.BMap.Marker(startPoint, {
        icon: startIcon
      })
      // addOverlay 添加覆盖物,起点
      map.addOverlay(startMarker)

      // 获取终点位置的坐标点
      endPoint = new window.BMap.Point(last.lon, last.lat)
      // 设置自定义终点图标
      let endIcon = new window.BMap.Icon(
        "/assets/end_point.png", 
        // Size,第一个参数宽度,第二个参数高度
        new window.BMap.Size(36, 42), 
        {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(36, 42)
        }
      )
      // Marker 创建点,第一个必填参数,坐标点,第二个可选参数,图标样式
      let endMarker = new window.BMap.Marker(endPoint, {
        icon: endIcon
      })
      // addOverlay 添加覆盖物,终点
      map.addOverlay(endMarker)

      // 连接路线图
      // 将所有坐标转换为百度地图的坐标数组
      let trackPoint = []
      positionList.map(item => {
        return trackPoint.push(new window.BMap.Point(item.lon, item.lat))
      })
      // 创建折线,将坐标点进行连接
      let polyline = new window.BMap.Polyline(trackPoint, {
        strokeColor: "#1869ad", 
        strokeWeight: 3, 
        strokeOpacity: 1
      })
      // 增加折线
      map.addOverlay(polyline)
      // 创建地图,第一个参数可以是根据之前创建好的一个点为中心,创建出地图,也可以根据城市地区的中文名称创建地图,第二个参数是地图缩放级别
      map.centerAndZoom(endPoint, 11)
    }
  }

  // 绘制服务区
  drawServiceArea = (area) => {
    let map = this.map
    if(area.length > 0){
      // 将所有坐标转换为百度地图的坐标数组
      let areaPoint = []
      area.map(item => {
        return areaPoint.push(new window.BMap.Point(item.lon, item.lat))
      })
      // 创建多边形,将坐标点进行连接
      let polygon = new window.BMap.Polygon(areaPoint, {
        strokeColor: "#ce0000", 
        strokeWeight: 4,
        strokeOpacity: 1,
        fillColor:"#ff8605",
        fillOpacity: .5 
      })
      // 增加多边形
      map.addOverlay(polygon)
    }
  }
}

export default Details