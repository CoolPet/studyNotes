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
}

// 对组件设置 propTypes 属性,可以为组件的 props 属性进行类型检查
// propTypes 中可以在属性后面添加 isRequired,意味这个值是必传的值
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 父组件就算没有传值，且子组件又必须接收，就可以设默认值
TodoItem.defaultProps = {
  test: "hello world!"
}

export default TodoItem