import './stylesheets/Successful.css';

import React from 'react';

class Successful extends React.Component {
	onClickBtn = () => {
		this.props.resetStates();
	};

	render() {
		return (
			<div
				style={{ display: this.props.displaySetting }}
				className="animate__animated animate__fadeIn successfulContainer"
			>
				<h2 className="ui header text-center">{this.props.successfulMessage}</h2>
				<div className="successfulContainer w-25 m-auto text-center" style={{ marginTop: '3em' }}>
					<i className="check circle icon" />
					<div
						className="ui animated button w-100 m-auto"
						tabIndex="0"
						onClick={this.onClickBtn}
						style={{ color: 'white', marginTop: '0.5em', backgroundColor: '#212121' }}
					>
						<div className="visible content">Go back</div>
						<div className="hidden content">
							<i className="right arrow icon" style={{ fontSize: '15px' }} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Successful;
