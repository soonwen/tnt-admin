/**
 * Created by robertzzy on 13/07/16.
 */
import {selectSearchType, fetchMuscleGroupResult, fetchEquipmentResult, fetchExerciseResult, fetchMuscleResult} from '../Actions/actions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import TypeChooser from '../Component/Search/SearchBar'


const mapStateToProps = (state) => {
	return {
		type: state.renderTypeChoice
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
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