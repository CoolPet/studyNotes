import React from "react"
import Header from "./components/Header"
import { Row } from "antd"
import "./style/common.less"

class Common extends React.Component{
  render(){
    return(
      <div className="commonInfo">
        <Row className="simple-page">
          <Header menuType="second"/>
        </Row>
        <Row className="content">
          {this.props.children}
        </Row>
      </div>
    )
  }
}

export default Common