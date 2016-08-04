/**
 * Created by robertzzy on 10/07/16.
 */
import { connect } from 'react-redux'
import SearchResultTable from '../Component/Search/SearchResultTable'
import {deleteMuscleGroup, deleteEquipment, deleteExercise, deleteMuscle, deleteEntryRequested, deleteRequestCanceled, resourceToUpdateChosen} from '../Actions/actions'
import * as models from '../model'
import {browserHistory} from 'react-router'


const mapStateToProps = (state) => {
	return {
		results: state.searchResult,
		deleteEntryState: state.deleteEntryState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		cancelDeleteRequest: ()=>{
			dispatch(deleteRequestCanceled())

		},
		requestDelete:(id) => {
			dispatch(deleteEntryRequested(id))
		},

		deleteEntry: (id, type) =>{
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
		}
	}
};
const SearchResultRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResultTable);

export default SearchResultRenderer