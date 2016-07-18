/**
 * Created by robertzzy on 17/07/16.
 */
'use strict';

import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import LoginRenderer from '../../Container/LoginRenderer'
import {componentHandler} from 'material-design-lite/material'
if (process.env.BROWSER) {
	require('./Login.sass');
}

export default class Login extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="mdl-layout mdl-js-layout">
				<Jumbotron>
					<h1>TNT 数据管理</h1>
					<p>登录</p>
				</Jumbotron>
				<LoginRenderer/>

			</div>
		);
	}

}