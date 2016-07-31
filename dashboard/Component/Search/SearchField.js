/**
 * Created by robertzzy on 09/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';

if (process.env.BROWSER) {
	require('./SearchField.sass');
}

export default class SearchField extends React.Component{
	constructor() {
		super();
	}
	render(){
		return(
			<form action="#" className="search-field">
				<div className="mdl-textfield mdl-js-textfield">
					<input className="mdl-textfield__input" type="text" id="criteria-input"/>
					<label className="mdl-textfield__label" htmlFor="criteria-input">关键字...</label>
				</div>
			</form>
	)
	}



}