import React,{ PureComponent } from "react"
import {
  ListItem,
  ListInfo,
  ListDiscuss,
  ListDiscussItem,
  LoadMore
} from "../style"
import { connect } from "react-redux"
import { getArticleList, getMore } from "../store"

class List extends PureComponent{
  render(){
    const { articleList, getMoreList, articlePage } = this.props
    return(
      <div>
        {
          articleList.toJS().map((item, index) => {
            return(
              <ListItem key={index}>
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
        <LoadMore onClick={() => getMoreList(articlePage)}>阅读更多</LoadMore>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    this.props.getList()
  }
}

const mapStateToProps = (state) => {
  return{
    articleList: state.getIn(["home", "articleList"]),
    articlePage: state.getIn(["home", "articlePage"])
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getList(){
      dispatch(getArticleList())
    },
    getMoreList(articlePage){
      dispatch(getMore(articlePage+1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)