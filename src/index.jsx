'use strict';

import React from 'react'
import { render } from 'react-dom'

import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'


import Home from './route/home/homeContainer.jsx'
import About from './route/about/aboutContainer.jsx'
import Archives from './route/archives/archivesContainer.jsx'
import Blogs from './route/archives/blog/blogContainer.jsx'
import Message from './route/contact/messageContainer.jsx'

import './sass/global.scss'

render(
		<Router history={hashHistory}>
			<Route path='/' component={Home} />
			<Route path='home' component={Home} />
			<Route path='about' component={About} />
			<Route path='archives' component={Archives} />
			<Route path='blogs' component={Blogs} />
			<Route path='contact' component={Message} />
		</Router>,
		document.getElementById("app")
)


