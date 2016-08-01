/**
 * Created by robertzzy on 13/07/16.
 */
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import CreateEntryForm from '../Component/Create/CreateEntryForm'
import {fetchAllEquipment, fetchAllMuscle, addCreateEntryField, createMuscleGroup,createEquipment, createMuscle, createExercise, acknowledgeCreateEntryResult} from '../Actions/actions'
import * as modelTypes from '../model'




const mapStateToProps = (state) => {
	let entryStructure = [];
	switch (state.modelType){
		case modelTypes.MUSCLE_GROUP:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'muscles', headerText:'肌肉', type:'multi-select', data:state.allMuscles});
			break;
		case modelTypes.EQUIPMENT:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'detail', headerText:'介绍', type:'text'});
			entryStructure.push({header:'type', headerText:'类型', type:'text'});
			break;
		case modelTypes.MUSCLE:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			break;
		case modelTypes.EXERCISE:
			entryStructure.push({header:'name', headerText:'名字', type:'text'});
			entryStructure.push({header:'majorMuscles', headerText:'主要肌肉', type:'multi-select', data:state.allMuscles});
			entryStructure.push({header:'minorMuscles', headerText:'次要肌肉', type:'multi-select', data:state.allMuscles});
			entryStructure.push({header:'equipments', headerText:'器械', type:'multi-select', data:state.allEquipments});
			entryStructure.push({header:'basicContent', headerText:'基础教程', type:'textarea'});
			entryStructure.push({header:'advancedContent', headerText:'高级教程', type:'textarea'});
			entryStructure.push({header:'repetition-duration', headerText:'基础数据类型', type:'select', data:['次数', '时长'], placeHolder:'选择类型'});


			break;
	}
	return {
		type: state.modelType,
		entryTypes: entryStructure,
		createEntryState: state.createEntryState,
		createEntryResult: state.createEntryResult
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
		createEntry: (event, payload, type) =>{
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
const CreateEntry = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateEntryForm);

export default CreateEntry