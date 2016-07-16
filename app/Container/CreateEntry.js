/**
 * Created by robertzzy on 13/07/16.
 */
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import CreateEntryForm from '../Component/Create/CreateEntryForm'
import {fetchAllEquipment, fetchAllMuscle, addCreateEntryField, createMuscleGroup, acknowledgeCreateEntryResult} from '../Actions/actions'
import * as modelTypes from '../model'



const mapStateToProps = (state) => {
	let entryStructure = [];
	switch (state.renderTypeChoice){
		case modelTypes.MUSCLE_GROUP:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'muscles', headerText:'肌肉', type:'multi-select', data:state.allMuscles});
			break;
		case modelTypes.EQUIPMENT:
			break;
		case modelTypes.MUSCLE:
			break;
		case modelTypes.EXERCISE:
			break;
	}
	return {
		type: state.renderTypeChoice,
		entryTypes: entryStructure,
		createRequestSent: state.createEntryRequestSent,
		createResult: state.createEntryResult
	}

};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAll: (type) => {
			switch (type){
				case modelTypes.MUSCLE_GROUP:
					dispatch(fetchAllMuscle());
					break;
				case modelTypes.EXERCISE:
					dispatch(fetchAllMuscle());
					dispatch(fetchAllEquipment());
					break;

			}
		},
		addInputEntry: (entryType) =>{
			dispatch(addCreateEntryField(entryType))
		},
		createEntry: (payload, type) =>{
			switch (type){
				case modelTypes.MUSCLE_GROUP:
					dispatch(createMuscleGroup(payload));
					break;
				case modelTypes.EXERCISE:
					break;

			}
		},
		acknowledgeResult: () =>{
			dispatch(acknowledgeCreateEntryResult());

		}
	}
};
const CreateEntry = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateEntryForm);

export default CreateEntry