import React from "react"
import axios from "../../axios"
import Utils from "../../utils/util"
import ETable from "../../components/ETable"
import BaseForm from "../../components/BaseForm"
import moment from "moment"
import { 
  Card,
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  message
} from "antd"

const FormItem = Form.Item
const RadioGroup = Radio.Group
const TextArea = Input.TextArea
const Option = Select.Option

class User extends React.Component{
  state = {
    params: {
      page: 1
    },
    list: [],
    pagination: [],
    selectedRowKeys: "",
    isVisible: false,
    title: ""
  }
  formList = [
    {
      type: "INPUT",
      label: "用户名",
      field: "user_name",
      placeholder: "请输入用户名称"
    },
    {
      type: "INPUT",
      label: "手机号",
      field: "user_mobile",
      placeholder: "请输入手机号"
    },
    {
      type: "DATEPICKER",
      label: "请选择入职日期",
      field: "user_date",
      placeholder: "请输入日期"
    }
  ]

  render(){
    const { pagination, list, selectedRowKeys, title, isVisible, type, userInfo } = this.state
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        align: "center"
      },
      {
        title: "用户名",
        dataIndex: "username",
        align: "center"
      },
      {
        title: "性别",
        dataIndex: "sex",
        align: "center",
        render(data){
          return data === 1 ? "男" : "女"
        }
      },
      {
        title: "状态",
        dataIndex: "state",
        align: "center",
        render(state){
          return configState[state]
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: "center",
        render(interest){
          return configInterest[interest]
        }
      },
      {
        title: "婚姻状况",
        dataIndex: "isMarried",
        align: "center",
        render(isMarried){
          return isMarried === 1 ? "未婚" : "已婚"
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        align: "center"
      },
      {
        title: "联系地址",
        dataIndex: "address",
        align: "center"
      },
      {
        title: "早起时间",
        dataIndex: "time",
        align: "center"
      }
    ]
    let configState = {
      "1": "咸鱼一条",
      "2": "风华浪子",
      "3": "北大才子一枚",
      "4": "百度FE",
      "5": "创业者"
    }
    let configInterest = {
      "1":"游泳",
      "2":"打篮球",
      "3":"踢足球",
      "4":"跑步",
      "5":"爬山",
      "6":"骑行",
      "7":"桌球",
      "8":"麦霸"
    }
    let footer = {}
    if(type === "detail"){
      footer = {
        footer: null
      }
    }

    return(
      <div>
        <Card>
          <BaseForm 
            formList={this.formList} 
            filterSubmit={this.handleFilter}
          />
        </Card>
        <Card>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            icon="plus"
            onClick={
              () => {
                this.handleOperate("create")
              }
            }
          >
            创建员工
          </Button>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            icon="edit"
            onClick={
              () => {
                this.handleOperate("edit")
              }
            }
          >
            编辑员工
          </Button>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            onClick={
              () => {
                this.handleOperate("detail")
              }
            }
          >
            员工详情
          </Button>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            icon="delete"
            onClick={
              () => {
                this.handleOperate("delete")
              }
            }
          >
            删除员工
          </Button>
        </Card>
        <div className="content-wrapper">
          <ETable 
            updateSelectedItem={Utils.updateSelectedItem.bind(this)}
            columns={columns}
            dataSource={list}
            pagination={pagination}
            selectedRowKeys={selectedRowKeys}
            rowSelection="radio"
          />
        </div>
        <Modal
          title={title}
          visible={isVisible}
          onOk={this.handleSubmit}
          onCancel={() => {
            this.userForm.props.form.resetFields()
            this.setState({
              isVisible: false
            })
          }}
          okText="确认"
          cancelText="取消"
          {...footer}
        >
          <UserForm 
            type={type} 
            userInfo={userInfo}
            wrappedComponentRef={(inst) => {
              this.userForm = inst
            }}
          />
        </Modal>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.requestList()
  }

  handleFilter = (params) =>{
    this.params = params
    this.requestList()
  }

  requestList = () => {
    axios.requestList(
      this, 
      '/user/list',
      this.params === undefined ? this.state.params : this.params
    )
  }

  // 功能区操作
  handleOperate = (type) => {
    let item = this.state.selectedItem
    if(type === "create"){
      this.setState({
        type,
        isVisible: true,
        title: "创建员工"
      })
    }else if(type === "edit"){
      if(!item){
        Modal.info({
          title: "提示",
          content: "请选择一个用户"
        })
        return
      }
      this.setState({
        type,
        isVisible: true,
        title: "编辑员工",
        userInfo: item
      })
    }else if(type === "detail"){
      if(!item){
        Modal.info({
          title: "提示",
          content: "请选择一个用户"
        })
        return
      }
      this.setState({
        type,
        isVisible: true,
        title: "编辑员工",
        userInfo: item
      })
    }else{
      if(!item){
        Modal.info({
          title: "提示",
          content: "请选择一个用户"
        })
        return
      }
      Modal.confirm({
        title: "确定删除",
        content: `是否要删除${item.username}的信息`,
        onOk:() => {
          axios.ajax({
            url: "/user/delete",
            data: {
              params: item
            }
          }).then(() => {
            message.success("删除成功")
            this.setState({
              selectedRowKeys: [],
              selectedItem: ""
            })
            this.requestList()
          })
        }
      })
    }
  }

  // 创建员工提交
  handleSubmit = () => {
    let type = this.state.type
    let data = this.userForm.props.form.getFieldsValue()
    axios.ajax({
      url: type === "create" ? "/user/add" : "/user/edit",
      data:{
        params: data
      }
    }).then(() => {
      this.setState({
        isVisible: false,
        selectedRowKeys: [],
        selectedItem: ""
      })
      message.success(type === "create" ? "创建成功" : "编辑成功")
      this.userForm.props.form.resetFields()
      this.requestList()
    })
  }
}

class UserForm extends React.Component{
  render(){
    let type = this.props.type
    let userInfo = this.props.userInfo || {}
    const { getFieldDecorator } = this.props.form
    let configState = {
      "1": "咸鱼一条",
      "2": "风华浪子",
      "3": "北大才子一枚",
      "4": "百度FE",
      "5": "创业者"
    }
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 15
      }
    }

