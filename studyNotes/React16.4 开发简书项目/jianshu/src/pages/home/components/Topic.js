import React,{ PureComponent } from "react"
import {
  TopicWrapper,
  TopicItem,
  TopicItemMore 
}from "../style"
import { connect } from "react-redux"
import { getTopicList } from "../store"

class Topic extends PureComponent{
  UNSAFE_componentWillMount(){
    this.props.getList()
  }

  render(){
    const { topicList } = this.props
    return(
      <TopicWrapper>
        {
          topicList.toJS().map((item) => {
            return(
              <TopicItem key={item.id}>
                <img className="topic-pic" src={item.imgUrl} alt=""/>
                {item.title}
              </TopicItem>
            )
          })
        }
        <TopicItemMore>更多热门专题 ></TopicItemMore>
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    topicList: state.getIn(["home", "topicList"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getList(){
      dispatch(getTopicList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)