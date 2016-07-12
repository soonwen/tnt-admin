/**
 * Created by robertzzy on 09/07/16.
 */

import {selectSearchType, fetchMuscleGroupResult, fetchEquipmentResult, fetchExerciseResult, fetchMuscleResult} from '../Actions/actions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import TypeChooser from '../Component/Header/TypeChooser'


const mapStateToProps = (state) => {
	return {
		selection: state.renderTypeChoice
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemSelected: (eventKey, event) => {
			dispatch(selectSearchType(eventKey))
		},
		onSearchClicked: (keyword, type) => {
			console.log('search for '+ type);
			switch (type){
				case actionTypes.SEARCH_MUSCLE_GROUP:
					dispatch(fetchMuscleGroupResult(keyword));
					break;
				case actionTypes.SEARCH_EQUIPMENT:
					dispatch(fetchEquipmentResult(keyword));
					break;
				case actionTypes.SEARCH_MUSCLE:
					dispatch(fetchMuscleResult(keyword));
					break;
				case actionTypes.SEARCH_EXERCISE:
					dispatch(fetchExerciseResult(keyword));
					break;

			}
		}
	}
};
const SearchTypeChooser = connect(
	mapStateToProps,
	mapDispatchToProps
	)(TypeChooser);

export default SearchTypeChooser