/*
* @Author: o
* @Date:   2017-02-01 16:38:10
* @Last Modified by:   o
* @Last Modified time: 2017-02-03 18:12:31
*/

'use strict';


import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'


import Home from './route/homeContainer.jsx'
import About from './route/aboutContainer.jsx'
import Archives from './route/archivesContainer.jsx'
import Message from './route/messageContainer.jsx'

import './sass/global.scss'



render(
		<Router history={hashHistory}>
			<Route path='/' component={Home} />
			<Route path='home' component={Home} />
			<Route path='about' component={About} />
			<Route path='archives' component={Archives} />
			<Route path='contact' component={Message} />
		</Router>,
		document.getElementById("app")
)


