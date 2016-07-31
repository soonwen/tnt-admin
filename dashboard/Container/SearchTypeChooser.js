/**
 * Created by robertzzy on 09/07/16.
 */

import {selectModel} from '../Actions/dashboardActions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/dashboardActionTypes'
import DataTypeChooser from '../Component/Header/ModelTypeChooser'


const mapStateToProps = (state) => {
	return {
		selection: state.modelType
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onItemSelected: (eventKey, event) => {
			dispatch(selectModel(eventKey))
		}
	}
};
const SearchTypeChooser = connect(
	mapStateToProps,
	mapDispatchToProps
	)(DataTypeChooser);

export default SearchTypeChooser