'use strict';

import React from 'react';
import {Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import Login from './login/Component/Login/Login'
import CreateEntryTable from './dashboard/Component/Create/CreateEntryTable'
import SearchResultTable from './dashboard/Component/Search/SearchResultTable'
import SearchResultRenderer from './dashboard/Container/SearchResultRenderer'
import Dashboard from './dashboard/Component/Dashboard/Dashboard'

import { createStore, applyMiddleware, compose } from 'redux'
import mainReducer from './mainReducer'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'

let store = createStore(mainReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

export default class AppRouter extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={Login}/>
					<Route path="/login" component={Login}/>
					<Route path="/dashboard" component={Dashboard}>
						<IndexRedirect to="/dashboard/search" />
						<Route path="search" component={SearchResultRenderer}/>
						<Route path="create" component={CreateEntryTable}/>
					</Route>
				</Router>
			</Provider>

		);
	}
}