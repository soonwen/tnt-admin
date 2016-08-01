/**
 * Created by robertzzy on 13/07/16.
 */
'use strict';

import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import CreateEntryFormItem from './CreateEntryFormItem'
import * as modelTypes from '../../model'
import * as createEntryStates from './createEntryState'
import log from '../../../LOGGER'

class CreateEntryForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
				<form>
					{this.props.entryTypes.map((entryType) =>{
						return <CreateEntryFormItem key={entryType.header} entryType={entryType}/>
					})}
					{this.props.type == ""?null:
							<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" onClick={(event)=>{this.handleSubmit(event)}}>
								创建
							</button>}

				</form>
		);
	}
	handleSubmit(event){
		this.props.createEntry(event, this.formulateRequest(), this.props.type);
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
	componentDidUpdate(){
		switch (this.props.createEntryState){
			case createEntryStates.CREATE_ENTRY_STATE_CREATE:
				log('creating entry');
				break;
			case createEntryStates.CREATE_ENTRY_STATE_PENDING:
				log('create entry request sent');
				break;
			case createEntryStates.CREATE_ENTRY_STATE_RECEIVED:
				log('create entry response received, render');
				if(this.props.createEntryResult.success){
					alert('创建成功');
					this.clearFields();
				}else{
					alert('创建失败: '+this.props.createEntryResult.exceptionMessage)
				}
				this.props.acknowledgeResult();
				break;
		}
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

CreateEntryForm.propTypes =
{
	type: React.PropTypes.string,
	entryTypes: React.PropTypes.array,
	createEntryState: React.PropTypes.string.isRequired,
	createEntryResult: React.PropTypes.object,
	fetchAll: React.PropTypes.func.isRequired,
	addInputEntry: React.PropTypes.func.isRequired,
	createEntry: React.PropTypes.func.isRequired,
	acknowledgeResult: React.PropTypes.func.isRequired
};

export default CreateEntryForm;