/**
 * Created by robertzzy on 06/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap'

if (process.env.BROWSER) {
	require('./TypeChooser.sass');
}

export default class TypeChooser extends React.Component{
	constructor() {
		super();
	}
	render(){
		return(
			<div className="search-type-chooser">
				<DropdownButton bsStyle="default" id="dropdown-basic" title="选择搜索类型">
					<MenuItem eventKey="exercise">动作</MenuItem>
					<MenuItem eventKey="equipment">器械</MenuItem>
					<MenuItem eventKey="muscle">肌肉</MenuItem>
					<MenuItem eventKey="muscleGroup">肌肉组</MenuItem>
				</DropdownButton>
			</div>
		)
	}

}