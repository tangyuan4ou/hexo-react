import './../../sass/moddle/archives.scss'

import React, { Component } from 'react'

import Navgation from './../navgation.jsx'

class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
    }
  }

  componentDidMount() {
    let height = this.refs.archive.clientHeight
    if ( this.state.height > height ) {
      this.refs.archive.style.height = this.state.height - 5 + 'px'
      this.refs.wap.style.height = this.state.height - 60 + 'px'
    } else {
      this.refs.archive.style.height = height + 'px'
     }
  }

  animate(event) {
    event.stopPropagation()
    let className, block, i = 0
    block = event.target.parentNode.children
    block[0].classList.remove('t-a')
    block[1].classList.remove('r-a')
    block[2].classList.remove('b-a')
    block[3].classList.remove('l-a')
    setTimeout(()=>{
      block[0].classList.add('t-a')
      block[1].classList.add('r-a')
      block[2].classList.add('b-a')
      block[3].classList.add('l-a')
    },10) 
  }

  hanleMouseOver(event) {
    this.animate(event)
  }

  handleMouseLeave(event) {
    this.animate(event)
  }


  render() {
    return (
      <div 
        ref = "archive"
        className="archivesContainer"
      >
        <div 
          ref = "wap"
          className="wrapper"
        >
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
              <a className="blockLink" href="javascript">
                <div></div>
              </a>
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

        </div>
        <Navgation name={'tangyuan'} color={'#ffffff'} write={true}/>
      </div>
    )
  }

}

export default Archives