import React, { PureComponent } from "react"
import { Provider } from "react-redux"
// 引入路由组件
import { HashRouter, Route } from "react-router-dom"

// 引入全局样式
import { GlobalSyled, Details, HeaderNav, Matter } from "./style"
import { IconFont } from "./statics/iconfont/iconfont"

// 引入头部文件
import Header from "./common/header"

// 引入 redux
import store from "./store"

// 引入路径文件
import Home from "./pages/home"
import Login from "./pages/login"
import Detail from "./pages/detail/loadable"
import Write from "./pages/write"

class App extends PureComponent{
  render(){
    return(
      <Provider store={store}>
        <div>
          <HashRouter>
            <HeaderNav>
              <Header/>
            </HeaderNav>
          </HashRouter>  
          {
            // HashRouter 代表的是路由
            // Route 代表的是路由规则，在 Route 加上 exact 可以进行路径完全匹配的判断，只有路径和 path 的路径完全一致才会显示,否则不显示
          }
          <Details>
            <HashRouter>
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route>
              <Matter>
                <Route path="/detail/id=:id" exact component={Detail}></Route>
              </Matter>
            </HashRouter>
          </Details>
          <GlobalSyled/>
          <IconFont/>
        </div>
      </Provider>
    )
  }
}

export default App