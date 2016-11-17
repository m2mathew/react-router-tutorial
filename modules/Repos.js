import React from 'react';
import {
	browserHistory,
	Link,
} from 'react-router';

// Internal dependencies
import NavLink from './NavLink';


const repoStyle = {
	color: 'goldenrod',
};

const inputStyle = {
	borderRadius: 5,
};


export default React.createClass({

	contextTypes: {
		router: React.PropTypes.object,
	},

	handleSubmit(event) {
		event.preventDefault();
		const userName = event.target.elements[0].value;
		const repo = event.target.elements[1].value;
		const path = `/repos/${userName}/${repo}`;
		this.context.router.push(path)
		console.log(path);
	},

	render() {
		return(
			<div style={repoStyle}>
				<h2>REPOS</h2>

				<ul>
					<li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
					<li><NavLink to="/repos/facebook/react">React</NavLink></li>

					{/* Form */}
					<li>
						<form onSubmit={this.handleSubmit}>
							<input style={inputStyle} type="text" placeholder="userName" /> / {' '}
							<input style={inputStyle} type="text" placeholder="repo" />{' '}
							<button style={inputStyle} type="submit">Go</button>
						</form>
					</li>
				</ul>

				{this.props.children}

			</div>
		);
	}
});
