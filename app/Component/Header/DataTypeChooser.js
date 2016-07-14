/**
 * Created by robertzzy on 13/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import * as actionTypes from '../../Actions/actionTypes'


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
	return "选择搜索类型";
}

class DataTypeChooser extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<DropdownButton bsStyle="default" id="dropdown-basic" title={translateAction(this.props.selection)} onSelect={this.props.onItemSelected}>
				<MenuItem eventKey={actionTypes.SEARCH_EXERCISE}>{translateAction(actionTypes.SEARCH_EXERCISE)}</MenuItem>
				<MenuItem eventKey={actionTypes.SEARCH_EQUIPMENT}>{translateAction(actionTypes.SEARCH_EQUIPMENT)}</MenuItem>
				<MenuItem eventKey={actionTypes.SEARCH_MUSCLE}>{translateAction(actionTypes.SEARCH_MUSCLE)}</MenuItem>
				<MenuItem eventKey={actionTypes.SEARCH_MUSCLE_GROUP}>{translateAction(actionTypes.SEARCH_MUSCLE_GROUP)}</MenuItem>
			</DropdownButton>
		)
	}



}

DataTypeChooser.propTypes = {
	onItemSelected: React.PropTypes.func.isRequired,
	selection: React.PropTypes.string.isRequired
};

export default DataTypeChooser