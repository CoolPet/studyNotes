import React from "react"
import {
  Card, 
  Table,
  Badge,
  Button,
  Modal,
  message
} from "antd"
import axios from "../../axios"
import Utils from "../../utils/util"

class High extends React.Component{
  state = {
    page: 1
  }

  render(){
    const { dataSourceList, sortOrder } = this.state
    const sideColumns = [
      {
        title: "id",
        dataIndex: "id",
        align: 'center',
        width: 120,
        fixed: "left"
      },
      {
        title: "用户名",
        dataIndex: "userName",
        align: 'center',
        width: 120,
        fixed: "left"
      },
      {
        title: "性别",
        dataIndex: "sex",
        align: 'center',
        render(sex){
          return sex === 1 ? "男" : "女"
        }
      },
      {
        title: "年龄",
        dataIndex: "age",
        align: 'center'
      },
      {
        title: "状态",
        dataIndex: "state",
        align: 'center',
        render(state){
          return configState[state]
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: 'center',
        render(interest){
          return configInterest[interest]
        }
      },
      {
        title: "婚姻状况",
        dataIndex: "isMarried",
        align: 'center',
        render(isMarried){
          return isMarried === 1 ? "未婚" : "已婚"
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        align: 'center'
      },
      {
        title: "地址",
        dataIndex: "address",
        align: 'center'
      },
      {
        title: "早起时间",
        dataIndex: "time",
        align: 'center',
        width: 120,
        fixed: "right"
      }
    ]
    const headColumns = [
      {
        title: "id",
        dataIndex: "id",
        align: 'center'
      },
      {
        title: "用户名",
        dataIndex: "userName",
        align: 'center'
      },
      {
        title: "性别",
        dataIndex: "sex",
        align: 'center',
        render(sex){
          return sex === 1 ? "男" : "女"
        }
      },
      {
        title: "年龄",
        dataIndex: "age",
        align: 'center'
      },
      {
        title: "状态",
        dataIndex: "state",
        align: 'center',
        render(state){
          return configState[state]
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: 'center',
        render(interest){
          return configInterest[interest]
        }
      },
      {
        title: "婚姻状况",
        dataIndex: "isMarried",
        align: 'center',
        render(isMarried){
          return isMarried === 1 ? "未婚" : "已婚"
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        align: 'center'
      },
      {
        title: "地址",
        dataIndex: "address",
        align: 'center'
      },
      {
        title: "早起时间",
        dataIndex: "time",
        align: 'center'
      }
    ]
    const sortColumns = [
      {
        title: "id",
        dataIndex: "id",
        align: 'center'
      },
      {
        title: "用户名",
        dataIndex: "userName",
        align: 'center'
      },
      {
        title: "性别",
        dataIndex: "sex",
        align: 'center',
        render(sex){
          return sex === 1 ? "男" : "女"
        }
      },
      {
        title: "年龄",
        dataIndex: "age",
        align: 'center',
        sorter: (a, b) => {
          return a.age - b.age
        },
        sortOrder: sortOrder
      },
      {
        title: "状态",
        dataIndex: "state",
        align: 'center',
        render(state){
          return configState[state]
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: 'center',
        render(interest){
          return configInterest[interest]
        }
      },
      {
        title: "婚姻状况",
        dataIndex: "isMarried",
        align: 'center',
        render(isMarried){
          return isMarried === 1 ? "未婚" : "已婚"
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        align: 'center'
      },
      {
        title: "地址",
        dataIndex: "address",
        align: 'center'
      },
      {
        title: "早起时间",
        dataIndex: "time",
        align: 'center'
      }
    ]
    const operateColumns = [
      {
        title: "id",
        dataIndex: "id",
        align: 'center'
      },
      {
        title: "用户名",
        dataIndex: "userName",
        align: 'center'
      },
      {
        title: "性别",
        dataIndex: "sex",
        align: 'center',
        render(sex){
          return sex === 1 ? "男" : "女"
        }
      },
      {
        title: "年龄",
        dataIndex: "age",
        align: 'center'
      },
      {
        title: "状态",
        dataIndex: "state",
        align: 'center',
        render(state){
          return configState[state]
        }
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: 'center',
        render(interest){
          let config = {
            "1": <Badge status="success" text="游泳"/>,
            "2": <Badge status="error" text="打篮球"/>,
            "3": <Badge status="default" text="踢足球"/>,
            "4": <Badge status="processing" text="跑步"/>,
            "5": <Badge status="warning" text="爬山"/>,
            "6": <Badge status="success" text="骑行"/>,
            "7": <Badge status="error" text="桌球"/>,
            "8": <Badge status="default" text="麦霸"/>
          }
          return config[interest]
        }
      },
      {
        title: "婚姻状况",
        dataIndex: "isMarried",
        align: 'center',
        render(isMarried){
          return isMarried === 1 ? "未婚" : "已婚"
        }
      },
      {
        title: "生日",
        dataIndex: "birthday",
        align: 'center'
      },
      {
        title: "地址",
        dataIndex: "address",
        align: 'center'
      },
      {
        title: "早起时间",
        dataIndex: "time",
        align: 'center'
      },
      {
        title: "操作",
        render:(item) => {
          return <Button size="small" type="danger" style={{margin: 0}} onClick={() => {this.handleDelete(item)}}>删除</Button>
        }
      }
    ]
    let configState = {
      "1": "咸鱼一条",
      "2": "风华浪子",
      "3": "北大才子",
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
    return(
      <div>
        <Card title="头部固定">
          <Table 
            bordered
            columns={headColumns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            scroll={{y: 300}}
          />
        </Card>
        <Card title="左侧固定">
          <Table 
            bordered
            columns={sideColumns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            scroll={{x: 1300}}
          />
        </Card>
        <Card title="表格排序">
          <Table 
            bordered
            columns={sortColumns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title="操作按钮">
          <Table 
            bordered
            columns={operateColumns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
          />
        </Card>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.request()
  }

  request = () => {
    let _this = this
    axios.ajax({
      url: "/table/high/list",
      data:{
        params:{
          page: this.state.page
        },
        isShowLoading: true
      }
    }).then((res) => {
      res.page = this.state.page
      this.setState({
        dataSourceList: res.list,
        pagination: Utils.pagination(res, (current) => {
          _this.state.page = current
          _this.request()
        })
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  handleDelete = (item) => {
    let list = this.state.dataSourceList
    let arr = item
    let ids = []
    Modal.confirm({
      title:"确认删除",
      content: "确认删除当前数据",
      onOk:() => {
        ids = list.filter((item) => {
          return item!==arr
        })
        message.success("删除成功")
        this.setState({
          dataSourceList: ids
        })
      }
    })
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }
}

export default High