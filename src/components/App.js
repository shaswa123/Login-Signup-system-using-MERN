// CSS FILES
import './stylesheets/Styles.css';
import './stylesheets/Navbar.css';

// REACT LIBS
import React from 'react';
import querystring from 'querystring';
import axios from 'axios';
// CUSTOM COMPONENTS
// import loginAPI from './api/loginAPI';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Successful from './Successful';
import About from './About';

class App extends React.Component {
	state = {
		login_success: '',
		login_error: 'no-error',
		displayLoginForm: 'block',
		displaySuccessful: 'none',
		displayLoading: 'none',
		signUpDisplay: 'none',
		signUpError: 'no-error',
		successfulMessage: ''
	};

	onSignInSubmit = async (email, password) => {
		this.setState({ displayLoading: 'block' });
		// MAKING A POST REQ TO BACKEND SERVER
		const loginInfo = {
			email,
			password
		};
		const response = await axios.post('http://localhost:5000', loginInfo);
		let statusCode = Number(response['data']['message']);
		if (statusCode == 404) {
			// SHOW LOGIN ERROR
			this.setState({ login_error: 'error', login_error_message: 'User already exists', displayLoading: 'none' });
		} else if (statusCode == 402) {
			this.setState({ login_error: 'error', login_error_message: 'Invalid input', displayLoading: 'none' });
		} else {
			this.setState({
				login_error: 'no-error',
				displayLoginForm: 'none',
				displaySuccessful: 'block',
				successfulMessage: 'Login successful',
				displayLoading: 'none',
				signUp_error: 'no-errro'
			});
		}
	};

	onSignUp = () => {
		// Display signup from
		this.setState({ signUpDisplay: 'block', displayLoginForm: 'none' });
	};

	resetDisplayProperties = () => {
		// Go back from successful page
		this.setState({ displayLoginForm: 'block', displaySuccessful: 'none' });
	};

	onSignInBtnFromSignUpPage = () => {
		// Redirect back to sign in while in Sign up page
		this.setState({ signUpDisplay: 'none', displayLoginForm: 'block' });
	};

	signUp = async (name, email, password) => {
		// Access API to create a user
		this.setState({ displayLoading: 'block' });
		const signUpInfo = {
			name,
			email,
			password
		};
		const response = await axios.post('http://localhost:5000/signup', signUpInfo);
		if (Number(response['data']['message']) == 409) {
			// SHOW SIGN UP ERROR
			this.setState({ signUpError: 'error', displayLoading: 'none' });
		} else {
			this.setState({
				login_error: 'no-error',
				signUpDisplay: 'none',
				displaySuccessful: 'block',
				successfulMessage: 'Sign up complete',
				displayLoading: 'none'
			});
		}
	};

	render() {
		return (
			<div>
				<div className="ui inverted segment navbarContainer bg-black">
					<div className="ui inverted secondary pointing menu">
						<h2 className="ui header" style={{ margin: 'auto' }}>
							Sign-in form
						</h2>
					</div>
				</div>
				<LoginForm
					onSubmit={this.onSignInSubmit}
					onSignUp={this.onSignUp}
					loginError={this.state.login_error}
					displaySetting={this.state.displayLoginForm}
					displayLoading={this.state.displayLoading}
				/>
				<Successful
					displaySetting={this.state.displaySuccessful}
					resetStates={this.resetDisplayProperties}
					successfulMessage={this.state.successfulMessage}
				/>
				<SignUpForm
					signUpDisplay={this.state.signUpDisplay}
					onClickSignUpBtn={this.signUp}
					signUpError={this.state.signUpError}
					displayLoading={this.state.displayLoading}
					onSignInBtnFromSignUpPage={this.onSignInBtnFromSignUpPage}
				/>
				<About />
			</div>
		);
	}
}

export default App;
