import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Admin from "./Admin"
import Buttons from "./pages/ui/buttons"
import Modals from "./pages/ui/modals"
import Loading from "./pages/ui/loadings"
import Notification from "./pages/ui/notification"
import Messages from "./pages/ui/messages"
import Tabs from "./pages/ui/tabs"
import Gallery from "./pages/ui/gallery"
import Carousel from "./pages/ui/carousel"
import Login from "./pages/form/login"
import Home from "./pages/home"
import NoMatch from "./pages/nomatch"

class IRouter extends React.Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loadings" component={Loading}/>
                <Route path="/admin/ui/notification" component={Notification}/>
                <Route path="/admin/ui/messages" component={Messages}/>
                <Route path="/admin/ui/tabs" component={Tabs}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousel}/>
                <Route path="/admin/form/login" component={Login}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter