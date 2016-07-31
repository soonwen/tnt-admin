/**
 * Created by robertzzy on 06/07/16.
 */
'use strict';

import React from 'react';
import CreateEntryTypeChooser from '../../Container/CreateEntryTypeChooser'
import CreateEntry from '../../Container/CreateEntry'
if (process.env.BROWSER) {
	require('./CreateEntryTable.sass');
}

class CreateEntryTable extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
			<div>
				<div className="create-entry-type-chooser">
					<CreateEntryTypeChooser />
				</div>
				<CreateEntry/>
			</div>
		);
	}
}

export default CreateEntryTable;