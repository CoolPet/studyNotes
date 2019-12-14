import axios from "axios"
import {
  CHANGE_LOGIN,
  CHANGE_LOGIN_STATE,
  CHANGE_SIGN_IN
} from "./actionTypes"

export const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const login = (account, psw) => {
  return (dispatch) => {
    axios.get("/api/login.json?account=" + account.toString() + "&psw=" + psw.toString())
      .then((res) => {
        const result = res.data.data
        if (result) {
          dispatch(changeLogin(true))
        }else{
          alert("登录失败")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const changeLoginState = (state) => ({
  type: CHANGE_LOGIN_STATE,
  state
})

export const changeSignIn = (value) => ({
  type: CHANGE_SIGN_IN,
  value
})

export const signIn = (account, psw) => {
  return (dispatch) => {
    axios.get("/api/signIn.json?account=" + account.toString() + "&psw=" + psw.toString())
      .then((res) => {
        const result = res.data.data
        if (result) {
          dispatch(changeSignIn(true))
          alert("注册成功,请登录")
        }else{
          alert("注册失败")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}