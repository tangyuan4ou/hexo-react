import React, { Component } from 'react'

class MessageForm extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    var duoshuoQuery = {short_name:"tanguan4ou"};
      (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
        || document.getElementsByTagName('body')[0]).appendChild(ds);
      })();
  }

  render() {
    return (
	    <div 
        className="ds-thread" 
        data-thread-key="message" 
        data-title="message" 
        data-url="https://tangyuan4ou.github.io"
      ></div>
    )
  }
}

export default MessageForm