import React,{ Component } from "react"
import { connect } from "react-redux"

class TodoList extends Component{
  render(){
    return(
      <div>
        <div>
          <input value={this.props.input} onChange={this.props.handleChage}/>
          <button onClick={this.props.addList}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index)  =>{
              return(
                <li onClick={() =>{ this.props.deleteList(index) }} key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    input: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleChage(e){
      const action = {
        type: "change_input_value",
        e: e.target.value
      }
      dispatch(action)
    },
    addList(){
      const action = {
        type: "add_list"
      }
      dispatch(action)
    },
    deleteList(e){
      const action = {
        type: "delete_list",
        index: e
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)