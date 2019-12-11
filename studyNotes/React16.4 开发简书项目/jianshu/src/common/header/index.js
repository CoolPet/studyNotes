import React from "react"
import { CSSTransition } from "react-transition-group"
import { connect } from "react-redux"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Btn
} from "./style"
import { inputFocus, inputBlur } from "./store"

const Fragment = React.Fragment

const Header = (props) => {
  const { focused, handleInputFocus, handleInputBlur } = props
  return(
    <Fragment>
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right beta"></NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe666;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6d9;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Btn className="writting">
            <i className="iconfont">&#xe616;</i>
            写文章
          </Btn>
          <Btn className="reg">注册</Btn>
        </Addition>
      </HeaderWrapper>
    </Fragment>
  )
}

const mapStateToProps = (state) =>{
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(){
      dispatch(inputFocus())
    },
    handleInputBlur(){
      dispatch(inputBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)