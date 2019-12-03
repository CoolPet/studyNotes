import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group"

const Component = React.Component
const Fragment = React.Fragment

class Seed extends Component{
  constructor(props){
    super(props)
    this.child = this.child.bind(this)
  }

  render(){
    const {childState} = this.props
    return(
      <Fragment>
        <TransitionGroup>
          {
            childState.map((item, index) => {
              return(
                <CSSTransition timeout={1000}
                classNames="fade"
                unmountOnExit
                appear={true}
                onEntered={(el) => { el.style.color = "red" }}
                key={index}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button className="btnStyle" onClick={this.child}>提交</button>
      </Fragment>
    )
  }
  child(){
    const {child} = this.props
    child()
  }
}

export default Seed