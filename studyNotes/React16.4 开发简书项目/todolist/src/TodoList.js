import React from "react"
// 引入 TodoItem 组件
import TodoItem from "./TodoItem"
// 引入 css 文件
import "./style.css"
// React 如果需要定义 class 组件,需要继承 React.Component
const Component = React.Component
// Fragment 占位符
const Fragment = React.Fragment

class TodoList extends Component {

  constructor(props){
    super(props)
    // 这边相当于 vue 的 data()
    this.state = {
      inputValue: "Hello React!",
      list: ["学习语文", "学习数学", "学习 React"]
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render(){
    return (
      <Fragment>
        {
          // React 的类标签要写成 className
        }
        <div className="int">
          {
            // label 标签的 for 标签需要替换成 htmlFor 
          }
          <label htmlFor="insertArea">输入内容</label>
          <input type='text' 
            id="insertArea"
            value={this.state.inputValue}
            // 调用函数的时候要使用 bind(this) 绑定 this 指向,如果没有绑定 this 指向的话, this 的指向为 undefined
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        {/* 也可以这样写注释 */}
        {
          // 这样写注释也可以
        }
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem(){
    // 数据渲染,使用 map()
    return this.state.list.map((item, index) => {
      // React 的数据循环要给每一项唯一一个 key 标识符
      return (
        // 如果需要 key 值的情况下, key 值应该放在循环的最外层的框架中,和 vue 一样
        <Fragment key={index}>
          <TodoItem content={item} 
            index={index}
            deleteItem={this.handleItemDelete}/>
          {/* <li key={index} 
            onClick={this.handleItemDelete.bind(this ,index)}
            // dangerouslySetInnerHTMl 是React标签的一个属性,相当于 v-html
            // {{}}，第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象键值对
            // 既可以插入DOM，又可以插入字符串
            // 写法: dangerouslySetInnerHTML={{__html: 需要解析的数据}}
            dangerouslySetInnerHTML={{__html: item}}>
          </li> */}
        </Fragment>
      )
    })
  }

  handleInputChange(e){
    // 在函数中,如果想改变 state 中的数据内容,需要使用 this.setState({key: value})
    // this.setState({
    //   inputValue: e.target.value
    // })
    // 在 React 新版中 this.setState 可以写成函数形式,这样会节省性能
    // ES6 语法中,如果函数要返回一个对象,不用使用 return,可以将返回的对象用 () 包裹起来
    // 例:this.setState(() => { return { inputValue: value } }) === this.setState(() => ({ inputValue: value }))
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick(){
    if(this.state.inputValue){
      this.setState((prevState) => ({
        // 使用 ES6 的 ...(扩展运算符) 给数组添加对象
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }))
    }else{
      alert("输入框不能为空")
    }
  }

  // 删除数组中的某一项
  handleItemDelete(e){
    this.setState((prevState) => {
      // React 中有一个 immutable 的概念: state 不允许做任何的改变
      const list = [...prevState.list]
      list.splice(e, 1)
      return{list}
    })
  }
}

export default TodoList