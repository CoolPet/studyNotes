import React, { Component } from "react"
import { Provider } from "react-redux"
import { GlobalSyled } from "./style"
import { IconFont } from "./statics/iconfont/iconfont"
import Header from "./common/header"
import store from "./store"

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Header/>
        <GlobalSyled/>
        <IconFont/>
      </Provider>
    )
  }
}

export default App