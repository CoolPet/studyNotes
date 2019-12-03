import React from 'react';
import Seed from "./Seed"
import {CSSTransition, TransitionGroup} from "react-transition-group"

import "./style.css"

const Component = React.Component
const Fragment = React.Fragment

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: true,
      list: []
    }

    this.btn = this.btn.bind(this)
    this.btnAddItem = this.btnAddItem.bind(this)
  }

  render(){
    return (
      <Fragment>
        {
          /*
            在需要做动画的元素上包裹一个 CSSTransition 的组件
            in = {this.state.show}: 的值改变会触发动画
            timeout = {1000}: 动画执行时长
            classNames = "fade": css类名,可自定义,在 css 中同样的类名即可,注意是 classNames
            unmountOnExit: DOM 会被移除
            appear={true}: 第一次显示需要动画,需要在 css 文件中新增加类名 fade-appear
          */
          /*
            addEndListener:添加自定义转换结束触发器,使用正在转换的 DOM 节点和 done 回调调用,允许更细粒度的转换结束逻辑,注意:如果提供超时,仍将其用作回退
            addEndListener = {(node, done) => {
              node.addEventListener('transitionend', done, false);
            }}
            onEnter:在应用"输入"状态之前触发的回调,提供一个额外的参数 isAppearing,以指示是否在初始挂载上出现了 enter 阶段
            onEnter = {(node, isAppearing) => {
              console.log(node)   // 返回 HTML 节点
              console.log(isAppearing)    // 返回对应的 boolean 值
            }}
            onEntering:在应用"输入"状态之前触发的回调,提供了一个额外的参数 isAppearing,以指示是否在初始挂载上出现了 entering 阶段
            onEntering = {(node, isAppearing) => {
              console.log(node)   // 返回 HTML 节点
              console.log(isAppearing)    // 返回对应的 boolean 值
            }}
            onEntered:在应用"输入"状态之前触发的回调,提供了一个额外的参数 isAppearing,以指示是否在初始挂载上出现了 entered 阶段
            onEntered = {(node, isAppearing) => {
              console.log(node)   // 返回 HTML 节点
              console.log(isAppearing)    // 返回对应的 boolean 值
            }}
            onExit:在应用"退出"状态之前触发的回调
            onExit = {(node) => {
              console.log(node)   // 返回 HTML 节点 
            }}
            onExiting:在应用"退出"状态之前触发的回调
            onExiting = {(node) => {
              console.log(node)   // 返回 HTML 节点 
            }}
            onExited:在应用"退出"状态之前触发的回调
            onExited = {(node) => {
              console.log(node)   // 返回 HTML 节点 
            }}
          */
        }
        <CSSTransition in={this.state.show}
          timeout={1000}
          classNames="fade"
          unmountOnExit
          appear={true}
          onEntered={(el) => { el.style.color = "red" }}>
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.btn}>提交</button>
        <Seed child={this.btnAddItem} childState={this.state.list}/>
      </Fragment>
    )
  }

  btn(){
    const show = !this.state.show
    this.setState(() => ({
      show: show
    }))
  }

  btnAddItem(){
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App;
