/**
 * Created by robertzzy on 17/07/16.
 */
import {login, checkSession} from '../Actions/loginAction'
import { connect } from 'react-redux'
import LoginForm from '../Component/Form/LoginForm'
import log from '../../LOGGER'


const mapStateToProps = (state) => {
	return {
		loginState: state.loginState,
		sessionState: state.sessionState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (username, password) => {
			dispatch(login(username, password))
		},
		checkSession: () =>{
			dispatch(checkSession())
		}
	}
};
const LoginRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);

export default LoginRenderer