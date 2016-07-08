/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import CreateEntryTable from './CreateEntryTable'
import SearchResultTable from './Search/SearchResultTable'
import Welcome from './Welcome'
import Main from './Main/Main'


export default class MainRouter extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={Welcome} />
					<Route path="/search" component={SearchResultTable}/>
					<Route path="/create" component={CreateEntryTable}/>
				</Route>
			</Router>

		);
	}
}