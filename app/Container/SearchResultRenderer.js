/**
 * Created by robertzzy on 10/07/16.
 */
import {fetchMuscleGroupResult} from '../Actions/actions'
import * as actionTypes from '../Actions/actionTypes'
import { connect } from 'react-redux'
import SearchResultTable from '../Component/Search/SearchResultTable'


const mapStateToProps = (state) => {
	return {
		result: state
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchClicked: (keyword, type) => {
			switch (type){
				case actionTypes.SEARCH_MUSCLE_GROUP:
					dispatch(fetchMuscleGroupResult(keyword))

			}
		}
	}
};
const SearchResultRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResultTable);

export default SearchResultRenderer