import './../../../sass/moddle/blog.scss'

import React, { Component } from 'react'

class Blog extends Component{
  constructor(props) {
    super(props) 
    this.state = {

    }
  }

  render () {
    return (
      <div className="blogCon">
        <div className="topBg"></div>
        <div className="blogRight">
          <div className="rCon">
            <h3 className="title">关于Hexo主题制作</h3>
            <p className="data">2018-02-22</p>
            <div className="content">

            </div>
          </div>
        </div>
        <div className="blogLeft">
          <div className="lCon"></div>
        </div>
      </div>
    )
  }

}

export default Blog
