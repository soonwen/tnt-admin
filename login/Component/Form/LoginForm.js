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
			<Form horizontal className="login-form" onSubmit={()=>this.props.onSubmit(document.getElementById("username").value, document.getElementById("password").value)}>
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
						<Button type="submit">
							登录
						</Button>
					</Col>
				</FormGroup>
				{this.props.loginState == loginStates.LOGIN_PENDING?
					<div className="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active" ></div>:null}
			</Form>
		);
	}

}

LoginForm.propTypes = {
	onSubmit: React.PropTypes.func.isRequired,
	loginState: React.PropTypes.string.isRequired
};

export default LoginForm