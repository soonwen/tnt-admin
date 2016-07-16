/**
 * Created by robertzzy on 13/07/16.
 */
import {selectModel, fetchMuscleGroupResult, fetchEquipmentResult, fetchExerciseResult, fetchMuscleResult} from '../Actions/actions'
import { connect } from 'react-redux'
import TypeChooser from '../Component/Search/SearchBar'
import * as modelTypes from '../model'


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
				case modelTypes.MUSCLE_GROUP:
					dispatch(fetchMuscleGroupResult(keyword));
					break;
				case modelTypes.EQUIPMENT:
					dispatch(fetchEquipmentResult(keyword));
					break;
				case modelTypes.MUSCLE:
					dispatch(fetchMuscleResult(keyword));
					break;
				case modelTypes.EXERCISE:
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