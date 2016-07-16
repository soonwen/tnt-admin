/**
 * Created by robertzzy on 12/07/16.
 */
'use strict';

import React from 'react';

if (process.env.BROWSER) {
	require('./SearchResultItem.sass');
}
class SearchResultItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
				<tr>
					{this.props.headers.map((header) =>
					{
						return <td key={header}>{this.props.result[header]}</td>
					})}
				</tr>
		);
	}
}

SearchResultItem.propTypes = {
	result: React.PropTypes.object,
	headers: React.PropTypes.array
};

export default SearchResultItem