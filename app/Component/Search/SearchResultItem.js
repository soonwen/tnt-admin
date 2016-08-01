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
					<td >
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent " onClick={()=>this.props.requestDelete(this.props.result['_id'])}>
							删除
						</button>
					</td>
					<td>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={()=>{console.log('update resource')}}>
							更新
						</button>
					</td>
				</tr>
		);
	}
}

SearchResultItem.propTypes = {
	result: React.PropTypes.object,
	headers: React.PropTypes.array,
	requestDelete: React.PropTypes.func
};

export default SearchResultItem