import React from "react"
import { Menu } from 'antd'
import { Link } from "react-router-dom"
import MenuConfig from "../../config/menuConfig"
import "./index.less"

const { SubMenu } = Menu

class NavLeft extends React.Component{
  render(){
    const { menuTreeNode } = this.state
    return(
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="meiyou"/>
          <h1>Imooc MS</h1>
        </div>
        <Menu 
          theme="dark"
        >
          {menuTreeNode}
        </Menu>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu = (data) =>{
    return data.map((item) => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <Link to={item.key}>{item.title}</Link>
      </Menu.Item>
    })
  }
}

export default NavLeft