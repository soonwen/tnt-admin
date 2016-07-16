/**
 * Created by robertzzy on 09/07/16.
 */

import {selectModel} from '../Actions/actions'
import { connect } from 'react-redux'
import * as actionTypes from '../Actions/actionTypes'
import DataTypeChooser from '../Component/Header/ModelTypeChooser'


const mapStateToProps = (state) => {
	return {
		selection: state.renderTypeChoice
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