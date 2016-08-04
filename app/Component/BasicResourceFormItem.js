/**
 * Created by robertzzy on 01/08/16.
 */

import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class BasicResourceFormItem extends React.Component {
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

BasicResourceFormItem.propTypes =
{
	entryType: React.PropTypes.object
};

export default BasicResourceFormItem;