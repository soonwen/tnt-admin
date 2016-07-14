/**
 * Created by robertzzy on 13/07/16.
 */
import {fetchAllEquipment, fetchAllMuscle, selectSearchType} from '../Actions/actions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import DataTypeChooser from '../Component/Header/DataTypeChooser'


const mapStateToProps = (state) => {
	return {
		selection: state.renderTypeChoice
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemSelected: (eventKey, event) => {
			switch (eventKey){
				case actionTypes.SEARCH_MUSCLE_GROUP:
					dispatch(fetchAllMuscle());
					break;
				case actionTypes.SEARCH_EXERCISE:
					dispatch(fetchAllMuscle());
					dispatch(fetchAllEquipment());
					break;
			}
			dispatch(selectSearchType(eventKey))
		}
	}
};
const CreateEntryTypeChooser = connect(
	mapStateToProps,
	mapDispatchToProps
)(DataTypeChooser);

export default CreateEntryTypeChooser