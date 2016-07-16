/**
 * Created by robertzzy on 12/07/16.
 */
'use strict';

import React from 'react';

if (process.env.BROWSER) {
	require('./SearchResultHeader.sass');
}
class SearchResultHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<thead>
			<tr>
				{this.props.headers.map((header)=>{
					return <th key={header}>{header}</th>

				})}
			</tr>
			</thead>
		);
	}
}

SearchResultHeader.propTypes = {
	headers: React.PropTypes.array
};

export default SearchResultHeader