import React from "react"
import {
  Card, 
  Table
} from "antd"

class Basic extends React.Component{
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
        id: "0",
        userName: "Jack",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
        align: 'center'
      },
      {
        id: "1",
        userName: "Tom",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
        align: 'center'
      },
      {
        id: "2",
        userName: "Jone",
        sex: "1",
        state: "1",
        interest: "1",
        birthday: "2000-01-01",
        address: "北京市海淀区奥林匹克公园",
        time: "09:00",
        align: 'center'
      }
    ]
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
      </div>
    )
  }
}

export default Basic