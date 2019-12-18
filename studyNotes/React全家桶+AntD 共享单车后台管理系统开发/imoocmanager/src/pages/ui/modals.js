import React from "react"
import { 
  Card, 
  Modal, 
  Button 
} from "antd"
import "./index.less"

const { confirm } = Modal

class Modals extends React.Component{
  state = {
    openVisible: false,
    customVisible: false,
    topVisible: false,
    centerVisible: false
  }

  render(){
    const { openVisible, customVisible, topVisible, centerVisible } = this.state
    return(
      <div>
        <Card title="基础模态框">
          <Button type="primary" onClick={this.openShowModal}>Open</Button>
          <Button type="primary" onClick={this.customShowModel}>自定义页脚</Button>
          <Button type="primary" onClick={this.topShowModel}>顶部20px弹框</Button>
          <Button type="primary" onClick={this.centerShowModel}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框">
          <Button type="primary" onClick={this.confirmShowModal}>Confirm</Button>
          <Button type="primary" onClick={this.infoShowModal}>Info</Button>
          <Button type="primary" onClick={this.successShowModal}>Success</Button>
          <Button type="primary" onClick={this.errorShowModal}>Error</Button>
          <Button type="primary" onClick={this.warningShowModal}>Warning</Button>
        </Card>
        {
          // Open 弹框
        }
        <Modal title="React"
          visible={openVisible}
          onOk={this.openHandleOk}
          onCancel={this.openHandleCancel}
        >
          <p>欢迎学习慕课新推出的 React 高级课程</p>
        </Modal>
        {
          // 自定义页脚
        }
        <Modal title="React"
          visible={customVisible}
          onOk={this.customHandleOk}
          onCancel={this.customHandleCancel}
          okText="确认"
          cancelText="取消"
        >
          <p>欢迎学习慕课新推出的 React 高级课程</p>
        </Modal>
        {
          // 顶部20px弹框
        }
        <Modal title="React"
          visible={topVisible}
          style={{ top: 20 }}
          onOk={this.topHandleOk}
          onCancel={this.topHandleCancel}
        >
          <p>欢迎学习慕课新推出的 React 高级课程</p>
        </Modal>
        {
          // 水平垂直居中
        }
        <Modal title="React"
          visible={centerVisible}
          centered
          onOk={this.centerHandleOk}
          onCancel={this.centerHandleCancel}
        >
          <p>欢迎学习慕课新推出的 React 高级课程</p>
        </Modal>
      </div>
    )
  }

  // Open 弹框
  openShowModal = () =>{
    this.setState({
      openVisible: true
    })
  }
  openHandleOk = () =>{
    this.setState({
      openVisible: false
    })
  }
  openHandleCancel = () =>{
    this.setState({
      openVisible: false
    })
  }

  // 自定义页脚
  customShowModel = () =>{
    this.setState({
      customVisible: true
    })
  }
  customHandleOk = () =>{
    this.setState({
      customVisible: false
    })
  }
  customHandleCancel = () =>{
    this.setState({
      customVisible: false
    })
  }

  // 顶部20px弹框
  topShowModel = () =>{
    this.setState({
      topVisible: true
    })
  }
  topHandleOk = () =>{
    this.setState({
      topVisible: false
    })
  }
  topHandleCancel = () =>{
    this.setState({
      topVisible: false
    })
  }

  // 水平垂直居中
  centerShowModel = () =>{
    this.setState({
      centerVisible: true
    })
  }
  centerHandleOk = () =>{
    this.setState({
      centerVisible: false
    })
  }
  centerHandleCancel = () =>{
    this.setState({
      centerVisible: false
    })
  }

  // Confirm
  confirmShowModal(){
    confirm({
      title: '确认?',
      content: '你确定你学会React了吗？',
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  // Info
  infoShowModal(){
    Modal.info({
      title: '确认?',
      content: '你确定你学会React了吗？',
      onOk() {
        console.log("Info")
      }
    })
  }

  // Success
  successShowModal(){
    Modal.success({
      title: '确认?',
      content: '你确定你学会React了吗？',
      onOk() {
        console.log("Success")
      }
    })
  }

  // Error
  errorShowModal(){
    Modal.error({
      title: '确认?',
      content: '你确定你学会React了吗？',
      onOk() {
        console.log("Error")
      }
    })
  }

  // Warning
  warningShowModal(){
    Modal.warning({
      title: '确认?',
      content: '你确定你学会React了吗？',
      onOk() {
        console.log("Warning")
      }
    })
  }
}

export default Modals