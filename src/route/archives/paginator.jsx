import './../../sass/moddle/paginator.scss'

import React,{ Component } from 'react'

class Paginator extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="pagContainer">
        <div className="piece prev">Prev</div>
        <div className="piece">1</div>
        <div className="piece elipsis">...</div>
        <div className="piece">2</div>
        <div className="piece next">Next</div>
      </div>
    )
  }

}

export default Paginator