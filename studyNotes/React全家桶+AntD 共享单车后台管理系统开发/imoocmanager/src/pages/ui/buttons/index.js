import React from "react"
import { Card, Button, Icon } from "antd"
import "./index.less"

const ButtonGroup = Button.Group

class Buttons extends React.Component{
  state = {
    loading: true
  }

  render(){
    const { loading } = this.state
    return(
      <div>
        <Card title="基础按钮">
          <Button type="primary">Imooc</Button>
          <Button>Imooc</Button>
          <Button type="dashed">Imooc</Button>
          <Button type="danger">Imooc</Button>
          <Button disabled>Imooc</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading 按钮">
          <Button loading={loading} type="primary">确定</Button>
          <Button loading={loading} type="primary" shape="circle"></Button>
          <Button loading={loading}>点击加载</Button>
          <Button loading={loading} shape="circle"></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />
              返回
            </Button>
            <Button type="primary">
              前进
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
      </div>
    )
  }

  handleCloseLoading = () =>{
    this.setState({
      loading: false
    })
  }
}

export default Buttons