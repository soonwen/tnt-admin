/**
 * Created by robertzzy on 05/07/16.
 */
import React from 'react';
import componentHandler from 'material-design-lite'
import ReactDOM from 'react-dom';


export default class Footer extends React.Component{
	constructor() {
		super();
	}

	render(){
		return(
			<footer className="mdl-mini-footer navbar-fixed-bottom">
				<div className="mdl-mini-footer__left-section">
					<div className="mdl-logo">Title</div>
					<ul className="mdl-mini-footer__link-list">
						<li><a href="#">Help</a></li>
						<li><a href="#">Privacy & Terms</a></li>
					</ul>
				</div>
			</footer>
		)
	}
}