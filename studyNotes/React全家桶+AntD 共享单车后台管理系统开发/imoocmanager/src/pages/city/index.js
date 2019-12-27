import React from "react"
import {
  Card, 
  Form,
  Select,
  Button,
  Table,
  Modal,
  Radio,
  message
} from "antd"
import axios from "../../axios"
import Utils from "../../utils/util"

const FormItem = Form.Item
const { Option } = Select
const RadioGroup = Radio.Group

class City extends React.Component{
  state = {
    list: [],
    params: {
      page: 1
    },
    visible: false
  }

  render(){
    const { list, pagination, visible } = this.state
    const columns = [
      {
        title: "城市ID",
        dataIndex: "id",
        align: "center"
      },
      {
        title: "城市名称",
        dataIndex: "name",
        align: "center"
      },
      {
        title: "用车模式",
        dataIndex: "mode",
        align: "center",
        render(res){
          return res === 1 ? "指定停车点" : "禁停区"
        }
      },
      {
        title: "营运模式",
        dataIndex: "op_mode",
        align: "center",
        render(res){
          return res === 1 ? "自营" : "加盟"
        }
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name",
        align: "center"
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
        align: "center",
        render(arr){
          return arr.map((item) => {
            return item.user_name
          }).join(",")
        }
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time",
        align: "center"
      },
      {
        title: "操作时间",
        dataIndex: "update_time",
        align: "center",
        render(data){
          return Utils.formateDate(data)
        }
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name",
        align: "center"
      }
    ]
    return(
      <div>
        <Card>
          <FilterForm/>
        </Card>
        <Card style={{marginBottom: 0, borderBottom: "none"}}>
          <Button type="primary" style={{marginBottom: 0}} onClick={this.handleOpenCity}>
            开通城市
          </Button>
        </Card>
        <div className="content-wrapper">
          <Table 
            bordered
            columns={columns}
            dataSource={list}
            pagination={pagination}
          />
        </div>
        <Modal 
          title="开通城市"
          visible={visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
        >
          <OpenCityForm  
            wrappedComponentRef={
              (inst) => {
                this.cityForm = inst
              }
            }
          />
        </Modal>
      </div>
    )
  }

  componentDidMount(){
    this.requestList()
  }

  // 默认请求接口数据
  requestList = () => {
    const { params } = this.state
    let _this = this
    axios.ajax({
      url: "/open_city",
      data: {
        params:{
          page: params.page
        }
      }
    }).then((res) => {
      res.page = params.page
      this.setState({
        list: res.item_list.map((item, index) => {
          item.key = index
          return item
        }),
        pagination: Utils.pagination(res, (current) => {
          params.page = current
          _this.requestList()
        })
      })
    })
  }

  // 开通城市
  handleOpenCity = () => {
    this.setState({
      visible: true
    })
  }

  // 城市开通提交
  handleSubmit = (e) => {
    let cityInfo = this.cityForm.props.form.getFieldsValue()
    this.setState({
      visible: false
    })
    axios.ajax({
      url: "/city/open",
      data:{
        params: cityInfo
      }
    }).then((res) => {
      message.success(res)
    })
    this.requestList()
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
}

class FilterForm extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form
    return(
      <Form 
        layout="inline"
      >
        <FormItem label="城市">
          {
            getFieldDecorator("city_id", {
              initialValue: ""
            })(
              <Select
                placeholder="全部"
                style={{width: 100}}
              >
                <Option value="">全部</Option>
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
                <Option value="3">深圳市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator("mode", {
              initialValue: ""
            })(
              <Select
                placeholder="全部"
                style={{width: 140}}
              >
                <Option value="">全部</Option>
                <Option value="1">指定停车点</Option>
                <Option value="2">禁停区</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator("op_mode", {
              initialValue: ""
            })(
              <Select
                placeholder="全部"
                style={{width: 80}}
              >
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="加盟商授权状态">
          {
            getFieldDecorator("auth_status", {
              initialValue: ""
            })(
              <Select
                style={{width: 100}}
              >
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            onClick={this.handleSearch}
          >
            查询
          </Button>
          <Button 
            style={{marginBottom: 0}}
          >
            重置
          </Button>
        </FormItem>
      </Form>
    )
  }
  
  handleSearch = () => {
    let searchInfo = this.props.form.getFieldsValue()
    axios.ajax({
      url: "/city/search",
      data:{
        params: searchInfo
      }
    }).then((res) => {
      message.success(res)
    })
  }
}
FilterForm = Form.create({})(FilterForm)

class OpenCityForm extends React.Component{
  render(){
    const formItemLayout = {
      labelCol:{
        span: 5
      },
      wrapperCol:{
        span: 19
      }
    }
    const { getFieldDecorator } = this.props.form
    return(
      <Form {...formItemLayout}>
        <FormItem label="选择城市">
          {
            getFieldDecorator("city_id", {
              initialValue: "1"
            })(
              <Select
                style={{width: 140}}
              >
                <Option value="1">北京市</Option>
                <Option value="2">天津市</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator("op_mode", {
              initialValue: "1"
            })(
              <RadioGroup>
                <Radio value="1">自营</Radio>
                <Radio value="2">加盟</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator("use_mode", {
              initialValue: "1"
            })(
              <RadioGroup>
                <Radio value="1">指定停车点</Radio>
                <Radio value="2">禁停区</Radio>
              </RadioGroup>
            )
          }
        </FormItem>
      </Form>
    )
  }
}
OpenCityForm = Form.create({})(OpenCityForm)

export default City