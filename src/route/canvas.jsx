import React, { Component } from 'react'

class Canvas extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    let  height, width, largeHeight, canvas, ctx, cirles, target, animateHeader = true;

    height = window.innerHeight;
    if ( window.innerWidth<1200 ) {
      width = 1200
    } else {
      width = window.innerWidth
    }
  
    canvas = document.getElementById('bgCanvas');
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext('2d')

    //创建粒子
    cirles = [];
    for ( let x=0; x<width*0.5; x++ ) {
      let c = new Circle()
      cirles.push(c)
    }
    animate()
    function animate() {
      ctx.clearRect(0, 0, width, height)
      for ( let i in cirles ) {
        cirles[i].draw()
      }
      requestAnimationFrame(animate)
    }

    function Circle() {
      var _this = this;
      (() => {
        _this.pos = {};
        init()
      })()

      function init() {
        _this.pos.x = Math.random() * width
        _this.pos.y = height + Math.random()*100
        _this.alpha = 0.8 + Math.random()*0.3
        _this.scale = 0.1 + Math.random()*0.3
        _this.verlocity = Math.random()
      }

      this.draw = () => {
        if ( _this.alpha <= 0.3 ) {
          init()
        }
        _this.pos.y -= _this.verlocity
        _this.alpha -= 0.001
        ctx.beginPath()
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2*Math.PI, false)
        ctx.fillStyle = 'rgba(0,0,0' + _this.alpha + ')'
        ctx.fill()
      }
    }

  }

  render() {
    
    return (
      <div className="canvas">
        <canvas id="bgCanvas" className="bgCanvas"></canvas>
        <div className="name">tangyuan</div>
      </div>
    )

  }

}

export default Canvas