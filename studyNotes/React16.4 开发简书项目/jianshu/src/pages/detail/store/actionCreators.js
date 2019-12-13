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

export const getDetails = () => {
  return (dispatch) => {
    axios.get('/api/detail.json')
      .then((res) => {
        const data = res.data
        console.log(data)
        dispatch(addDetail(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}