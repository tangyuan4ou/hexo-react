import './../sass/moddle/menu.scss'

import React,{ Component } from 'react'
import { Link } from 'react-router'
import $ from './../public/js/jquery.js'

class CommonMenu extends Component {
  constructor(){
    super()
    this.state = {
      height: window.innerHeight + 'px',
      mA: true
    }
  }

  componentDidUpdate(nextProps) {
    let this_ = this
    let time
    if (this.props.menuBtn !== true) {
      clearTimeout(time)
      $('.menu-wrapper').addClass('display')
      time = setTimeout(()=>{
        this_.setState({
          mA: this_.props.menuBtn
        })
      }, 500)
    } else {
      clearTimeout(time)
      time = setTimeout(()=>{
        $('.menu-wrapper').removeClass('display')
      }, 2500)
    }
  }

  render() {
    
    return(
      <div className="menu-wrapper">
        <div 
          className={`list one r-one ${this.state.mA ? '' : 'a-one t'}`}
          style={{
            height: this.state.height,
            lineHeight: this.state.height,
          }} 
        >
          <Link to="home">home</Link>
        </div>
        <div 
          className={`list two r-two ${this.state.mA ? '' : 'a-two t'}`}
          style={{
            height: this.state.height,
            lineHeight: this.state.height,
          }}
        >
          <Link to="about">about</Link>
        </div>
        <div 
          className={`list three r-three ${this.state.mA ? '' : 'a-three t'}`}
          style={{
            height: this.state.height,
            lineHeight: this.state.height,
          }}
        >
          <Link to="archives">archives</Link>
        </div>
        <div
          className={`list four r-four ${this.state.mA ? '' : 'a-four t'}`}
          style={{
            height: this.state.height,
            lineHeight: this.state.height,
          }}
        >
          <Link to="contact">contact</Link>
        </div>
      </div>
    )
  }

}

export default CommonMenu