import React from "react"

import "./style.css"

const Component = React.Component
const Fragment = React.Fragment

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true
    }
    this.btn = this.btn.bind(this)
  }

  render(){
    return (
      <Fragment>
        <div className={this.state.show?'show':'hide'}>hello</div>
        <button onClick={this.btn}>toggle</button>
      </Fragment>
    )
  }

  btn(){
    const show = !this.state.show
    this.setState({
      show: show
    })
  }
}

export default App