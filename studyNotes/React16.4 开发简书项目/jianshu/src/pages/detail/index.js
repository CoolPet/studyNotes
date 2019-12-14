import React,{ PureComponent } from "react"
import { 
  DetailBox,
  DetailWrapper,
  Header,
  Content
} from "./style"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
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
    const id = this.props.match.params.id
    this.props.getDetail(id)
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
    getDetail(id){
      dispatch(getDetails(id))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail))