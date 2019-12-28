import React from "react"
import { Row, Col } from "antd"
import "./index.less"
import Util from "../../utils/util"
import axios from "axios"

class Header extends React.Component{
  render(){
    const menuType = this.props.menuType
    const { userName, sysTime, weather_img, weather } = this.state
    return(
      <div className="header">
        <Row className="header-top">
          {
            menuType ? 
            <Col span={6} className="logoImg">
              <img src="/assets/logo-ant.svg" alt=""/>
              <span>IMooc 通用管理系统</span>
            </Col>: ""
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎,{userName}</span>
            <a>退出</a>
          </Col>
        </Row>
        {
          menuType ? "" : 
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              首页
            </Col>
            <Col span={20} className="weather">
              <span className="date">{sysTime}</span>
              <span className="weather-detail">
                <img src={"/assets/weather/" + weather_img + ".png"} alt=""/>
                {weather}
              </span>
            </Col>
          </Row>
        }
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.setState({
      userName: "Black&潴"
    })

    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)

    this.getWeatherAPIData()
  }

  getWeatherAPIData(){
    let city = "苏州"
    axios.get("https://www.tianqiapi.com/api/?version=v6&city="+ encodeURIComponent(city) +"&appid=86775272&appsecret=lHspRtk5?vue=1")
    .then((res) => {
      if(res.data.errcode === 100){
        return console.log(res.data.errmsg)
      }
      this.setState({
        weather: res.data.wea,
        weather_img: res.data.wea_img
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

export default Header