import { CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST_ITEM, INIT_LIST } from "./actionTypes"

const defaultState = {
  inputValue: '123',
  list:[
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
}

// reducer 可以接收 state,但是绝不能修改 state
// 纯函数指的是,给定固定的输入,就一定会有固定的输出,而且不会有任何副作用
export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_LIST){
    if(state.inputValue !== "" && !new RegExp("^[ ]+$").test(state.inputValue)){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.push(newState.inputValue)
      newState.inputValue = ""
      return newState
    }else{
      alert("请输入内容")
    }
  }
  if(action.type === DELETE_LIST_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.listIndex, 1)
    return newState
  }
  if(action.type === INIT_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}