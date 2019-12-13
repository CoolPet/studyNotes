import React,{ PureComponent } from "react"
import {
  WriterInfo,
  WriterTitle,
  WriterItem,
  WriterPic,
  WriterItemRight,
  WriterItemTop,
  WriterItemTopLeft,
  WriterItemTopRight,
  WriterItemBottom,
  WriterAll
} from "../style"
import { connect } from "react-redux"
import { getWriterList, changeWriterPage } from "../store"

class Writer extends PureComponent{
  render(){
    const { switchOver, writerPage, writerTotalPage } = this.props
    return(
      <WriterInfo>
        <WriterTitle>
          <div>推荐作者</div>
          <div className="batch" onClick={()  => {
            switchOver(writerPage, writerTotalPage, this.spinIcon)
          }}>
            <i className="iconfont spin"
              ref={(icon) => { 
                this.spinIcon = icon 
              }} 
            >&#xe851;</i>
            换一批
          </div>
        </WriterTitle>
        {this.writerListItem()}
        <WriterAll>查看更多 ></WriterAll>
      </WriterInfo>
    )
  }

  UNSAFE_componentWillMount(){
    this.props.getList()
  }

  writerListItem(){
    const { writerList, writerPage, writingCount, likeCount } = this.props
    const newList = writerList.toJS()
    const pageList = []
    if(newList.length){
      for(let i = (writerPage * 5); i < (writerPage + 1) * 5; i++){
        pageList.push(
          <WriterItem key={newList[i].id}>
            <WriterPic src={newList[i].avatar}/>
            <WriterItemRight>
              <WriterItemTop>
                <WriterItemTopLeft>{newList[i].nickname}</WriterItemTopLeft>
                <WriterItemTopRight>+关注</WriterItemTopRight>
              </WriterItemTop>
              <WriterItemBottom>
                写了{writingCount(newList[i].writingCount)}字 · {likeCount(newList[i].likeCount)}喜欢
              </WriterItemBottom>
            </WriterItemRight>
          </WriterItem>
        )
      }
    }
    return pageList
  }
}

const mapStateToProps = (state) => {
  return{
    writerList: state.getIn(["home", "writerList"]),
    writerPage: state.getIn(["home", "writerPage"]),
    writerTotalPage: state.getIn(["home", "writerTotalPage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getList(){
      dispatch(getWriterList())
    },
    writingCount(num){
      return num > 999 ? (num/1000).toFixed(1) + 'k' : num
    },
    likeCount(num){
      return num > 999 ? (num/1000).toFixed(1) + 'k' : num
    },
    switchOver(page, totalPage, spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "")
      if(originAngle){
        originAngle = parseInt(originAngle)
      }else{
        originAngle = 0
      }
      spin.style.transform = "rotate("+ (originAngle + 360) +"deg)"
      if(page < totalPage-1){
        dispatch(changeWriterPage(page + 1))
      }else{
        dispatch(changeWriterPage(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Writer)