import React,{ Component } from "react"
import {
  ListItem,
  ListInfo,
  ListDiscuss,
  ListDiscussItem
} from "../style"
import { connect } from "react-redux"
import { getArticleList } from "../store"

class List extends Component{
  render(){
    const { articleList } = this.props
    return(
      <div>
        {
          articleList.toJS().map((item) => {
            return(
              <ListItem key={item.id}>
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  <ListDiscuss>
                    <ListDiscussItem className="jewel">
                      <i className="iconfont jewel">&#xe600;</i>
                      {item.jewelNum}
                    </ListDiscussItem>
                    <ListDiscussItem>{item.author}</ListDiscussItem>
                    <ListDiscussItem>
                      <i className="iconfont">&#xe631;</i>
                      {item.commentNum}
                    </ListDiscussItem>
                    <ListDiscussItem>
                      <i className="iconfont">&#xe612;</i>
                      {item.likeNum}
                    </ListDiscussItem>
                  </ListDiscuss>
                </ListInfo>
                <img className="pic" src={item.imgURL} alt=""/>
              </ListItem>
            )
          })
        }
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.props.getList()
  }
}

const mapStateToProps = (state) => {
  return{
    articleList: state.getIn(["home", "articleList"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getList(){
      dispatch(getArticleList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)