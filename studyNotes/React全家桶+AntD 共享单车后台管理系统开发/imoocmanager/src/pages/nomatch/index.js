import React from "react"
import "./index.less"
import { Link } from "react-router-dom"

class NoMatch extends React.Component{
  render(){
    return(
      <div className="desc">
        <img src="https://www.daixiaorui.com/Public/images/head404.png" alt=""/>
        <div>
          <p>对不起,您请求的页面不存在,或已被删除,或暂时不可用</p>
          <p>请点击以下链接继续浏览网页</p>
          <Link to="/admin/home">返回网站首页</Link>
        </div>
      </div>
    )
  }
}

export default NoMatch