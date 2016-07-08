'use strict';

import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import TypeChooser from './TypeChooser'

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render(){
	 return (
			 <div className="mdl-layout mdl-js-layout">
			 	<Header/>
				 <main className="mdl-layout__content">
					 <div className="page-content">
						 <TypeChooser/>
						 {this.props.children}
					 </div>
				 </main>
			 	<Footer/>
			 </div>
	 );
	}
}