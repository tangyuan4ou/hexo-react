import React, { Component } from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

import Blogs from './blog/blogContainer.jsx'

class Archive extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  animate(event) {
    event.stopPropagation()
    let blog = event.target.parentNode.children
    blog[0].classList.remove('t-a')
    blog[1].classList.remove('r-a')
    blog[2].classList.remove('b-a')
    blog[3].classList.remove('l-a')
    setTimeout(()=>{
      blog[0].classList.add('t-a')
      blog[1].classList.add('r-a')
      blog[2].classList.add('b-a')
      blog[3].classList.add('l-a')
    },10) 
  }

  hanleMouseOver(event) {
    event.preventDefault()
    this.animate(event)
    let blog = event.target.parentNode.children
    blog[4].classList.add('des-a')
  }

  handleMouseLeave(event) {
    event.preventDefault()
    this.animate(event)
    let blog = event.target.parentNode.children
    blog[4].classList.remove('des-a')
  }

  render(){
    return(
      <section className="content">
        <p className="year">✒2017年</p>
        <article 
          className="block"
          onMouseOver={event => this.hanleMouseOver(event)}
          onMouseLeave={event => this.handleMouseLeave(event)}
        >
          <div className="border t"></div>
          <div className="border r"></div>
          <div className="border b"></div>
          <div className="border l"></div>
          <detials className="des">
            <h2 className="title">这是标题</h2>
            <div className="con">
              <p className="date">9-26</p>
              <span className="tag">tangyuan4ou.github.io</span>
            </div>
          </detials>
        <Link to="/blogs" className="blockLink" />
          
        </article>
        <article
          className="block"
          onMouseOver={event => this.hanleMouseOver(event)} 
          onMouseLeave={event => this.handleMouseLeave(event)}
        >
          <div className="border t"></div>
          <div className="border r"></div>
          <div className="border b"></div>
          <div className="border l"></div>
          <detials className="des">
            <h2 className="title">这是标题</h2>
            <div className="con">
              <p className="date">9-26</p>
              <span className="tag">tangyuan4ou.github.io</span>
            </div>
          </detials>
          <a className="blockLink" href="javascript"></a>
        </article>

        <article 
          className="block"
          onMouseOver={event => this.hanleMouseOver(event)} 
          onMouseLeave={event => this.handleMouseLeave(event)}
        >
          <div className="border t"></div>
          <div className="border r"></div>
          <div className="border b"></div>
          <div className="border l"></div>
          <detials className="des">
            <h2 className="title">这是标题</h2>
            <div className="con">
              <p className="date">9-26</p>
              <span className="tag">tangyuan4ou.github.io</span>
            </div>
          </detials>
          <a className="blockLink" href="javascript"></a>
        </article>
        

      </section>
    )
  }
}

export default Archive