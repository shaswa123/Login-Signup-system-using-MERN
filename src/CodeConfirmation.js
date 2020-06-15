import React from 'react';

class CodeConfirmation extends React.Component {
	state = { email: '', code: '' };

	onSignInBtn = () => {
		this.props.signInPageVisible();
	};

	onClickSubmit = () => {
		this.props.confirmCode();
	};

	render() {
		return (
			<div
				style={{ display: this.props.displaySetting }}
				className="animate__animated animate__fadeIn successfulContainer"
			>
				<h2 className="ui header text-center">Code confirmation</h2>
				<label>Email address</label>
				<div className={'ui input column w-100 mt-2 ' + this.state.errorEmail} style={{ padding: '0' }}>
					<input
						type="email"
						value={this.state.email}
						onChange={(e) => {
							this.setState({ email: e.target.value });
						}}
						placeholder="Enter your email"
					/>
				</div>
				<div className="ui input column w-100 mt-2" style={{ padding: '0' }}>
					<label>Email code</label>
					<input
						type="text"
						value={this.state.pass}
						onChange={(e) => {
							this.setState({ code: e.target.value });
						}}
						placeholder="Enter your password"
					/>
				</div>
				<div
					className="ui animated button w-100 signInBtn"
					tabIndex="0"
					onClick={this.onClickSubmit}
					style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
				>
					<div className="visible content">Submit</div>
					<div className="hidden content">
						<i className="right arrow icon" />
					</div>
				</div>
				<div className="ui horizontal divider">Or</div>

				<div
					className="ui animated button w-100"
					tabIndex="0"
					onClick={this.onSignInBtn}
					style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
				>
					<div className="visible content">Sign in</div>
					<div className="hidden content">
						<i className="right arrow icon" />
					</div>
				</div>
			</div>
		);
	}
}

export default CodeConfirmation;
