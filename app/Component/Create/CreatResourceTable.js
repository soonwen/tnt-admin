/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import CreateResourceTypeChooser from '../../Container/CreateResourceTypeChooser'
import CreateResource from '../../Container/CreateResource'
if (process.env.BROWSER) {
	require('./CreateResourceTable.sass');
}

class CreateResourceTable extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div>
				<div className="create-entry-type-chooser">
					<CreateResourceTypeChooser />
				</div>
				<CreateResource/>
			</div>
		);
	}
}

export default CreateResourceTable;