import React,{ Component } from "react"
import { 
  RecommendInfo,
  RecommendInfoItem
} from "../style"
import { connect } from "react-redux"
import { getRecommend } from "../store"

class Recommend extends Component{
  render(){
    const { recommend } = this.props
    return(
      <RecommendInfo>
        {
          recommend.toJS().map((item, index) => {
            return(
              <RecommendInfoItem key={index}>
                <img className="recommend-pic" src={item} alt=""/>
              </RecommendInfoItem>
            )
          })
        }
      </RecommendInfo>
    )
  }

  UNSAFE_componentWillMount(){
    this.props.imgList()
  }
}

const mapStateToProps = (state) => {
  return{
    recommend: state.getIn(["home", "recommend"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    imgList(){
      dispatch(getRecommend())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)