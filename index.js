// External
import React from 'react'
import { render } from 'react-dom'
import {
	hashHistory,
	IndexRoute,
	Route,
	Router,
} from 'react-router';


// Internal
import About from './modules/About';
import App from './modules/App';
import Home from './modules/Home';
import Repos from './modules/Repos';


// Build router
const router = (
	<Router history={hashHistory} >
		<Route path="/" component={App}>

			<IndexRoute component={Home} />

			{/* add the routes here */}
			<Route path="/repos" component={Repos}>
				<Route path="/repos:/userName/:repoName" component={Repos} />
			</Route>
			<Route path="/about" component={About} />
		</Route>
	</Router>
);


// Render app to screen
render(router, document.getElementById('app'))
