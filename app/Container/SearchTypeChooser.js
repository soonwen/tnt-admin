/**
 * Created by robertzzy on 09/07/16.
 */

import {selectSearchType} from '../Actions/actions'
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
			dispatch(selectSearchType(eventKey))
		}
	}
};
const SearchTypeChooser = connect(
	mapStateToProps,
	mapDispatchToProps
	)(DataTypeChooser);

export default SearchTypeChooser