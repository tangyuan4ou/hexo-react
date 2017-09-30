import './../../sass/moddle/archives.scss'

import React, { Component } from 'react'

import Navgation from './../navgation.jsx'
import Archive from './archive.jsx'
import Paginator from './paginator.jsx'


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

        <Archive />
        <Paginator />
        </div>
        <Navgation name={'tangyuan'} color={'#ffffff'} write={true}/>
      </div>
    )
  }

}

export default Archives