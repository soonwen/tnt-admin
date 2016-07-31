/**
 * Created by robertzzy on 17/07/16.
 */
'use strict';

import React from 'react';
import {Form, FormGroup, FormControl, Col, ControlLabel, Button} from 'react-bootstrap'
import * as loginStates from '../../loginStates'

if (process.env.BROWSER) {
	require('./LoginForm.sass');
}

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Form horizontal className="login-form">
				<FormGroup controlId="username">
					<Col>
						<FormControl type="text" placeholder="用户名" bsClass="login-field"/>
					</Col>
				</FormGroup>
				<FormGroup controlId="password">
					<Col>
						<FormControl type="password" placeholder="密码" bsClass="login-field"/>
					</Col>
				</FormGroup>
				<FormGroup controlId="password">
					<Col>
						<Button onClick={()=>this.props.onSubmit(document.getElementById("username").value, document.getElementById("password").value)}>
							登录
						</Button>
					</Col>
				</FormGroup>
				{this.props.loginState == loginStates.LOGIN_PENDING?
					<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" ></div>:null}
			</Form>
		);
	}
	componentDidMount() {
		this.props.checkSession()
	}

}

LoginForm.propTypes = {
	checkSession: React.PropTypes.func.isRequired,
	onSubmit: React.PropTypes.func.isRequired,
	loginState: React.PropTypes.string.isRequired,
	sessionState: React.PropTypes.string.isRequired
};

export default LoginForm