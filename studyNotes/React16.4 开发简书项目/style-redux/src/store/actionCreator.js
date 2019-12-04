import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST_ITEM } from "./actionTypes"

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