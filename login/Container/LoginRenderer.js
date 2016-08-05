/**
 * Created by robertzzy on 17/07/16.
 */
import {login} from '../Actions/action'
import { connect } from 'react-redux'
import LoginForm from '../Component/Form/LoginForm'
import log from '../../LOGGER'


const mapStateToProps = (state) => {
	return {
		loginState: state.loginState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (event, username, password) => {
			event.preventDefault();
			dispatch(login(username, password))
		}
	}
};
const LoginRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);

export default LoginRenderer