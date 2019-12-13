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
    axios.get('/api/articleList.json?page=0')
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

export const showQrcode = () => ({
  type: SHOW_QRCODE
})

export const hiddenQrcode = () => ({
  type: HIDDEN_QRCODE
})

export const addWriter = (data) => ({
  type: ADD_WRITER,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
})

export const getWriterList = () => {
  return (dispatch) => {
    axios.get('/api/writerList.json')
      .then((res) => {
        const data = res.data
        dispatch(addWriter(data.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}

export const changeWriterPage = (page) => ({
  type: CHANGE_WRITER_PAGE,
  page: page
})

export const addMoreList = (data, page) => ({
  type: GET_MORE_LIST,
  data: fromJS(data),
  page
})

export const getMore = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/articleList.json?page='+articlePage)
      .then((res) => {
        const data = res.data
        dispatch(addMoreList(data.data, articlePage))
      }).catch((err) => {
        console.log(err)
      })
  }
}

export const showBackTop = (data) => {
  if(data){
    return{
      type: CHANGE_SHOW_SCROLL_TRUE,
      data
    }
  }else{
    return{
      type: CHANGE_SHOW_SCROLL_FALSE,
      data,
      showHint: false
    }
  }
}

export const showHint = (data) => ({
  type: CHNAGE_SHOW_HINT,
  data
})