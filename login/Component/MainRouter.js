/**
 * Created by robertzzy on 17/07/16.
 */
'use strict';

import React from 'react';
import {Router, Route, hashHistory} from 'react-router'

import Login from './Login/Login'
import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from '../Reducer/index'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
let store = createStore(mainReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export default class MainRouter extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path="/" component={Login}/>
				</Router>
			</Provider>

		);
	}
}