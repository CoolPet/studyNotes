import React from "react"
import {
  Card, 
  Form,
  Button,
  Table,
  Select,
  DatePicker
} from "antd"
import axios from "../../axios"
import Utils from "../../utils/util"

const FormItem = Form.Item
const { Option } = Select

class Order extends React.Component{
  state = {
    list: []
  }

  render(){
    const { list, pagination } = this.state
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn",
        align: "center"
      },
      {
        title: "车辆编号",
        dataIndex: "bike_sn"
      },
      {
        title: "用户名",
        dataIndex: "user_name"
      },
      {
        title: "手机号码",
        dataIndex: "mobile"
      },
      {
        title: "里程",
        dataIndex: "distance"
      },
      {
        title: "行程时长",
        dataIndex: "total_time"
      },
      {
        title: "状态",
        dataIndex: "status"
      },
      {
        title: "开始时间",
        dataIndex: "start_time"
      },
      {
        title: "结束时间",
        dataIndex: "end_time"
      },
      {
        title: "订单金额",
        dataIndex: "total_fee"
      },
      {
        title: "实付金额",
        dataIndex: "user_pay"
      }
    ]
    return(
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card>
          <Button type="primary" style={{marginBottom: 0}}>订单详情</Button>
          <Button type="primary" style={{marginBottom: 0}}>结束订单</Button>
        </Card>
        <div className="content-wrapper">
          <Table 
            bordered
            columns={columns}
            dataSource={list}
            pagination={pagination}
          />
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.requestList()
  }

  requestList = () => {
    axios.ajax({
      url: "/order/list",
      data: {
        isShowLoading: true
      }
    }).then((res) => {
      console.log(res)
    })
  }
}

class FilterForm extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form
    return(
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator("city_id")(
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
        <FormItem>
          {
            getFieldDecorator("start_time")(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem>~</FormItem>
        <FormItem>
          {
            getFieldDecorator("end_time")(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
            )
          }
        </FormItem>
        <FormItem label="订单状态">
          {
            getFieldDecorator("op_mode")(
              <Select
                placeholder="全部"
                style={{width: 140}}
              >
                <Option value="">全部</Option>
                <Option value="1">进行中</Option>
                <Option value="2">进行中(临时锁车)</Option>
                <Option value="3">行程结束</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            // onClick={this.handleSearch}
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
}
FilterForm = Form.create({})(FilterForm)

export default Order