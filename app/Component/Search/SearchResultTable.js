/**
 * Created by robertzzy on 05/07/16.
 */
'use strict';

import React from 'react';
import SearchTypeChooser from '../../Container/SearchTypeChooser'
import SearchResultHeader from './SearchResultHeader'
import SearchResultItem from './SearchResultItem'



if (process.env.BROWSER) {
	require('./SearchResultTable.sass');
}
class SearchResultTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
		<div>
			<SearchTypeChooser />
			<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<SearchResultHeader headers={this.props.results.headers}/>
						<tbody>
							{this.props.results.data.map((result) =>{
								return <SearchResultItem headers={this.props.results.headers} result={result}/>
								})
							}
						</tbody>
					</table>
			</div>
		);
	}
}

SearchResultTable.propTypes = {
	results: React.PropTypes.object
};

export default SearchResultTable