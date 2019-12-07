import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST_ITEM, INIT_LIST, GET_INIT_LIST } from "./actionTypes"

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

export const getInitList = () =>({
  type: GET_INIT_LIST
})