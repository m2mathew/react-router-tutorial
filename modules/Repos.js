import React from 'react';
import { Link } from 'react-router';

// Internal dependencies
import NavLink from './NavLink';


const repoStyle = {
	color: 'goldenrod',
};


export default React.createClass({
	render() {
		return(
			<div style={repoStyle}>
				<h2>REPOS</h2>

				<ul>
					<li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
					<li><NavLink to="/repos/facebook/react">React</NavLink></li>
				</ul>

				{this.props.children}

			</div>
		);
	}
});
