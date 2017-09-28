import './../sass/moddle/archives.scss'

import React, { Component } from 'react'

import Navgation from './navgation.jsx'

class Archives extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight - 10
    }
  }

  render() {
    return (
      <div 
        className="archivesContainer"
        style={{height: this.state.height}}
      >
        <div 
          className="wrapper"
          style={{height: this.state.height - 55}}
        >
          <div className="content">
            <h2 className="title">2017年</h2>
          </div>

        </div>
        <Navgation color={'#ffffff'} write={true}/>
      </div>
    )
  }

}

export default Archives