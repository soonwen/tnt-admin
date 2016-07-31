/**
 * Created by robertzzy on 15/07/16.
 */
'use strict';

import React from 'react';
import {FormGroup, ControlLabel, FormControl, Radio} from 'react-bootstrap'

class CreateEntryFormItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		switch (this.props.entryType.type){
			case "text":
				return(
					<FormGroup controlId={this.props.entryType.header}>
						<ControlLabel>{this.props.entryType.headerText}</ControlLabel>
						<FormControl type={this.props.entryType.type}/>
					</FormGroup>
				) ;

			case "multi-select":
				return(
					<FormGroup controlId={this.props.entryType.header}>
						<ControlLabel>{this.props.entryType.headerText}</ControlLabel>
						<FormControl componentClass="select" multiple>
							{this.props.entryType.data.map((data) =>{
								return(<option key={data} value={data}>{data}</option>)
							})}
						</FormControl>
					</FormGroup>
				) ;

			case 'textarea':
				return(
					<FormGroup controlId={this.props.entryType.header}>
						<ControlLabel>{this.props.entryType.headerText}</ControlLabel>
						<FormControl componentClass={this.props.entryType.type}/>
					</FormGroup>
				);
			case 'select':
				return(
						<FormGroup controlId={this.props.entryType.header}>
							<ControlLabel>{this.props.entryType.headerText}</ControlLabel>
							<FormControl componentClass="select" placeholder={this.props.entryType.placeholder}>
								{this.props.entryType.data.map((data) =>{
									return(<option key={data} value={data}>{data}</option>)
								})}
							</FormControl>
						</FormGroup>

				)
		}
	}
}

CreateEntryFormItem.propTypes =
{
	entryType: React.PropTypes.object
};

export default CreateEntryFormItem;