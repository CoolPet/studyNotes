import React from "react"
import store from "./store"
import { getInputChangeAction, addList, deleteListItem } from "./store/actionCreator"
import TodoListUI from "./TodoListUI"
import "antd/dist/antd.css"
import "./style.css"

const Component = React.Component

class TodoList extends Component{
  constructor(props){
    super(props)
    const data = store.getState()
    this.state = data
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.submit = this.submit.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    // 当前组件订阅 store, store 只要发生变化就自动执行该函数
    store.subscribe(this.handleStoreChange)
  }

  render(){
    const { inputValue, list } = this.state
    return (
      <TodoListUI inputValue = {inputValue}
        list = {list}
        handleInputChange = {this.handleInputChange}
        submit = {this.submit}
        deleteItem = {this.deleteItem}
      />
    )
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    // 向 store 提交更改的内容
    store.dispatch(action)
  }
  handleStoreChange(){
    // 当 store 数据发生变化时,就从 store 中重新取新的数据,并替换当前数据
    this.setState(store.getState())
  }
  submit(){
    const actionList = addList()
    store.dispatch(actionList)
  }
  deleteItem(e){
    const action = deleteListItem(e)
    store.dispatch(action)
  }
}

export default TodoList 