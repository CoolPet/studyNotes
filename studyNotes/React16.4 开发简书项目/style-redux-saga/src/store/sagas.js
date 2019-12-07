import { takeEvery, put } from "redux-saga/effects"
import { GET_INIT_LIST } from "./actionTypes"
import { initList } from "./actionCreator"
import axios from "axios"

function* getInitList(){
  try{
    const res = yield axios.get("./todolist.json")
    const action = initList(res.data)
    yield put(action)
  }catch{
    alert("404 异常")
  }
}

// generator 函数
function* mySaga(){
  yield takeEvery(GET_INIT_LIST, getInitList)
} 

export default mySaga