import React, { Component } from "react" 
import { connect } from "react-redux"

const Fragment = React.Fragment

class TodoList extends Component{
  render(){
    return(
      <Fragment>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

// mapStateToProps 是一个函数,建立一个从(外部的) state 对象到(UI 组件的) props 对象的映射关系
// mapStateToProps 执行后应该返回一个对象,里面的每一个键值对就是一个映射
const mapStateToProps = (state) =>{
  return{
    inputValue: state.inputValue,
    list: state.list
  }
}

// mapDispatchToProps 是 connect 函数的第二个参数,用来建立 UI 组件的参数到 store.dispatch 方法的映射,它定义了用户的某些操作应该当做 action,传给 store,它是一个函数,也可以是一个对象
const mapDispatchToProps = (dispatch) =>{
  return{
    changeInputValue(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action = {
        type: "add_list"
      }
      dispatch(action)
    }
  }
}

// connect 方法接受两个参数: mapStateToProps 和 mapDispatchToProps，它们定义了 UI 组件的业务逻辑
// mapStateToProps 负责输入逻辑,即将 state 映射到 UI 组件的参数(props)
// mapDispatchToProps 负责输出逻辑,即将用户对 UI 组件的操作映射成 action
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)