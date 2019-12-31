import React from "react"
import {
  Card, 
  Form,
  Button,
  Table,
  Select,
  DatePicker,
  message,
  Modal
} from "antd"
import axios from "../../axios"
import Utils from "../../utils/util"
import BaseForm from "../../components/BaseForm"

const FormItem = Form.Item
const { Option } = Select

class Order extends React.Component{
  state = {
    list: [],
    params: {
      page: 1
    },
    selectedRowKeys:[],
    selectedItem: ""
  }

  formList = [
    {
      type: "SELECT",
      label: "城市",
      field: "city",
      placeholder: "全部",
      initialValue: "1",
      width: 100,
      list: [
        {
          id: "0",
          name: "全部"
        },
        {
          id: "1",
          name: "北京市"
        },
        {
          id: "2",
          name: "天津市"
        },
        {
          id: "3",
          name: "上海市"
        }
      ]
    },
    {
      type: "时间查询"
    },
    {
      type: "SELECT",
      label: "订单状态",
      field: "order_status",
      placeholder: "全部",
      initialValue: "1",
      width: 140,
      list: [
        {
          id: "0",
          name: "进行中"
        },
        {
          id: "1",
          name: "进行中(临时锁车)"
        },
        {
          id: "2",
          name: "结束行程"
        }
      ]
    }
  ]

  render(){
    const { list, pagination, selectedRowKeys } = this.state
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn",
        align: "center"
      },
      {
        title: "车辆编号",
        dataIndex: "bike_sn",
        align: "center"
      },
      {
        title: "用户名",
        dataIndex: "user_name",
        align: "center"
      },
      {
        title: "手机号码",
        dataIndex: "mobile",
        align: "center"
      },
      {
        title: "里程",
        dataIndex: "distance",
        align: "center",
        render(distance){
          return ((parseInt(distance) / 1000).toFixed(2)) + "km"
        }
      },
      {
        title: "行程时长",
        dataIndex: "total_time",
        align: "center",
        render(second){
          var day = Math.floor(second / 86400)
          var hours = Math.floor((second % 86400) / 3600)
          var minutes = Math.floor(((second % 86400) % 3600) / 60)
          var seconds = Math.floor(((second % 86400) % 3600) % 60)
          var duration = (day !== 0 ? day + "天" : "") + (hours !== 0 || day !== 0 ? hours + "小时" : "") + minutes + "分" + seconds + "秒"
          return duration
        }
      },
      {
        title: "状态",
        dataIndex: "status",
        align: "center",
        render(status){
          switch(status){
            case 1:
              return "进行中"
            case 2:
              return "进行中(临时锁车)"
            case 3:
              return "行程结束"
            default:
              return "进行中"
          }
        }
      },
      {
        title: "开始时间",
        dataIndex: "start_time",
        align: "center"
      },
      {
        title: "结束时间",
        dataIndex: "end_time",
        align: "center"
      },
      {
        title: "订单金额",
        dataIndex: "total_fee",
        align: "center",
        render(money){
          return ((parseInt(money) / 100).toFixed(2)) + "元"
        }
      },
      {
        title: "实付金额",
        dataIndex: "user_pay",
        align: "center",
        render(money){
          return ((parseInt(money) / 100).toFixed(2)) + "元"
        }
      }
    ]
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
      onChange:(selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys,
          selectedItem: selectedRows
        })
      }
    }
    return(
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleSearch}/>
        </Card>
        <Card>
          <Button 
            type="primary" 
            style={{marginBottom: 0}} 
            onClick={this.openOrderDetail}
          >
            订单详情
          </Button>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            onClick={this.overOrder}
          >
            结束订单
          </Button>
        </Card>
        <div className="content-wrapper">
          <Table 
            bordered
            columns={columns}
            dataSource={list}
            pagination={pagination}
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }}
          />
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.requestList()
  }

  requestList = () => {
    const { params } = this.state
    let _this = this
    axios.ajax({
      url: "/order/list",
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

  handleSearch = (params) =>{
    this.params = params
    this.requestList()
  }

  onRowClick = (record, index) => {
    let selectKey = [index]
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  // 结束订单
  overOrder = () => {
    let item = this.state.selectedItem
    if(!item){
      Modal.info({
        title: "请选择一条订单进行结束"
      })
      return
    }else{
      this.requestList()
      this.setState({
        selectedRowKeys:[],
        selectedItem: ""
      })
    }
  }

  // 打开订单详情
  openOrderDetail = () => {
    let item = this.state.selectedItem
    if(!item){
      Modal.info({
        title: "请选择一条订单进行查看"
      })
      return
    }
    window.open("/#/common/order/detail/" + item.id)
  }
}

export default Order