import React from "react"
const Component = React.Component

class Test extends Component{

  // 当父组件的 render 函数被运行时,它的子组件的 render 都将被重新运行
  render(){
    const {content} = this.props
    // JSX -> JS 对象 -> 真实的 DOM
    // return (
    //   <div>{content}</div>
    // )
    // JSX -> createElement -> 虚拟 DOM(JS 对象) -> 真实的 DOM
    return React.createElement("div", {}, content)
  }

}

export default Test