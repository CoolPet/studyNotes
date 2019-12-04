import React, { Component } from "react"
import { Input, Button, List } from "antd"

const Fragment = React.Fragment

// 无状态组件
const TodoListUI = (props) => {
  const { inputValue, list, handleInputChange, submit, deleteItem } = props
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

// UI 分组件和容器组件分离
// class TodoListUI extends Component{
//   render(){
//     const { inputValue, list, handleInputChange, submit, deleteItem } = this.props
//     return (
//       <Fragment>
//         <div className="header">
//           <Input 
//             value={inputValue} 
//             placeholder="todo info" 
//             className="int"
//             onChange={handleInputChange}/>
//           <Button type="primary" onClick={submit}>提交</Button>
//         </div>
//         <List
//           className="list"
//           bordered
//           dataSource={list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {deleteItem(index)}}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     )
//   }
// }

export default TodoListUI