import './../../sass/moddle/about.scss'

import React, { Component } from 'react'

import Navgation from './../navgation.jsx'
import Svg from './svg.jsx'
import Describe from './aboutDes.jsx'

class About extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <section className="aboutContainer">
        <div className="wrapper">
          <div className="content">
            <div className="b top t-a"></div>
            <div className="b right r-a"></div>
            <div className="b bottom b-a"></div>
            <div className="b left l-a"></div>
            <Svg />
            <Describe />
          </div>
        <Navgation name={'tangyuan'} color={'#ffffff'} write={true}/>
        </div>
      </section>
    )
  }
}

export default About