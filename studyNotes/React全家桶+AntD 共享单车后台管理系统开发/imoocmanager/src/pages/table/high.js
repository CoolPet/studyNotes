import React from "react"
import {
  Card, 
  Table
} from "antd"
import axios from "../../axios"
import Utils from "../../utils/util"

class High extends React.Component{
  state = {
    page: 1
  }

  render(){
    const columns = [
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
    const { dataSourceList } = this.state
    return(
      <div>
        <Card title="头部固定">
          <Table 
            bordered
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            scroll={{y: 240}}
          />
        </Card>
        <Card title="左侧固定">
          <Table 
            bordered
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            scroll={{x: 1300}}
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
      url: "/table/list",
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
}

export default High