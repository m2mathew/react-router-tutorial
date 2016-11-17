// External dependencies
import React from 'react';
import {
	Link,
} from 'react-router';

// Internal dependencies
import Home from './Home';
import NavLink from './NavLink';


const helloStyle = {
	color: 'purple',
};

const navStyle = {
	borderBottom: '4px solid grey',
	fontSize: 18,
	paddingBottom: 12,
};

const activeLinkStyle = {
	color: 'red',
};


export default React.createClass({
  render() {
    return (
    	<div style={helloStyle}>
    		<h1>React Router Tutorial</h1>

    		<ul role="nav" style={navStyle}>
	    		<li><NavLink to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</NavLink></li>
    			<li><NavLink to="/about" activeClassName="active">About</NavLink></li>
    			<li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
    		</ul>

    		{this.props.children || <Home />}

    	</div>
    );
  }
})
