import './stylesheets/About.css';

import React from 'react';

class About extends React.Component {
	render() {
		return (
			<div className="ui container mt-5 mb-5">
				<h1 className="ui header">ABOUT LOGIN</h1>
				<p>
					This <b>React</b> application with <b>Node.js</b> as the backend with <b>MongoDB</b> as the database
					can be used as a template for login/sign in. The purpose is to make it easier for anyone looking for
					a quick way to setup a login system.
				</p>
				<p>
					The React.js was used to provide frontend serivce with <b>Semantic UI</b> as a CSS framework helping
					with many CSS components.
				</p>
				<p style={{ whiteSpace: 'pre-line' }}>
					The <b>regex</b> is used to validate the login form on <b>Client side</b> before sending a{' '}
					<b>POST</b> request to a <b>Server</b>. The server is build using Node.js and MongoDB. The server
					before querying into the MongoDB database validates the formate of the parameters passed. The
					parameters passed here are the EMAIL ADDRESS and PASSWORD.
				</p>
				<p>
					<b>NOTE: </b> We highly recommand to encrypt the PASSWORD on the server before either insertion so
					as to make it highly secure.
				</p>
				<p>
					Both the input fields are <b>controlled components</b>. The input is passed to a state object which
					on submission are passed as a POST parameter to the server.
				</p>
				<p>
					Both the email address and password are sanitized at the server side to prevent any NoSQL injection.
				</p>
				<p>
					<b>
						The link to the GitHub repository for the code
						<a href=""> https//github.com</a>
					</b>
				</p>
			</div>
		);
	}
}

export default About;
