import { ADD_TOPIC_LIST, ADD_ARTICLE_LIST, ADD_RECOMMEND } from "./actionTypes"
import { fromJS } from "immutable"
import axios from "axios"

export const addTopicList = (data) => ({
  type: ADD_TOPIC_LIST,
  data: fromJS(data)
})

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('/api/topicList.json')
      .then((res) => {
        const data = res.data
        dispatch(addTopicList(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}

export const addArticleList = (data) => ({
  type: ADD_ARTICLE_LIST,
  data: fromJS(data)
})

export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/articleList.json')
      .then((res) => {
        const data = res.data
        dispatch(addArticleList(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}

export const addRecommend = (data) => ({
  type: ADD_RECOMMEND,
  data: fromJS(data)
})

export const getRecommend = () => {
  return (dispatch) => {
    axios.get('/api/recommend.json')
      .then((res) => {
        const data = res.data
        dispatch(addRecommend(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}