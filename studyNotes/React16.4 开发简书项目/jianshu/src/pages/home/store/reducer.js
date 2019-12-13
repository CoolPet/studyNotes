import { fromJS } from 'immutable'
import { 
  ADD_TOPIC_LIST, 
  ADD_ARTICLE_LIST, 
  ADD_RECOMMEND, 
  SHOW_QRCODE, 
  HIDDEN_QRCODE, 
  ADD_WRITER, 
  CHANGE_WRITER_PAGE, 
  GET_MORE_LIST,
  CHANGE_SHOW_SCROLL_TRUE,
  CHANGE_SHOW_SCROLL_FALSE,
  CHNAGE_SHOW_HINT
} from "./actionTypes"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 0,
  recommend: [],
  QRcode: false,
  writerList: [],
  writerPage: 0,
  writerTotalPage: 0,
  showScroll: false,
  showHint: false
})

const addWriter = (state, action) => {
  return state.merge({
    writerList: action.data,
    writerTotalPage: action.totalPage
  })
}

const getMoreList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.data),
    articlePage: action.page
  })
}

const changeShowScrollFalse = (state, action) => {
  return state.merge({
    showScroll: action.data,
    showHint: action.showHint
  })
}

export default (state = defaultState, action) => {
  switch(action.type){
    case ADD_TOPIC_LIST:
      return state.set("topicList", action.data)
    case ADD_ARTICLE_LIST:
      return state.set("articleList", action.data)
    case ADD_RECOMMEND:
      return state.set("recommend", action.data)
    case SHOW_QRCODE:
      return state.set("QRcode", true)
    case HIDDEN_QRCODE:
      return state.set("QRcode", false)
    case ADD_WRITER:
      return addWriter(state, action)
    case CHANGE_WRITER_PAGE:
      return state.set("writerPage", action.page)
    case GET_MORE_LIST:
      return getMoreList(state, action)
    case CHANGE_SHOW_SCROLL_TRUE:
      return state.set("showScroll", action.data)
    case CHANGE_SHOW_SCROLL_FALSE:
      return changeShowScrollFalse(state, action)
    case CHNAGE_SHOW_HINT:
      return state.set("showHint", action.data)
    default:
      return state
  }
}