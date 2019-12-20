import React from "react"
import axios from "../../axios"
import {
  Card, 
  Table
} from "antd"

class Basic extends React.Component{
  state = {
    dataSourceList: []
  }

  render(){
    const columns = [
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
        align: 'center'
      },
      {
        title: "状态",
        dataIndex: "state",
        align: 'center'
      },
      {
        title: "爱好",
        dataIndex: "interest",
        align: 'center'
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
    const dataSource = [
      {
        "id": 1,
        "userName": "康艳",
        "sex": 1,
        "state": 1,
        "interest": 4,
        "isMarried": 0,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00",
        align: 'center'
      },
      {
        "id": 2,
        "userName": "何娜",
        "sex": 2,
        "state": 4,
        "interest": 2,
        "isMarried": 0,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00",
        align: 'center'
      },
      {
        "id": 3,
        "userName": "赵桂英",
        "sex": 2,
        "state": 2,
        "interest": 3,
        "isMarried": 1,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00",
        align: 'center'
      },
      {
        "id": 4,
        "userName": "范勇",
        "sex": 2,
        "state": 2,
        "interest": 5,
        "isMarried": 0,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00",
        align: 'center'
      },
      {
        "id": 5,
        "userName": "赖平",
        "sex": 2,
        "state": 2,
        "interest": 3,
        "isMarried": 0,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00",
        align: 'center'
      }
    ]
    const { dataSourceList } = this.state
    return(
      <div>
        <Card title="基础表格">
          <Table 
            bordered
            columns={columns}
            dataSource={dataSource}
            rowKey={record => record.id}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格">
          <Table 
            bordered
            columns={columns}
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

  // 动态获取 mock 数据
  request = () => {
    axios.ajax({
      url: "/table/list"
    }).then((res) => {
      this.setState({
        dataSourceList: res
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default Basic