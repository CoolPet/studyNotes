import React from "react"
import { HashRouter, Route } from "react-router-dom"
import App from "./App"
import Admin from "./Admin"
import Login from "./pages/login"
import Buttons from "./pages/ui/buttons"
import Home from "./pages/home"
import NoMatch from "./pages/nomatch"

class IRouter extends React.Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() =>
            <Admin>
              <Route path="/admin/home" component={Home}/>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route component={NoMatch}/>
            </Admin>
          }/>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter