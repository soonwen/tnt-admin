/**
 * Created by robertzzy on 02/08/16.
 */
import { connect } from 'react-redux'
import UpdateResourceForm from '../Component/Update/UpdateResourceForm'
import {fetchAllEquipment, fetchAllMuscle, updateMuscleGroup,updateEquipment, updateMuscle, updateExercise, updateResourceResultAcknowledged, updateResourceRequirementFilled} from '../Actions/actions'
import * as modelTypes from '../model'
import {generateUIStructure} from '../resourceUIStructureGenerator'



const mapStateToProps = (state) => {
	return {
		resource: state.resourceToUpdate,
		formType: "更新",
		type: state.modelType,
		entryTypes: generateUIStructure(state.modelType, state),
		updateResourceState: state.updateResourceState,
		updateResourceResult: state.updateResourceResult,
		updateResourceRequirementState: state.updateResourceRequirementState
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

		updateResource: (event, payload, type) =>{
			event.preventDefault();
			switch (type){
				case modelTypes.MUSCLE_GROUP:
					dispatch(updateMuscleGroup(payload));
					break;
				case modelTypes.EXERCISE:
					dispatch(updateExercise(payload));
					break;
				case modelTypes.MUSCLE:
					dispatch(updateMuscle(payload));
					break;
				case modelTypes.EQUIPMENT:
					dispatch(updateEquipment(payload));
					break;

			}
		},

		acknowledgeUpdateResult:() =>{
			dispatch(updateResourceResultAcknowledged())
		},
		
		fieldsFilled:() =>{
			dispatch(updateResourceRequirementFilled())
		}
	}
};
const UpdateResource = connect(
	mapStateToProps,
	mapDispatchToProps
)(UpdateResourceForm);

export default UpdateResource