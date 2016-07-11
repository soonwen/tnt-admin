/**
 * Created by robertzzy on 09/07/16.
 */

import {selectSearchType} from '../Actions/actions'
import { connect } from 'react-redux'
import TypeChooser from '../Component/Header/TypeChooser'


const mapStateToProps = (state) => {
	return {
		selection: state
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
	)(TypeChooser);

export default SearchTypeChooser