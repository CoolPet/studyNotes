import React from "react"
import {
  Card,
  Button,
  message
} from "antd"
import "./index.less"

class Messages extends React.Component{
  render(){
    return(
      <div>
        <Card title="全局提示框">
          <Button type="primary" onClick={() => this.openMessage("success")}>Success</Button>
          <Button type="primary" onClick={() => this.openMessage("info")}>Info</Button>
          <Button type="primary" onClick={() => this.openMessage("warning")}>Warning</Button>
          <Button type="primary" onClick={() => this.openMessage("error")}>Error</Button>
          <Button type="primary" onClick={() => this.openMessage("loading")}>Loading</Button>
        </Card>
      </div>
    )
  }

  openMessage = (type) =>{
    message[type]("恭喜你，React课程晋级成功.")
  }
}

export default Messages