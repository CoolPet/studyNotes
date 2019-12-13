import React,{ PureComponent } from "react"
import { 
  DetailBox,
  DetailWrapper,
  Header,
  Content
} from "./style"
import { connect } from "react-redux"
import {
  getDetails
} from "./store"

class Detail extends PureComponent{
  render(){
    const { title, content } = this.props
    return(
      <DetailBox>
        <DetailWrapper>
          <Header>{title}</Header>
          <Content dangerouslySetInnerHTML={{__html: content}}/>
        </DetailWrapper>
      </DetailBox>
    )
  }

  UNSAFE_componentWillMount(){
    this.props.getDetail()
  }
}

const mapState = (state) => {
  return{
    title: state.getIn(["detail", "title"]),
    content: state.getIn(["detail", "content"])
  }
}

const mapDispatch = (dispatch) => {
  return{
    getDetail(){
      dispatch(getDetails())
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)