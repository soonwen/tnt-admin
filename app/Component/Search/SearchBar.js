/**
 * Created by robertzzy on 06/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import SearchField from './SearchField'
import * as actionTypes from '../../Actions/actionTypes'
import SearchTypeChooser from '../../Container/SearchTypeChooser'

if (process.env.BROWSER) {
	require('./SearchBar.sass');
}

class TypeChooser extends React.Component{

	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="search-type-chooser">
				<SearchTypeChooser/>
				<SearchField/>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={()=>this.props.onSearchClicked(document.getElementById("criteria-input").value, this.props.type)}>
					搜索
				</button>
			</div>
		)
	}



}

TypeChooser.propTypes = {
	onSearchClicked: React.PropTypes.func.isRequired,
	type: React.PropTypes.string.isRequired
};

export default TypeChooser