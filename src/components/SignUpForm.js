import './stylesheets/SignUpForm.css';

// IMPORT REACT LIB //
import React from 'react';

class SignUpForm extends React.Component {
	state = {
		email: '',
		pass: '',
		nae: '',
		errorEmail: '',
		passOkay: 'none',
		passError: 'none',
		lowerCaseError: 'ui red message',
		upperCaseError: 'ui red message',
		numberError: 'ui red message',
		speicalError: 'ui red message',
		fadeOut: ''
	};
	// HELPER FUNCTIONS
	validateEmail(email) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	validatePassword(pass) {
		if (this.state.pass == '') {
			this.setState({
				lowerCaseError: 'ui red message',
				upperCaseError: 'ui red message',
				numberError: 'ui red message',
				speicalError: 'ui red message'
			});
		}
		let lowerCaseLetters = /[a-z]/g.test(pass);
		let upperCaseLetters = /[A-Z]/g.test(pass);
		let numbers = /[0-9]/g.test(pass);
		let speicalCharacter = /(?=.*[!@#$%^&*])/.test(pass);

		if (lowerCaseLetters == true) {
			this.setState({ lowerCaseError: 'ui green message' });
		} else {
			this.setState({ lowerCaseError: 'ui red message' });
		}
		if (upperCaseLetters == true) {
			this.setState({ upperCaseError: 'ui green message' });
		} else {
			this.setState({ upperCaseError: 'ui red message' });
		}
		if (numbers == true) {
			this.setState({ numberError: 'ui green message' });
		} else {
			this.setState({ numberError: 'ui red message' });
		}
		if (speicalCharacter == true) {
			this.setState({ speicalError: 'ui green message' });
		} else {
			this.setState({ speicalError: 'ui red message' });
		}
		if (
			lowerCaseLetters == upperCaseLetters &&
			numbers == speicalCharacter &&
			(numbers == true && lowerCaseLetters == true)
		) {
			// EVERYTHING IS TRUE
			this.setState({ passError: 'none', passOkay: 'block' });
			setTimeout(() => {
				this.setState({ fadeOut: 'animate__animated animate__fadeOut' });
			}, 2000);
			setTimeout(() => {
				this.setState({ passOkay: 'none' });
			}, 2500);
		}
	}
	// INPUT VALIDATION
	inputValidation() {
		if (this.state.email !== '') {
			if (this.validateEmail(this.state.email) == false) {
				this.setState({ errorEmail: 'error' });
			} else {
				this.setState({ errorEmail: '' });
			}
		}
		if (this.state.pass != '') {
			this.setState({ passError: 'block' });
			this.validatePassword(this.state.pass);
		}
	}
	// REDIRECT TO SIGN IN
	onSignInForm = () => {
		this.props.onSignInBtnFromSignUpPage();
	};

	// Sign up
	onClickSignUp = () => {
		this.props.onClickSignUpBtn(this.state.name, this.state.email, this.state.pass);
	};

	render() {
		return (
			<div className="SignUpContainer w-25 m-auto" style={{ display: this.props.signUpDisplay }}>
				<h2 className="ui header text-center">Sign up</h2>
				<div
					className="loading ui segment"
					style={{ display: this.props.displayLoading, position: 'absolute' }}
				/>
				<label>Name</label>
				<div className="ui input column w-100 mt-2 mb-2" style={{ padding: '0' }}>
					<input
						type="email"
						value={this.state.name}
						onChange={(e) => {
							this.setState({ name: e.target.value });
						}}
						placeholder="Enter your name"
					/>
				</div>
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
							this.setState({ pass: e.target.value, passError: 'block' });
							this.inputValidation();
						}}
						className={this.state.error}
						placeholder="Enter your password"
					/>
				</div>
				<div style={{ display: this.state.passError }}>
					<ul>
						<li className={this.state.lowerCaseError + ' animate__animated animate__fadeIn'}>
							<p>
								<i className="check circle icon" /> Atleast one lower case letter
							</p>
						</li>
						<li className={this.state.upperCaseError + ' animate__animated animate__fadeIn'}>
							<p>
								<i className="check circle icon" /> Atleast one upper case letter
							</p>
						</li>
						<li className={this.state.numberError + ' animate__animated animate__fadeIn'}>
							<p>
								<i className="check circle icon" /> Atleast one number
							</p>
						</li>
						<li className={this.state.speicalError + ' animate__animated animate__fadeIn'}>
							<p>
								<i className="check circle icon" /> Atleast one speical character
							</p>
						</li>
					</ul>
				</div>
				<div className={'ui green message ' + this.state.fadeOut} style={{ display: this.state.passOkay }}>
					<p>Password contains all the valid characters.</p>
				</div>
				<div className={this.props.signUpError}>
					<p>User already exists</p>
				</div>
				<div
					className="ui animated button w-100 signInBtn"
					tabIndex="0"
					onClick={this.onClickSignUp}
					style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
				>
					<div className="visible content">Sign up</div>
					<div className="hidden content">
						<i className="right arrow icon" />
					</div>
				</div>
				<div className="ui horizontal divider">Or</div>
				<div className="d-flex">
					<div
						className="ui animated button w-100"
						tabIndex="0"
						onClick={this.onSignInForm}
						style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
					>
						<div className="visible content">Sign in</div>
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

export default SignUpForm;
