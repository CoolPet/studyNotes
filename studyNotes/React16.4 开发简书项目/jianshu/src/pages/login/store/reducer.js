import { fromJS } from "immutable"
import {
  CHANGE_LOGIN,
  CHANGE_LOGIN_STATE,
  CHANGE_SIGN_IN
} from "./actionTypes"

const defaultState = fromJS({
  login: false,
  loginState: "login"
})

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_LOGIN:
      return state.set("login", action.value)
    case CHANGE_LOGIN_STATE:
      return state.set("loginState", action.state)
    case CHANGE_SIGN_IN:
      return state.set("loginState", "login")
    default:
      return state
  }
}