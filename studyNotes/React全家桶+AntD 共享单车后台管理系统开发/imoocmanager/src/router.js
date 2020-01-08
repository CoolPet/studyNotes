import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Admin from "./Admin"
import Common from "./Common"
import Buttons from "./pages/ui/buttons"
import Modals from "./pages/ui/modals"
import Loading from "./pages/ui/loadings"
import Notification from "./pages/ui/notification"
import Messages from "./pages/ui/messages"
import Tabs from "./pages/ui/tabs"
import Gallery from "./pages/ui/gallery"
import Carousel from "./pages/ui/carousel"
import FormLogin from "./pages/form/login"
import FormReg from "./pages/form/reg"
import Basic from "./pages/table/basic"
import High from "./pages/table/high"
import Home from "./pages/home"
import NoMatch from "./pages/nomatch"
import City from "./pages/city"
import Rich from "./pages/rich"
import Order from "./pages/order"
import Details from "./pages/order/details"
import bikeMap from "./pages/map/bikeMap"
import User from "./pages/user"

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
                <Route path="/admin/form/login" component={FormLogin}/>
                <Route path="/admin/form/reg" component={FormReg}/>
                <Route path="/admin/table/basic" component={Basic}/>
                <Route path="/admin/table/high" component={High}/>
                <Route path="/admin/rich" component={Rich}/>
                <Route path="/admin/city" component={City}/>
                <Route path="/admin/order" component={Order}/>
                <Route path="/admin/user" component={User}/>
                <Route path="/admin/bikeMap" component={bikeMap}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/common" render={() => 
            <Common>
              <Route path="/common/order/detail/:orderId" component={Details}/>
            </Common>  
          }/>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter