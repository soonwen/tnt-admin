/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import CreateEntryTable from './Create/CreateEntryTable'
import SearchResultTable from './Search/SearchResultTable'
import SearchResultRenderer from '../Container/SearchResultRenderer'

import Main from './Main/Main'
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
				<Router history={browserHistory}>
					<Route path="/dashboard" component={Main}>
						<IndexRedirect to="/dashboard/search" />
						<Route path="search" component={SearchResultRenderer}>
							<Route path="update/:id" />
						</Route>
						<Route path="create" component={CreateEntryTable}/>
					</Route>
				</Router>
			</Provider>

		);
	}
	componentDidUpdate() {
		// This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
		componentHandler.upgradeDom();

	}
}