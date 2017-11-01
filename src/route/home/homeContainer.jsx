import React, { Component } from 'react'

import './../../sass/moddle/home.scss'

import Canvas from './canvas.jsx'
import Navgation from './../navgation.jsx'

class Home extends Component {
  constructor() {
    super()
  }

  componentDidMount () {
    
  }

  render() {
    const userAgent = navigator.userAgent
    console.log(userAgent)
    if (  userAgent.indexOf('Edge')>0 || userAgent.indexOf('ie')>0 || userAgent.indexOf('Opera')>0) {
      console.log(userAgent)
      var home = (
          <h1 className="hint">请使用谷歌或者火狐浏览器打开，谢谢^_^</h1>
        )
    } else if ( userAgent.indexOf('Chrome') > 0 || userAgent.indexOf('Firefox') > 0 ){
      var home = (
        <div className="page">
          <Canvas />
          <Navgation name={'hi friend'} color={'#000000'} write={false} />
        </div>
      )
    }
    
    return (
      <div>{home}</div>
    )
  }
}

export default Home