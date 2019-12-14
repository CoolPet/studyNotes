import {
  GET_DETAIL
} from "./actionTypes"
import { fromJS } from "immutable"
import axios from "axios"

export const addDetail = (data) => ({
  type: GET_DETAIL,
  title: fromJS(data.title),
  content: fromJS(data.content)
})

export const getDetails = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id)
      .then((res) => {
        const data = res.data
        dispatch(addDetail(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}