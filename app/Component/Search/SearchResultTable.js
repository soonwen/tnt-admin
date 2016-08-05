/**
 * Created by robertzzy on 05/07/16.
 */
'use strict';

import React from 'react';
import PerformSearch from '../../Container/PerformSearch'
import SearchResultHeader from './SearchResultHeader'
import SearchResultItem from './SearchResultItem'
import {Modal, Button} from  'react-bootstrap'



if (process.env.BROWSER) {
	require('./SearchResultTable.sass');
}
class SearchResultTable extends React.Component {
	constructor(props) {
		super(props);
	}

	getNameForId(){
		for(let data of this.props.results.data){
			if(data['_id'] == this.props.deleteResourceState.id){
				return data['name']
			}
		}
	}
	render(){
		return (
		<div>
			<PerformSearch />
			<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
						<SearchResultHeader headers={this.props.results.headerTexts}/>
						<tbody>
							{this.props.results.data.map((result) =>{
								return <SearchResultItem key={result['_id']} headers={this.props.results.headers} result={result} requestDelete={this.props.requestDelete} requestUpdate={this.props.updateResource}/>
								})
							}
						</tbody>
					</table>
			<Modal show={this.props.deleteResourceState.popup} onHide={this.props.cancelDeleteRequest}>
				<Modal.Header>
					<Modal.Title>确定删除 {this.getNameForId()}</Modal.Title>
				</Modal.Header>
				<Modal.Footer>
					<Button onClick={()=>this.props.deleteResource(this.props.deleteResourceState.id, this.props.results.type)}>
						确定
					</Button>
					<Button onClick={()=>this.props.cancelDeleteRequest()}>
						取消
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
		);
	}

	componentDidUpdate(){
		if(this.props.deleteResourceState.exceptionMessage != "" && this.props.deleteResourceState.exceptionMessage != ""){
			alert('删除失败: '+this.props.deleteResourceState.exceptionMessage);
			this.props.deleteResourceErrorAcknowledged();
		}
	}

}

SearchResultTable.propTypes = {
	results: React.PropTypes.object,
	deleteResourceState: React.PropTypes.object,
	requestDelete: React.PropTypes.func.isRequired,
	deleteResource: React.PropTypes.func.isRequired,
	cancelDeleteRequest: React.PropTypes.func.isRequired,
	updateResource: React.PropTypes.func.isRequired,
	deleteResourceErrorAcknowledged: React.PropTypes.func.isRequired
};

export default SearchResultTable