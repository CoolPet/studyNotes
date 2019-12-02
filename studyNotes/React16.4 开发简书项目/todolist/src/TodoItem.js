import React from "react"
import PropTypes from "prop-types"
const Component = React.Component

class TodoItem extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render(){
    const { content, test } = this.props
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
  }

  handleClick(){
    const {deleteItem, index} = this.props
    deleteItem(index)
  }

  // 当一个组件从父组件接受参数
  // 只要父组件的 render 函数被执行,子组件的这个生命周期函数就会被自动执行
  // 如果这个组件第一次存在于父组件中,不会执行
  // 如果这个组件之前已经存在于父组件中,才会执行
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps")
  }

  // componentWillUnmount 当组件即将被从页面中剔除的时候自动执行
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
}

// 对组件设置 propTypes 属性,可以为组件的 props 属性进行类型检查
// propTypes 中可以在属性后面添加 isRequired,意味这个值是必传的值
TodoItem.propTypes = {
  // oneOfType([]) 表示该属性的类型可以是多种,但它需要是数组形式表示
  test: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 父组件就算没有传值，且子组件又必须接收，就可以设默认值
TodoItem.defaultProps = {
  test: 0
}

export default TodoItem