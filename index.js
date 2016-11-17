// External
import React from 'react'
import { render } from 'react-dom'
import {
	browserHistory,
	Router,
} from 'react-router';


// Internal
import routes from './modules/routes';


// Render app to screen
render(
	<Router routes={routes} history={browserHistory} />,
	document.getElementById('app')
);
