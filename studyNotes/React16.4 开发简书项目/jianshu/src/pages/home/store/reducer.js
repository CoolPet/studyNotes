import { fromJS } from 'immutable'
import { ADD_TOPIC_LIST, ADD_ARTICLE_LIST, ADD_RECOMMEND } from "./actionTypes"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommend: [],
  QRcode: false
})

export default (state = defaultState, action) => {
  switch(action.type){
    case ADD_TOPIC_LIST:
      return state.set("topicList", action.data)
    case ADD_ARTICLE_LIST:
      return state.set("articleList", action.data)
    case ADD_RECOMMEND:
      return state.set("recommend", action.data)
    default:
      return state
  }
}