/**
 * Created by robertzzy on 06/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';



export default class TypeChooser extends React.Component{
	constructor() {
		super();
	}
	render(){
		return(
			<div className="demo-avatar-dropdown">
				<span>hello@example.com</span>
				<div className="mdl-layout-spacer"></div>
				<button ref="selectorbtn" id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
					<i className="material-icons" role="presentation">arrow_drop_down</i>
					<span className="visuallyhidden">Accounts</span>
					<span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
				<div className="mdl-menu__container is-upgraded"><div className="mdl-menu__outline mdl-menu--bottom-right"></div><ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events" htmlFor="accbtn" data-upgraded=",MaterialMenu,MaterialRipple">
					<li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple">hello@example.com<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span></li>
					<li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple">info@example.com<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span></li>
					<li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple"><i className="material-icons">add</i>Add another account...<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span></li>
				</ul></div>
			</div>
		)
	}

	componentDidMount() {
		componentHandler.register({constructor: this, classAsString: 'TypeSelector', cssClass:""});
		componentHandler.upgradeElement(ReactDOM.findDOMNode(this.refs.selectorbtn), 'TypeSelector');
	}
}