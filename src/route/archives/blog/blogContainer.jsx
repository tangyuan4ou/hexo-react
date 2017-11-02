import React, { Component } from 'react'

import Navgation from './../../navgation.jsx'
import Blog from './blog.jsx'

class Blogs extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }


  render() {
    return (
      <div className="blogContainer">
        <Blog />
        <Navgation name={'tangyuan'} color={'#ffffff'} write={true}/>
      </div>
    )
  }

}

export default Blogs