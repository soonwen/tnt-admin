/**
 * Created by robertzzy on 13/07/16.
 */
'use strict';

import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class CreateEntryForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
				<form>
					{this.props.entryTypes.map((entryType) =>{
						switch (entryType.type){
							case "text":
								return(
										<FormGroup controlId={entryType.header}>
											<ControlLabel>{entryType.headerText}</ControlLabel>
											<FormControl type={entryType.type}/>
										</FormGroup>
								) ;

							case "multi-select":
								return(
										<FormGroup controlId={entryType.header}>
											<ControlLabel>{entryType.headerText}</ControlLabel>
											<FormControl type="select" multiple>
												{entryType.data.map((data) =>{
													return(<option value={data}>{data}</option>)
												})}
											</FormControl>
										</FormGroup>
								) ;
						}

					})
					}
				</form>
		);
	}
	componentDidMount(){
		this.props.fetchAll(this.props.type)
	}
}

CreateEntryForm.propTypes =
{
	type: React.PropTypes.string,
	entryTypes: React.PropTypes.array,
	fetchAll: React.PropTypes.func.isRequired
};

export default CreateEntryForm;