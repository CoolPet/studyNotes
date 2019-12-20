import React from "react"
import {
  Card,
  Form,
  Input,
  Radio,
  InputNumber,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload, 
  Icon,
  Checkbox,
  Button,
  message
} from "antd"
import moment from "moment"

const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select
const { TextArea } = Input

class FormReg extends React.Component{
  state = {
    imageUrl: ""
  }

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
    const offsetLayout = {
      wrapperCol:{
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 2,
      maxRows: 6
    }
    const { imageUrl } = this.state
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const deal = (
      <span style={{color: "#1890ff"}}>慕课协议</span>
    )
    return(
      <div>
        <Card title="注册表单">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
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
            <FormItem label="联系地址">
              {
                getFieldDecorator("address", {
                  initialValue: ""
                })(
                  <TextArea 
                    autoSize={rowObject}
                    placeholder="请输入你的详细地址"
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间">
              {
                getFieldDecorator("time", {
                  initialValue: moment("12:00:20", 'HH:mm:ss')
                })(
                  <TimePicker allowClear/>
                )
              }
            </FormItem>
            <FormItem label="头像">
              {
                getFieldDecorator("userImg",{
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                  rules:[
                    {
                      required: true,
                      message: "头像不能为空"
                    }
                  ]
                })(
                  <Upload 
                    listType="picture-card"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={this.handleChange}
                  >
                    { imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton }
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(
                  <Checkbox>我已阅读过{deal}</Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" htmlType="submit">注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ 
        loading: true 
      });
      return;
    }
    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }

  normFile = e => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', 
      () => callback(reader.result)
    );
    reader.readAsDataURL(img);
  }

  handleSubmit= () => {
    // getFieldsValue()获取表单中所填写的所有的值
    // validateFields()校验表单中是否和规则相符
    let userInfo = this.props.form.getFieldsValue()
    console.log(userInfo)
    this.props.form.validateFields((err) => {
      if(!err){
        message.success(`${userInfo.userName},恭喜你,你通过本次表单组件学习,当前密码为:${userInfo.password}`)
      }
    })
  }
}

export default Form.create()(FormReg)