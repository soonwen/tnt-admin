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

	polishResult(resultField){
		if(Array.isArray(resultField)){
			let display = '';
			for(let item of resultField){
				display += (item +' ');
			}
			return display
		}else{
			return resultField
		}
	}

	render(){
		return (
				<tr>
					{this.props.headers.map((header) =>
					{
						return <td key={header}>{this.polishResult(this.props.result[header])}</td>
					})}
					<td >
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent " onClick={()=>this.props.requestDelete(this.props.result['_id'])}>
							删除
						</button>
					</td>
					<td>
						<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={()=>this.props.requestUpdate(this.props.result)}>
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
	requestDelete: React.PropTypes.func,
	requestUpdate: React.PropTypes.func
};

export default SearchResultItem