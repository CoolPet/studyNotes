import React,{ Component } from "react"
import Download from "./components/Download"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight
} from "./style"
import banner from "../../statics/banner.jpg"

const Fragment = React.Fragment

class Home extends Component{
  render(){
    return(
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" src={banner} alt=""/>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Download></Download>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </Fragment>
    )
  }
}

export default Home