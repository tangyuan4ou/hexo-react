import './../sass/icon.scss'
import './../sass/moddle/navgation.scss'

import React, { Component } from 'react'
import { Link } from 'react-router'

import CommonMenu from './commonMenu.jsx'

class Navgation extends Component {
  constructor() {
    super()
    this.state = {
      menuBtn: true,
      inputWidth: true
    }
    
  }

  componentDidMount() {
  }

  handleInput() {
    this.setState({
      inputWidth: !this.state.inputWidth
    })
  }

  handleMenu() {
    this.setState({
      menuBtn: !this.state.menuBtn,
    })
  }

  render() {
    return (
      <div>
        <CommonMenu menuBtn={this.state.menuBtn} />
        <nav className="menu-section">
          <div className="nav">
            <span className="name" style={{display: this.state.menuBtn ? 'block' : 'none'}}>Hi friend</span>
            <div className="searchContainer">
              <input 
                id="search" 
                className="search" 
                type="text" 
                placeholder="search..." 
                style={{
                  width: this.state.inputWidth ? '0px' : '350px',
                  display: this.state.menuBtn ? 'block' : 'none'
                }}  
              />
              <div 
                className="searchBtn"
                onClick={event => this.handleInput(event)}
                style={{display: this.state.menuBtn ? 'block' : 'none'}}
              >
                <i className="iconfont icon-sousuo"></i>
              </div>
              <div 
                className={`menu-toggle ${this.state.menuBtn ? '' : 'on'}`}
                onClick={event => this.handleMenu(event)}
              >
                <div className="navBtn one"></div>
                <div className="navBtn two"></div>
                <div className="navBtn three"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navgation