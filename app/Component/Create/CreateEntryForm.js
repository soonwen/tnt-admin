/**
 * Created by robertzzy on 13/07/16.
 */
'use strict';

import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import CreateEntryFormItem from './CreateEntryFormItem'
import * as modelTypes from '../../model'

class CreateEntryForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
				<form>
					{this.props.entryTypes.map((entryType) =>{
						return <CreateEntryFormItem key={entryType.header} entryType={entryType}/>
					})
					}
					<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={()=>this.props.createEntry(this.formulateRequest(), this.props.type)}>
					创建
					</button>
				</form>
		);
	}

	formulateRequest(){
		let request={};
		this.props.entryTypes.map((entryType) =>{
			switch (entryType.type){
				case "text":
					request[entryType.header] = document.getElementById(entryType.header).value;
					break;
				case "multi-select":
					let selections= [];
					let	selectOptions = document.getElementById(entryType.header).options;
					for(let i=0; i<selectOptions.length; i++){
						if(selectOptions[i].selected){
							selections.push(selectOptions[i].value)
						}
					}
					request[entryType.header] = selections;
					break;

			}

		});
		console.log('formulated request');
		console.log(request);
		return request;
	}
	componentDidMount(){
		this.props.fetchAll(this.props.type);

	}
	componentDidUpdate(){
		if(this.props.createRequestSent){
			console.log('Entry created: '+ this.props.createResult);
			if(this.props.createResult){
				alert('创建成功')
			}else{
				alert('创建失败')
			}
			this.props.acknowledgeResult()
		}
	}
}

CreateEntryForm.propTypes =
{
	type: React.PropTypes.string,
	entryTypes: React.PropTypes.array,
	fetchAll: React.PropTypes.func.isRequired,
	addInputEntry: React.PropTypes.func.isRequired,
	createEntry: React.PropTypes.func.isRequired,
	createResult: React.PropTypes.bool.isRequired,
	createRequestSent: React.PropTypes.bool.isRequired,
	acknowledgeResult: React.PropTypes.func.isRequired
};

export default CreateEntryForm;