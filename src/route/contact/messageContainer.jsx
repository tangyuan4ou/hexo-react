import './../../sass/moddle/message.scss'

import React, { Component } from 'react'

import Navgation from './../navgation.jsx'
import MessageForm from './messageForm.jsx'

class Message extends Component {
  constructor() {
    super()
    this.state = {
      menu: false,
      display: false,
      marginTop: 0
    }
  }

  componentDidMount() {
    const height = window.innerHeight
    let marginTop = 240 - height
    this.setState({
      marginTop: marginTop
    })
  }

   changeMenu(event) {
    const self = this
    this.setState({
      menu: !this.state.menu,
    })
    setTimeout(() => {
      self.setState({
        display: !this.state.display,

      })
    }, 2000)
  }
 
  render() {
    return (
      <div className="page">
        <Navgation 
          display={this.state.display}
          menu={this.state.menu} 
          onclick={event => this.changeMenu(event)}/>
        <div 
        className={`message-page ${this.state.menu ? 'shiftingDown' : 'shiftingUp'}`} 
        style={{ marginTop: this.state.menu ? 0 : this.state.marginTop }}
        >
          <h1 className="title">给点意见吧，你的鼓励是我前进的动力^_^</h1>
          <MessageForm url='/js/comments'/>
        </div>
      </div>
    )
  }
}

export default Message