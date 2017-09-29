import './../../sass/moddle/aboutDes.scss'

import React, { Component } from 'react'

class Describe extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  conponentDidMount() {
    
  }

  handleScroll() {
    let arr = [], p, top
    window.addEventListener('scroll', ()=>{
      p = this.refs.div.children
      top = document.body.getBoundingClientRect().top
      for (let i in p) {

        if ( -top + 850 > p[i].offsetTop ) {
          if ( p[i].className == 'year' ||  p[i].className == 'img' ) {
            p[i].className += ' pA'
          } else if ( p[i].className == ''  ) {
            p[i].className = 'pA'
          }
        }

      }
    })
  }

  render() {
    return(
      <div 
        ref='div'
        className="des-content dA"
        onScroll={this.handleScroll()}
        onClick={event=> this.handleClick(event)}
      >
        <p className="year">2013年</p>
        <p>我来到哈尔滨理工大学</p>
        <p>就读软件工程专业</p>
        <p>从那一年我被迫学习编程</p>
        <p>忧郁</p>
        <p>因为我觉得我喜欢美术，也学了6年</p>
        <p>从幼稚园开始我无数次幻想未来卧坐在宽大的办公室绘制绚丽的设计稿</p>
        <p>但是所有美术老师都说我没有天赋</p>
        <p>我放弃艺术选择理科</p>
        <p>但是并没有放弃当初的愿望</p>
        <p>考进理工大学想要学习工业设计</p>
        <p>我觉得我宽大办公座要来了</p>
        <p>但是</p>
        <p>我被调剂到了一个陌生的领域</p>
        <p>头两年我几乎放弃学习，翘课，挂科，无限的放纵自己</p>
        <p>在开始大三的时候终于意识我马上要毕业了</p>
        <p>要失业了</p>
        <p>我不能一直啃老</p>
        <p>要对未来负责</p>
        <p>从ui到产品，从入门到放弃</p>
        <p>我渐渐意识到其实我并不喜欢设计，我喜欢的其实是实现</p>
        <p>冥冥之中命运安排我和程序见面</p>
        <p>我开始学习前端</p>
        <p>我知道我想要的是什么了</p>
        <p>我好像具备很多程序员的特征，死宅，不喜欢社交，喜欢较真</p>
        <p>唯一不相配的应该就是我是一个女生吧</p>
        <p>呵呵</p>
        <p className="year">2016年</p>
        <p>我在厦门联合优创科技有限公司实习</p>
        <p>开始了解公司开发项目的流程</p>
        <p>视野也开始变开阔了</p>
        <p className="year">2017年</p>
        <p>毕业季</p>
        <p>我孤身一人来到北京</p>
        <p>目前在新东方工作</p>
        <p>虽然现在我并不优秀</p>
        <p>但是</p>
        <p>我相信只有喜欢自己的工作未来才会不断进步</p>
        <p>我可以很肯定的说我很喜欢前端</p>
        <p>未来</p>
        <p>谁又知道呢</p>
        <p>呵呵</p>
        <p>我相信我可以</p>
        <div className="img">
          <img src={require('./../../public/img/header.jpg')} />
        </div>
        <p>以上</p>
        <p>感谢阅读</p>
        <p>祝好</p>
        <p>座右铭</p>
        <p>不该在吃苦的年纪享受安逸</p>
      </div>
    )

  }

}

export default Describe
