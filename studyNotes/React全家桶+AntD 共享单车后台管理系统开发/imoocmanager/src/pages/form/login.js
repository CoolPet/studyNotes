import React from "react"
import {
  Card,
  Form, 
  Input, 
  Button,
  message,
  Icon,
  Checkbox
} from "antd"

const FormItem = Form.Item
class FormLogin extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form
    return(
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input
                placeholder="请输入用户名"
                autoComplete="username"
              />
            </FormItem>
            <FormItem >
              <Input
                type="password"
                placeholder="请输入密码"
                autoComplete="current-password"
              />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form style={{width: 300}} onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator("userName", {
                  initialValue: "",
                  rules: [
                    {
                      required: true,
                      message: "用户名不能为空"
                    },{
                      min: 5,
                      max: 10,
                      message: "长度不在范围内"
                    },{
                      pattern: /^\w+$/g,
                      message: "用户名必须为字母或者数字"
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名"
                    prefix={<Icon type="user"/>}
                    autoComplete="username"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator("password", {
                  initialValue: "",
                  rules: [
                    {
                      required: true,
                      message: "密码不能为空"
                    }
                  ]
                })(
                  <Input
                    type="password"
                    placeholder="请输入密码"
                    prefix={<Icon type="lock"/>}
                    autoComplete="current-password"
                  />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(
                  <Checkbox>记住密码</Checkbox>
                )
              }
              <a href="/#/admin/home" style={{float: "right"}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" style={{width: 300}}>
                登录
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }

  handleSubmit= () => {
    // getFieldsValue()获取表单中所填写的所有的值
    // validateFields()校验表单中是否和规则相符
    let userInfo = this.props.form.getFieldsValue()
    this.props.form.validateFields((err) => {
      if(!err){
        message.success(`${userInfo.userName}恭喜你,你通过本次表单组件学习,当前密码为${userInfo.password}`)
      }
    })
  }
}

export default Form.create()(FormLogin)