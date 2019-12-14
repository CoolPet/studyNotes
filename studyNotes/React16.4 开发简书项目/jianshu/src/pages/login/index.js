import React,{ PureComponent } from "react"
import { 
  LoginWrapper,
  LoginLogo,
  LoginBox,
  LoginTitle,
  LoginTitleDesc,
  LoginBizing,
  LoginInput,
  LoginBtn,
  SignInBtn
} from "./style"
import { connect } from "react-redux"
import { Link, Redirect } from "react-router-dom"
import { login, changeLoginState, signIn } from "./store"

class Login extends PureComponent{
  render(){
    const { btn, login, loginState, changeLoginState, signIn } = this.props
    if(login){
      return <Redirect to="/"/>
    }else{
      return(
        <LoginWrapper>
          <LoginLogo>
            <Link to="/">
              <img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
            </Link>
          </LoginLogo>
          <LoginBox>
            <LoginTitle>
              <LoginTitleDesc onClick={() => {changeLoginState("login", this.account, this.psw)}} className={loginState==="login"?"active":""}>登录</LoginTitleDesc>
              <LoginTitleDesc><b>·</b></LoginTitleDesc>
              <LoginTitleDesc onClick={() => {changeLoginState("signIn", this.account, this.psw)}} className={loginState==="signIn"?"active":""}>注册</LoginTitleDesc>
            </LoginTitle>
            <LoginBizing>
              <LoginInput className="user" placeholder="用户名" ref={(input) => {this.account = input}}/>
              <i className="iconfont icon">&#xe601;</i>
            </LoginBizing>
            <LoginBizing>
              <LoginInput placeholder="密码" type="password" ref={(input) => {this.psw = input}}/>
              <i className="iconfont icon">&#xe619;</i>
            </LoginBizing>
            {
              loginState === "login" ?
              <LoginBtn onClick={() => btn(this.account, this.psw)}>登录</LoginBtn> :
              <SignInBtn onClick={() => signIn(this.account, this.psw)}>注册</SignInBtn>
            }
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapState = (state) => {
  return{
    login: state.getIn(["login", "login"]),
    loginState: state.getIn(["login", "loginState"])
  }
}

const mapDispatch = (dispatch) => {
  return{
    btn(account, psw){
      if(account.value === ""){
        alert("请输入用户名")
      }else if (psw.value === "") {
        alert("请输入密码")
      }else{
        dispatch(login(account.value, psw.value))
        account.value = ""
        psw.value = ""
      }
    },
    changeLoginState(state, account, psw){
      dispatch(changeLoginState(state))
      account.value = ""
      psw.value = ""
    },
    signIn(account, psw){
      if(account.value === ""){
        alert("请输入用户名")
      }else if (psw.value === "") {
        alert("请输入密码")
      }else{
        dispatch(signIn(account.value, psw.value))
        account.value = ""
        psw.value = ""
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Login)