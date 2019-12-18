import React from "react"
import {
  Card,
  Button,
  notification 
} from "antd"
import "./index.less"

class Notification extends React.Component{
  state = {
    placementState: "topRight"
  }

  render(){
    const { placementState } = this.state
    return(
      <div>
        <Card title="通知提醒框">
          <Button type="primary" onClick={() => this.openNotification("success", placementState)}>
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info", placementState)}>
            Info
          </Button>
          <Button type="primary" onClick={() => this.openNotification("warning", placementState)}>
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification("error", placementState)}>
            Error
          </Button>
        </Card>
        <Card title="通知提醒框-方向控制">
          <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>
            Success-TopLeft
          </Button>
          <Button type="primary" onClick={() => this.openNotification('info', 'topRight')}>
            Info-TopRight
          </Button>
          <Button type="primary" onClick={() => this.openNotification('warning', 'bottomLeft')}>
            Warning-BottomLeft
          </Button>
          <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>
            Error-BottomRight
          </Button>
        </Card>
      </div>
    )
  }

  openNotification = (type, placement) => {
    const placementState = placement? placement : this.state.placementState
    notification[type]({
      message: '发工资了',
      description:'上月考勤22天， 迟到12天，实发工资250，请笑纳',
      placement: placementState
    })
    this.setState({
      placementState
    })
  }
}

export default Notification