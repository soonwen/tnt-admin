/**
 * Created by robertzzy on 05/07/16.
 */
'use strict';

import React from 'react';
import SearchTypeChooser from '../../Container/SearchTypeChooser'

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
			<SearchTypeChooser onSearchClicked={this.props.onSearchClicked}/>
			<table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
						<thead>
						<tr>
							<th className="mdl-data-table__cell--non-numeric">Material</th>
							<th>Quantity</th>
							<th>Unit price</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
							<td>25</td>
							<td>$2.90</td>
						</tr>
						<tr>
							<td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
							<td>50</td>
							<td>$1.25</td>
						</tr>
						<tr>
							<td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
							<td>10</td>
							<td>$2.35</td>
						</tr>
						</tbody>
					</table>
			</div>
		);
	}
}

SearchResultTable.propTypes = {
	onSearchClicked: React.PropTypes.func.isRequired,
	result: React.PropTypes.string
};

export default SearchResultTable