    return(
      <Form layout="horizontal" {...formItemLayout}>
        <FormItem label="用户名">
          {
            type === "detail" ? userInfo.username :
            getFieldDecorator("user_name", {
              initialValue: userInfo.username
            })(
              <Input type="text" placeholder="请输入用户名"/>
            )
          }
        </FormItem>
        <FormItem label="性别">
          {
            type === "detail" ? userInfo.sex === 1 ? "男" : "女" :
            getFieldDecorator("sex", {
              initialValue: userInfo.sex
            })(
              <RadioGroup>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="状态">
          {
            type === "detail" ? configState[userInfo.state] :
            getFieldDecorator("state", {
              initialValue: userInfo.state
            })(
              <Select>
                <Option value={1}>咸鱼一条</Option>
                <Option value={2}>风华浪子</Option>
                <Option value={3}>北大才子</Option>
                <Option value={4}>百度FE</Option>
                <Option value={5}>创业者</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="生日">
          {
            type === "detail" ? userInfo.birthday :
            getFieldDecorator("birthday", {
              initialValue: moment(userInfo.birthday)
            })(
              <DatePicker />
            )
          }
        </FormItem>
        <FormItem label="联系地址">
          {
            type === "detail" ? userInfo.address :
            getFieldDecorator("address", {
              initialValue: userInfo.address
            })(
              <TextArea 
                rows={3} 
                placeholder="请输入联系地址"
              />
            )
          }
        </FormItem>
      </Form>
    )
  }
}
UserForm = Form.create({})(UserForm)

export default User