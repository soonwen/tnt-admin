/**
 * Created by robertzzy on 01/08/16.
 */

'use strict';

import React from 'react';
import BasicResourceFormItem from './BasicResourceFormItem'
import log from '../../LOGGER'

class BasicResourceForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<form>
				{this.props.entryTypes.map((entryType) =>{
					return <BasicResourceFormItem key={entryType.header} entryType={entryType}/>
				})}
				{this.props.type == ""?null:
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" onClick={(event)=>{this.handleSubmit(event)}}>
						{this.props.formType}
					</button>}

			</form>
		);
	}
	handleSubmit(event){
		
	}
	
	formulateRequest(){
		let request={};
		this.props.entryTypes.map((entryType) =>{
			switch (entryType.type){
				case "text":
				case "textarea":
					request[entryType.header] = document.getElementById(entryType.header).value;
					break;
				case "multi-select":
					let selections= [];
					let	multiSelectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i<multiSelectOptions.length; i++){
						if(multiSelectOptions[i].selected){
							selections.push(multiSelectOptions[i].value)
						}
					}
					request[entryType.header] = selections;
					break;
				case "select":
					let choices = entryType.header.split('-');
					let	selectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i<selectOptions.length; i++){
						if(selectOptions[i].selected){
							request[choices[i]] = 0;
						}
					}
					break;
			}

		});
		log('formulated request');
		log(request);
		return request;
	}
	componentDidMount(){
		this.props.fetchAll(this.props.type);

	}
	clearFields(){
		this.props.entryTypes.map((entryType) =>{
			switch (entryType.type){
				case "text":
				case "textarea":
					document.getElementById(entryType.header).value = "";
					break;
				case "multi-select":
					let	multiSelectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i<multiSelectOptions.length; i++){
						if(multiSelectOptions[i].selected){
							multiSelectOptions[i].selected = false
						}
					}
					break;
				case "select":
					let	selectOptions = document.getElementById(entryType.header).options;
					selectOptions[0].selected = true;
					break;
			}

		});
	}
}

BasicResourceForm.propTypes =
{
	formType: React.PropTypes.string.isRequired,
	type: React.PropTypes.string,
	entryTypes: React.PropTypes.array,
	fetchAll: React.PropTypes.func.isRequired
};

export default BasicResourceForm;