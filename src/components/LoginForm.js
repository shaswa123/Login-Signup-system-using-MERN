//    CSS FILES     //
import './stylesheets/LoginForm.css';

// IMPORT REACT LIB //
import React from 'react';

class LoginForm extends React.Component {
	state = { email: '', pass: '', errorEmail: '' };

	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	// validatePassword(pass) {
	// 	let lowerCaseLetters = /[a-z]/g.test(pass);
	// 	let upperCaseLetters = /[A-Z]/g.test(pass);
	// 	let numbers = /[0-9]/g.test(pass);
	// 	let speicalCharacter = /(?=.*[!@#$%^&*])/.test(pass);
	// 	if (lowerCaseLetters == false) {
	// 		return false;
	// 	} else if (upperCaseLetters == false) {
	// 		return false;
	// 	} else if (numbers == false) {
	// 		return false;
	// 	} else if (speicalCharacter == false) {
	// 		return false;
	// 	} else {
	// 		return true;
	// 	}
	// }

	inputValidation() {
		if (this.state.email !== '') {
			if (this.validateEmail(this.state.email) == false) {
				this.setState({ errorEmail: 'error' });
			} else {
				this.setState({ errorEmail: '' });
			}
		}
		// if (this.state.pass != '' && this.state.error === '') {
		// 	let flag = this.validatePassword(this.state.pass);
		// 	if (flag !== true) {
		// 		this.setState({ errorPass: 'error', errorMessage: flag });
		// 	} else {
		// 		this.setState({ errorPass: '', errorMessage: '' });
		// 	}
		// }
	}
	onClickSignIn = () => {
		// The email and password is send to App.js for calling API to server
		this.props.onSubmit(this.state.email, this.state.pass);
	};

	onSignUpForm = () => {
		this.props.onSignUp();
	};

	render() {
		return (
			<div className="formContainer w-25 m-auto" style={{ display: this.props.displaySetting }}>
				<div
					className="loading ui segment"
					style={{ display: this.props.displayLoading, position: 'absolute' }}
				/>
				<h2 className="ui header text-center">Sign in</h2>
				<label>Email address</label>
				<div className={'ui input column w-100 mt-2 ' + this.state.errorEmail} style={{ padding: '0' }}>
					<input
						type="email"
						value={this.state.email}
						onChange={(e) => {
							this.setState({ email: e.target.value });
							this.inputValidation();
						}}
						placeholder="Enter your email"
					/>
				</div>
				<div className="ui input column w-100 mt-2" style={{ padding: '0' }}>
					<label>Password</label>
					<input
						type="password"
						value={this.state.pass}
						onChange={(e) => {
							this.setState({ pass: e.target.value });
						}}
						className={this.state.error}
						placeholder="Enter your password"
					/>
				</div>
				<div className={this.props.loginError}>Please enter valid information.</div>
				<div
					className="ui animated button w-100 signInBtn"
					tabIndex="0"
					onClick={this.onClickSignIn}
					style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
				>
					<div className="visible content">Sign in</div>
					<div className="hidden content">
						<i className="right arrow icon" />
					</div>
				</div>
				<div className="ui horizontal divider">Or</div>
				<div className="d-flex">
					<div
						className="ui animated button w-100"
						tabIndex="0"
						onClick={this.onSignUpForm}
						style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
					>
						<div className="visible content">Sign up</div>
						<div className="hidden content">
							<i className="right arrow icon" />
						</div>
					</div>
					<div
						className="ui animated button w-100"
						tabIndex="0"
						style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
					>
						<div className="visible content">Forgot Password</div>
						<div className="hidden content">
							<i className="right arrow icon" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoginForm;
