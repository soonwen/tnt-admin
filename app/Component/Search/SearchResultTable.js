/**
 * Created by robertzzy on 05/07/16.
 */
'use strict';

import React from 'react';
import PerformSearch from '../../Container/PerformSearch'
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
			<PerformSearch />
			<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<SearchResultHeader headers={this.props.results.headerTexts}/>
						<tbody>
							{this.props.results.data.map((result) =>{
								return <SearchResultItem key={result['_id']} headers={this.props.results.headers} result={result}/>
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