import './../sass/moddle/menu.scss'

import React,{ Component } from 'react'
import { Link } from 'react-router'

var time

class CommonMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      height: window.innerHeight + 'px',
      mA: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuBtn !== true) {
      clearTimeout(time)
      this.refs.menuWrapper.className = 'menu-wrapper display'
      time = setTimeout(()=>{
        this.setState({
          mA: nextProps.menuBtn
        })
      }, 200)
    } else {
      clearTimeout(time)
      this.setState({
        mA: nextProps.menuBtn
      })
      time = setTimeout(()=>{
        this.refs.menuWrapper.className = 'menu-wrapper'
      }, 2500)
    }
  }

  render() {
    
    return(
      <div ref="menuWrapper" className="menu-wrapper" style={{height: this.state.height}}>
        <div 
          className={`list one r-one ${this.state.mA ? '' : 'a-one t'}`}
          style={{
            height: this.state.height,
            lineHeight: this.state.height,
          }} 
        >
          <Link ref="aa" to="home">home</Link>
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