/**
 * Created by robertzzy on 10/07/16.
 */
import { connect } from 'react-redux'
import SearchResultTable from '../Component/Search/SearchResultTable'
import {deleteMuscleGroup, deleteEquipment, deleteExercise, deleteMuscle, deleteResourceRequested, deleteRequestCanceled, resourceToUpdateChosen, deleteResourceErrorAcknowledged} from '../Actions/actions'
import * as models from '../model'
import {browserHistory} from 'react-router'


const mapStateToProps = (state) => {
	return {
		results: state.searchResult,
		deleteResourceState: state.deleteResourceState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		cancelDeleteRequest: ()=>{
			dispatch(deleteRequestCanceled())

		},
		requestDelete:(id) => {
			dispatch(deleteResourceRequested(id))
		},

		deleteResource: (id, type) =>{
			switch (type){
				case models.EQUIPMENT:
					dispatch(deleteEquipment(id));
					break;
				case models.EXERCISE:
					dispatch(deleteExercise(id));
					break;
				case models.MUSCLE_GROUP:
					dispatch(deleteMuscleGroup(id));
					break;
				case models.MUSCLE:
					dispatch(deleteMuscle(id));
					break;
			}
		},
		updateResource:(resource) =>{
			dispatch(resourceToUpdateChosen(resource));
			browserHistory.push('/dashboard/update');
		},
		deleteResourceErrorAcknowledged:() =>{
			dispatch(deleteResourceErrorAcknowledged());
		}
	}
};
const SearchResultRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResultTable);

export default SearchResultRenderer