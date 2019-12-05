import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST_ITEM, INIT_LIST } from "./actionTypes"
import axios from "axios"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const addList = () => ({
  type: ADD_LIST
})

export const deleteListItem = (e) => ({
  type: DELETE_LIST_ITEM,
  listIndex: e
})

export const initList = (data) =>({
  type: INIT_LIST,
  data
})

export const getAxios = () => {
  return (dispatch) => {
    axios.get("./todolist.json").then((res) => { 
      const data = res.data
      const action = initList(data)
      dispatch(action)
    }).catch((err) => {
      console.log(err)
    })
  }
}