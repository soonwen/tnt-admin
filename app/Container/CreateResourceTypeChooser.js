/**
 * Created by robertzzy on 13/07/16.
 */
import {fetchAllEquipment, fetchAllMuscle, selectModel} from '../Actions/actions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import DataTypeChooser from '../Component/Header/ModelTypeChooser'
import * as modelTypes from '../model'


const mapStateToProps = (state) => {
	return {
		selection: state.modelType
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemSelected: (eventKey, event) => {
			switch (eventKey){
				case modelTypes.MUSCLE_GROUP:
					dispatch(fetchAllMuscle());
					break;
				case modelTypes.EXERCISE:
					dispatch(fetchAllMuscle());
					dispatch(fetchAllEquipment());
					break;
			}
			dispatch(selectModel(eventKey))
		}
	}
};
const CreateResourceTypeChooser = connect(
	mapStateToProps,
	mapDispatchToProps
)(DataTypeChooser);

export default CreateResourceTypeChooser