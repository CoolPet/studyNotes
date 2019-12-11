import { INPUT_FOCUS, INPUT_BLUR, GET_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from "./actionTypes"
import { fromJS } from "immutable"
import axios from "axios"

export const inputFocus = () => ({
  type: INPUT_FOCUS
})

export const inputBlur = () => ({
  type: INPUT_BLUR
})

export const changeList = (data) => ({
  type: GET_LIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () => ({
  type: MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data
        dispatch(changeList(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}