import React from "react"
import {
  Card,
  Form,
  Input,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker
} from "antd"
import moment from "moment"

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select

class FormReg extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol:{
        xs: 24,
        sm: 4
      },
      wrapperCol:{
        xs: 24,
        sm: 12
      }
    }
    return(
      <div>
        <Card title="注册表单">
          <Form {...formItemLayout}>
            <FormItem label="用户名">
              {
                getFieldDecorator("userName", {
                  initialValue: "",
                  rules: [
                    {
                      required: true,
                      message: "用户名不能为空"
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名"
                    autoComplete="username"
                  />
                )
              }
            </FormItem>
            <FormItem label="密码">
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
                  <Input placeholder="请输入密码"
                    type="password"
                    autoComplete="current-password"
                  />
                )
              }
            </FormItem>
            <FormItem label="性别">
              {
                getFieldDecorator("sex", {
                  initialValue: "1",
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄">
              {
                getFieldDecorator("age", {
                  initialValue: 3,
                })(
                  <InputNumber min={1} max={10}/>
                )
              }
            </FormItem>
            <FormItem label="当前状态">
              {
                getFieldDecorator("state", {
                  initialValue: "1"
                })(
                  <Select>
                    <Option value="1">咸鱼一条</Option>
                    <Option value="2">风华浪子</Option>
                    <Option value="3">北大才子一枚</Option>
                    <Option value="4">百度FE</Option>
                    <Option value="5">创业者</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好">
              {
                getFieldDecorator("interest", {
                  initialValue: ["1", "3"]
                })(
                  <Select mode="multiple">
                    <Option value="1">游泳</Option>
                    <Option value="2">打篮球</Option>
                    <Option value="3">踢足球</Option>
                    <Option value="4">跑步</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">骑行</Option>
                    <Option value="7">桌球</Option>
                    <Option value="8">麦霸</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚">
              {
                getFieldDecorator("isMarried", {
                  valuePropName: "checked",
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日">
              {
                getFieldDecorator("date", {
                  initialValue: moment("2019-12-19")
                })(
                  <DatePicker />
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormReg)