/**
 * Created by robertzzy on 10/07/16.
 */
import { connect } from 'react-redux'
import SearchResultTable from '../Component/Search/SearchResultTable'


const mapStateToProps = (state) => {
	return {
		results: state.renderResult
	}
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
};
const SearchResultRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResultTable);

export default SearchResultRenderer