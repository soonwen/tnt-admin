'use strict';

import React from 'react';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
if (process.env.BROWSER) {
	require('./Main.sass');
}

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
				<div className="mdl-layout mdl-js-layout">
					<Header/>
					<main className="mdl-layout__content">
						<div className="page-content">
							{this.props.children}
						</div>
					</main>
					<Footer/>
				</div>
		);
	}

	componentDidUpdate() {
		// This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
		componentHandler.upgradeDom();

	}
}