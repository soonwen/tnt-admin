/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import TypeChooser from './Header/TypeChooser'


export default class CreateEntryTable extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div>
				<TypeChooser/>
				<div>Create Entry Table</div>
			</div>
		);
	}
}