import React,{ PureComponent } from "react"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Btn
} from "./style"
import { inputFocus, inputBlur, getList, mouseEnter, mouseLeave, changePage } from "./store"
import { changeLogin, changeLoginState } from "../../pages/login/store"
import { Link } from "react-router-dom"

class Header extends PureComponent{
  render(){
    const { focused, handleInputFocus, handleInputBlur, list, login, logout, signIn } = this.props
    return(
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ? 
            <Link to="/login"><NavItem onClick={logout} className="right">退出</NavItem></Link> : 
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right beta"></NavItem>
          <NavItem className="right">
            <i className="iconfont setting">&#xe666;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6d9;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Btn className="writting">
              <i className="iconfont">&#xe616;</i>
              写文章
            </Btn>
          </Link>
          {
            login ?
            <Btn className="reg">你好</Btn>:
            <Link to="/login"><Btn className="reg" onClick={signIn}>注册</Btn></Link>
          }
        </Addition>
      </HeaderWrapper>
    )
  }

  getListArea(){
    const { list, page, handleMouseEnter, handleMouseLeave, mouseIn, focused, handleChangePage, totalPage } = this.props
    const newList = list.toJS()
    const pageList = []
    if(newList.length){
      for(let i = (page * 10); i < (page + 1) * 10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => {
              handleChangePage(page, totalPage, this.spinIcon)
            }}>
              <i 
                ref={(icon) => { 
                  this.spinIcon = icon 
                }} 
                className="iconfont spin"
              >&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
}

const mapStateToProps = (state) =>{
  return {
    focused: state.getIn(["header", "focused"]),   // state.get("header").get("focused")
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(list){
      // if 语句的另一种写法
      (!list.size) && dispatch(getList())
      // if(!list.size){
      //   dispatch(getList())
      // }
      dispatch(inputFocus())
    },
    handleInputBlur(){
      dispatch(inputBlur())
    },
    handleMouseEnter(){
      dispatch(mouseEnter())
    },
    handleMouseLeave(){
      dispatch(mouseLeave())
    },
    handleChangePage(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "")
      if(originAngle){
        originAngle = parseInt(originAngle)
      }else{
        originAngle = 0
      }
      spin.style.transform = "rotate("+ (originAngle + 360) +"deg)"
      if (page < totalPage-1) {
        dispatch(changePage(page + 1))
      }
      else{
        dispatch(changePage(0))
      }
    },
    logout(){
      dispatch(changeLogin(false))
      dispatch(changeLoginState("login"))
    },
    signIn(){
      dispatch(changeLoginState("signIn"))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)