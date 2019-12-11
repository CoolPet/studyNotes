import { INPUT_FOCUS, INPUT_BLUR, GET_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from "./actionTypes"
import { fromJS } from "immutable"

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
})

export default (state = defaultState, action) => {
  // immutable 对象的 set 方法,会结合之前 immutable 对象的值和设置的值,返回一个全新的对象
  switch(action.type){
    case INPUT_BLUR:
      return state.set("focused", false)
    case INPUT_FOCUS:
      return state.set("focused", true)
    case GET_LIST:
      return state.set("list", action.list).set("totalPage", action.totalPage)
    case MOUSE_ENTER:
      return state.set("mouseIn", true)
    case MOUSE_LEAVE:
      return state.set("mouseIn", false)
    case CHANGE_PAGE:
      return state.set("page", action.page)
    default:
      return state
  }
}