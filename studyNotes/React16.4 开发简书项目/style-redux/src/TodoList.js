import React from "react"

import store from "./store"

import "antd/dist/antd.css"
import { Input, Button, List } from "antd"
import "./style.css"

const Component = React.Component
const Fragment = React.Fragment

class TodoList extends Component{
  constructor(props){
    super(props)
    const data = store.getState()
    this.state = data
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render(){
    const { inputValue, list } = this.state
    return(
      <Fragment>
        <div className="header">
          <Input 
            value={inputValue} 
            placeholder="todo info" 
            className="int"
            onChange={this.handleInputChange}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          className="list"
          bordered
          dataSource={list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    )
  }

  handleInputChange(e){
    const action = {
      type: "change_input_value",
      value: e.target.value
    }
    store.dispatch(action)
  }
}

export default TodoList 