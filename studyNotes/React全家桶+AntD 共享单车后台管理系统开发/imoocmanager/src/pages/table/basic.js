import React from "react"
import axios from "../../axios"
import {
  Card, 
  Table,
  Modal,
  Button,
  message
} from "antd"
import Utils from "../../utils/util"

class Basic extends React.Component{
  state = {
    dataSourceList: [],
    selectedRows: [],
    selectedId: [],
    selectedIds: [],
    page: 1
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
    const { dataSourceList, selectedRowKeys, selectedId, pagination } = this.state
    const rowSelection = {
      type: "radio",
      selectedRowKeys
    }
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys: selectedId,
      onChange:(selectedId, selectedRows) => {
        let ids = []
        selectedRows.map((item) => {
          return ids.push(item.id)
        })
        this.setState({
          selectedId,
          selectedRows,
          selectedIds: ids
        })
      }
    }
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
        <Card title="动态数据渲染表格-Mock">
          <Table 
            bordered
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
          />
        </Card>
        <Card title="单选表格-Mock">
          <Table 
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }}
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
          />
        </Card>
        <Card title="多选表格-Mock">
          <div>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table 
            bordered
            rowSelection={rowCheckSelection}
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: () => {
                  this.onRowCheckClick(record)
                }
              }
            }}
          />
        </Card>
        <Card title="表格分页-Mock">
          <Table 
            bordered
            columns={columns}
            dataSource={dataSourceList}
            rowKey={record => record.id}
            pagination={pagination}
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

  onRowClick(record, index){
    let selectKey = [index+1]
    Modal.info({
      title: "信息",
      content: `用户名:${record.userName},用户性别:${record.sex===1?"男":"女"}`
    })
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  onRowCheckClick(record){
    const { selectedId, selectedRows, selectedIds } = this.state
    selectedId.push(record.id)
    selectedRows.push(record)
    selectedIds.push(record.id)
    this.setState({
      selectedId,
      selectedRows,
      selectedIds
    })
  }

  handleDelete = () => {
    let list = this.state.dataSourceList
    let rows = this.state.selectedRows
    let ids = []
    if(rows !== []){
      rows.map((item) => {
        return ids.push(item.id)
      })
      Modal.confirm({
        title: "删除提示",
        content: "你确定要删除这些数据吗?",
        onOk:() => {
          list = list.filter((item) =>{
            ids = ids.map(item => item)
            return !ids.includes(item.id)
          })
          message.success("删除成功")
          this.setState({
            dataSourceList: list,
            selectedRows: [],
            selectedIds: []
          })
        }
      })
    }else{
      Modal.info({
        title: "提示",
        content: "请先选择你要删除的数据"
      })
    }
  }
}

export default Basic