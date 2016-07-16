/**
 * Created by robertzzy on 13/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import * as modelTypes from '../../model'


function translateAction(actionType){
	switch (actionType){
		case modelTypes.EXERCISE:
			return "动作";
		case modelTypes.EQUIPMENT:
			return "器械";
		case modelTypes.MUSCLE:
			return "肌肉";
		case modelTypes.MUSCLE_GROUP:
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
				<MenuItem eventKey={modelTypes.EXERCISE}>{translateAction(modelTypes.EXERCISE)}</MenuItem>
				<MenuItem eventKey={modelTypes.EQUIPMENT}>{translateAction(modelTypes.EQUIPMENT)}</MenuItem>
				<MenuItem eventKey={modelTypes.MUSCLE}>{translateAction(modelTypes.MUSCLE)}</MenuItem>
				<MenuItem eventKey={modelTypes.MUSCLE_GROUP}>{translateAction(modelTypes.MUSCLE_GROUP)}</MenuItem>
			</DropdownButton>
		)
	}



}

DataTypeChooser.propTypes = {
	onItemSelected: React.PropTypes.func.isRequired,
	selection: React.PropTypes.string.isRequired
};

export default DataTypeChooser