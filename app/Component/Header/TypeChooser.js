/**
 * Created by robertzzy on 06/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import SearchField from './SearchField'
import * as actionTypes from '../../Actions/actionTypes'

if (process.env.BROWSER) {
	require('./TypeChooser.sass');
}

function translateAction(actionType){
	switch (actionType){
		case actionTypes.SEARCH_EXERCISE:
			return "动作";
		case actionTypes.SEARCH_EQUIPMENT:
			return "器械";
		case actionTypes.SEARCH_MUSCLE:
			return "肌肉";
		case actionTypes.SEARCH_MUSCLE_GROUP:
			return "肌肉组";
	}
}

class TypeChooser extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="search-type-chooser">
				<DropdownButton bsStyle="default" id="dropdown-basic" title={this.props.selection} onSelect={this.props.onItemSelected}>
					<MenuItem eventKey={actionTypes.SEARCH_EXERCISE}>{translateAction(actionTypes.SEARCH_EXERCISE)}</MenuItem>
					<MenuItem eventKey={actionTypes.SEARCH_EQUIPMENT}>{translateAction(actionTypes.SEARCH_EQUIPMENT)}</MenuItem>
					<MenuItem eventKey={actionTypes.SEARCH_MUSCLE}>{translateAction(actionTypes.SEARCH_MUSCLE)}</MenuItem>
					<MenuItem eventKey={actionTypes.SEARCH_MUSCLE_GROUP}>{translateAction(actionTypes.SEARCH_MUSCLE_GROUP)}</MenuItem>
				</DropdownButton>
				<SearchField/>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.props.onSearchClicked("muscleGroup", this.props.selection)}>
					搜索
				</button>
			</div>
		)
	}



}

TypeChooser.propTypes = {
	onItemSelected: React.PropTypes.func.isRequired,
	onSearchClicked: React.PropTypes.func.isRequired,
	selection: React.PropTypes.string.isRequired
};

export default TypeChooser