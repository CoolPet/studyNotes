import React from "react"
import { Row, Col } from "antd"
import "./index.less"

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎,{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="data">2019.12.16</span>
            <span className="weather-detail">晴转多云</span>
          </Col>
        </Row>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.setState({
      userName: "河畔一角"
    })
    setInterval(() => {
      new Date()
    }, 1000)
  }
}

export default Header