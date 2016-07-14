/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import CreateEntryTable from './Create/CreateEntryTable'
import SearchResultTable from './Search/SearchResultTable'
import SearchResultRenderer from '../Container/SearchResultRenderer'

import Welcome from './Welcome'
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
				<Router history={hashHistory}>
					<Route path="/" component={Main}>
						<IndexRoute component={Welcome} />
						<Route path="/search" component={SearchResultRenderer}/>
						<Route path="/create" component={CreateEntryTable}/>
					</Route>
				</Router>
			</Provider>

		);
	}
}