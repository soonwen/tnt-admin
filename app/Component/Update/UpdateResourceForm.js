/**
 * Created by robertzzy on 01/08/16.
 */
'use strict';

import React from 'react';
import * as updateResourceStates from './updateResourceState'
import BasicResourceForm from '../BasicResourceForm'
import log from '../../../LOGGER'
import { browserHistory } from 'react-router'
import * as updateResourceRequirementStates from './updateResourceRequirementState'

if (process.env.BROWSER) {
	require('./UpdateResourceForm.sass');
}

class UpdateResourceForm extends BasicResourceForm {
	constructor(props) {
		super(props);
	}
	render(){
		return <div className="update-form">{ super.render()}</div>
	}

	handleSubmit(event){
		this.props.updateResource(event, this.formulateRequest(), this.props.type);
	}


	componentDidMount() {
		super.componentDidMount();
		this.fillResourceToFields();
		if(this.props.resource['_id'] == undefined){
			browserHistory.push('/dashboard/search');
		}
	}

	fillResourceToFields(){
		console.log("filling fields");
		this.props.entryTypes.map((entryType) =>{
			switch (entryType.type){
				case "text":
				case "textarea":
					 document.getElementById(entryType.header).value = this.props.resource[entryType.header];
					break;
				case "multi-select":
					let selections= this.props.resource[entryType.header];
					let	multiSelectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i< multiSelectOptions.length; i++){
						if(selections.includes(multiSelectOptions[i].value)){
							multiSelectOptions[i].selected = true
						}
					}
					break;
				case "select":
					let	selectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i<selectOptions.length; i++){
						if(this.props.resource[selectOptions[i]] >= 0){
							selectOptions[i].selected = true
						}
					}
					break;
			}

		});
	}


	formulateRequest() {
		let request = super.formulateRequest();
		request['_id'] = this.props.resource['_id'];
		return request;
	}

	componentDidUpdate(){
		if(this.props.updateResourceRequirementState == updateResourceRequirementStates.UPDATE_RESOURCE_REQUIREMENT_RECEIVED){
			this.fillResourceToFields();
			this.props.fieldsFilled();
		}
		switch (this.props.updateResourceState){
			case updateResourceStates.UPDATE_RESOURCE_STATE_IDLE:
				log('creating entry');
				break;
			case updateResourceStates.UPDATE_RESOURCE_STATE_PENDING:
				log('create entry request sent');
				break;
			case updateResourceStates.UPDATE_RESOURCE_STATE_RECEIVED:
				log('create entry response received, render');
				if(this.props.updateResourceResult.success){
					alert('更新成功');
					this.clearFields();
					browserHistory.push('/dashboard/search');
				}else{
					alert('更新失败: '+this.props.updateResourceResult.exceptionMessage)
				}
				this.props.acknowledgeUpdateResult();

				break;
		}
	}
}

UpdateResourceForm.propTypes =
{
	resource: React.PropTypes.object.isRequired,
	updateResourceState: React.PropTypes.string.isRequired,
	updateResourceResult: React.PropTypes.object,
	updateResource: React.PropTypes.func.isRequired,
	acknowledgeUpdateResult: React.PropTypes.func.isRequired,
	updateResourceRequirementState: React.PropTypes.string.isRequired,
	fieldsFilled: React.PropTypes.func.isRequired

};

export default UpdateResourceForm;