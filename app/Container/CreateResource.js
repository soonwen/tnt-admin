/**
 * Created by robertzzy on 13/07/16.
 */
import { connect } from 'react-redux'
import CreateResourceForm from '../Component/Create/CreateResourceForm'
import {fetchAllEquipment, fetchAllMuscle, createMuscleGroup,createEquipment, createMuscle, createExercise, acknowledgeCreateEntryResult} from '../Actions/actions'
import * as modelTypes from '../model'
import {generateUIStructure} from '../resourceUIStructureGenerator'



const mapStateToProps = (state) => {
	return {
		formType: "创建",
		type: state.modelType,
		entryTypes: generateUIStructure(state.modelType, state),
		createResourceState: state.createResourceState,
		createResourceResult: state.createResourceResult
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

		createResource: (event, payload, type) =>{
			event.preventDefault();
			switch (type){
				case modelTypes.MUSCLE_GROUP:
					dispatch(createMuscleGroup(payload));
					break;
				case modelTypes.EXERCISE:
					dispatch(createExercise(payload));
					break;
				case modelTypes.MUSCLE:
					dispatch(createMuscle(payload));
					break;
				case modelTypes.EQUIPMENT:
					dispatch(createEquipment(payload));
					break;

			}
		},
		acknowledgeResult: () =>{
			dispatch(acknowledgeCreateEntryResult());

		}
	}
};
const CreateResource = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateResourceForm);

export default CreateResource