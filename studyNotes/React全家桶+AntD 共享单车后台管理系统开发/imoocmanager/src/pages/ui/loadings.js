import React from "react"
import {
  Card,
  Spin,
  Icon,
  Alert
} from "antd"
import "./index.less"

class Loading extends React.Component{
  render(){
    return(
      <div>
        <Card title="Spin用法">
          <Spin className="spin" size="small" />
          <Spin className="spin" />
          <Spin className="spin" size="large" />
          <Spin className="spin" indicator={(
            <Icon type="loading" style={{ fontSize: 24 }} spin />
          )}>
          </Spin>
          <Spin className="spin" indicator={(
            <Icon type="loading" style={{ fontSize: 24 }} spin />
          )}>
          </Spin>
        </Card>
        <Card title="内容遮罩">
          <Spin spinning={false}>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程！"
            />
          </Spin>
          <Spin>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程！"
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎来到React高级实战课程！"
            />
          </Spin>
          <Spin indicator={(
            <Icon type="loading" style={{ fontSize: 24 }} spin />
          )}>
            <Alert
              message="React"
              description="欢迎来到React高级实战课程！"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loading