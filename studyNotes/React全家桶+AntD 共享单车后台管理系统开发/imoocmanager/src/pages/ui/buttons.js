import React from "react"
import { 
  Card, 
  Button, 
  Icon, 
  Radio 
} from "antd"
import "./index.less"

const ButtonGroup = Button.Group

class Buttons extends React.Component{
  state = {
    loading: true,
    value: "default"
  }

  render(){
    const { loading, value } = this.state
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
          <Button type="primary" onClick={this.handleOpenLoading}>打开</Button>
        </Card>
        <Card title="按钮组">
          <ButtonGroup className="button-group">
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
        <Card title="按钮尺寸">
          <Radio.Group onChange={this.onChange} value={value}>
            <Radio value={"small"}>小</Radio>
            <Radio value={"default"}>中</Radio>
            <Radio value={"large"}>大</Radio>
          </Radio.Group>
          <Button size={value} type="primary">Imooc</Button>
          <Button size={value}>Imooc</Button>
          <Button size={value} type="dashed">Imooc</Button>
          <Button size={value} type="danger">Imooc</Button>
        </Card>
      </div>
    )
  }

  handleCloseLoading = () =>{
    this.setState({
      loading: false
    })
  }

  handleOpenLoading = () =>{
    this.setState({
      loading: true
    })
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }
}

export default Buttons