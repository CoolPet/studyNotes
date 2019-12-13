import React,{ PureComponent } from "react"
import Download from "./components/Download"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
  ShowHint
} from "./style"
import banner from "../../statics/banner.jpg"
import { connect } from "react-redux"
import { showBackTop, showHint } from "./store"

class Home extends PureComponent{
  render(){
    const { showScroll, changeShowHint } = this.props
    return(
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
        {
          showScroll ? 
          <BackTop onClick={this.handleScrollTop}
            onMouseEnter={() => changeShowHint(true)}
            onMouseLeave={() => changeShowHint(false)}
          >
            <i className="iconfont">&#xe63d;</i>
            {this.showHintBox()}
          </BackTop> : null
        }
      </HomeWrapper>
    )
  }

  handleScrollTop(){
    // window.scrollTo(0, 0)
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let timer = setInterval(() => {
        scrollTop -= 100;
        window.scrollTo(0, scrollTop)
        if (scrollTop <= 0) {
            clearInterval(timer)
        }
    }, 25)
  }

  componentDidMount(){
    this.bindEvents()
  }

  bindEvents(){
    window.addEventListener("scroll", this.props.changeScrollTopShow)
  }

  showHintBox(){
    const { showScroll, showHint } = this.props
    if(showScroll && showHint){
      return(
        <ShowHint>回到顶部</ShowHint>
      )
    }
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(["home", "showScroll"]),
    showHint: state.getIn(["home", "showHint"])
  }
}

const mapDispatch = (dispatch) => {
  return{
    changeScrollTopShow(){
      if(document.documentElement.scrollTop > 400){
        dispatch(showBackTop(true))
      }else{
        dispatch(showBackTop(false))
      }
    },
    changeShowHint(e){
      dispatch(showHint(e))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)