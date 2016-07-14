/**
 * Created by robertzzy on 13/07/16.
 */
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import CreateEntryForm from '../Component/Create/CreateEntryForm'
import {fetchAllEquipment, fetchAllMuscle} from '../Actions/actions'


const mapStateToProps = (state) => {
	let entryStructure = [];
	switch (state.renderTypeChoice){
		case actionTypes.SEARCH_MUSCLE_GROUP:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'muscles', headerText:'肌肉', type:'multi-select', data:state.allMuscles});
			break;
		case actionTypes.SEARCH_EQUIPMENT:
			break;
		case actionTypes.SEARCH_MUSCLE:
			break;
		case actionTypes.SEARCH_EXERCISE:
			break;
	}
	return {
		type: state.renderTypeChoice,
		entryTypes: entryStructure
	}

};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: (type) => {
			switch (type){
				case actionTypes.SEARCH_MUSCLE_GROUP:
					dispatch(fetchAllMuscle());
					break;
				case actionTypes.SEARCH_EXERCISE:
					dispatch(fetchAllMuscle());
					dispatch(fetchAllEquipment());
					break;

			}
		}
	}
};
const CreateEntry = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateEntryForm);

export default CreateEntry