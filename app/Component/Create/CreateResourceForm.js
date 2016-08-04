/**
 * Created by robertzzy on 13/07/16.
 */
'use strict';

import React from 'react';
import * as createResourceStates from './createResourceState'
import BasicResourceForm from '../BasicResourceForm'
import log from '../../../LOGGER'

class CreateResourceForm extends BasicResourceForm {
	constructor(props) {
		super(props);
	}
	render(){
		return super.render()
	}

	handleSubmit(event){
		this.props.createResource(event, this.formulateRequest(), this.props.type);
	}

	componentDidUpdate(){
		switch (this.props.createResourceState){
			case createResourceStates.CREATE_RESOURCE_STATE_IDLE:
				log('creating entry');
				break;
			case createResourceStates.CREATE_RESOURCE_STATE_PENDING:
				log('create entry request sent');
				break;
			case createResourceStates.CREATE_RESOURCE_STATE_RECEIVED:
				log('create entry response received, render');
				if(this.props.createResourceResult.success){
					alert('创建成功');
					this.clearFields();
				}else{
					alert('创建失败: '+this.props.createResourceResult.exceptionMessage)
				}
				this.props.acknowledgeResult();
				break;
		}
	}
}

CreateResourceForm.propTypes =
{
	createResourceState: React.PropTypes.string.isRequired,
	createResourceResult: React.PropTypes.object,
	createResource: React.PropTypes.func.isRequired,
	acknowledgeResult: React.PropTypes.func.isRequired
};

export default CreateResourceForm;