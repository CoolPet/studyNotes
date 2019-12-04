import React, { Component } from "react"
import { Input, Button, List } from "antd"

const Fragment = React.Fragment

class TodoListUI extends Component{
  render(){
    const { inputValue, list, handleInputChange, submit, deleteItem } = this.props
    return (
      <Fragment>
        <div className="header">
          <Input 
            value={inputValue} 
            placeholder="todo info" 
            className="int"
            onChange={handleInputChange}/>
          <Button type="primary" onClick={submit}>提交</Button>
        </div>
        <List
          className="list"
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {deleteItem(index)}}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default TodoListUI