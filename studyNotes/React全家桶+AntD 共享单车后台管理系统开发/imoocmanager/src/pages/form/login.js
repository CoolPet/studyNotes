import React from "react"
import {
  Card,
  Form, 
  Input, 
  Button
} from "antd"

class Login extends React.Component{
  render(){
    return(
      <div>
        <Card title="登录行内表单">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Form.Item>
              <Input
                placeholder="请输入用户名"
              />
            </Form.Item>
            <Form.Item >
              <Input
                type="password"
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录水平表单"></Card>
      </div>
    )
  }
}

export default Login