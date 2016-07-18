/**
 * Created by robertzzy on 17/07/16.
 */
import {login} from '../Actions/action'
import { connect } from 'react-redux'
import LoginForm from '../Component/Form/LoginForm'


const mapStateToProps = (state) => {
	return {
		loginState: state.loginState
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (username, password) => {
			console.log('login with '+ username+ ' and '+ password);
			dispatch(login(username, password))
		}
	}
};
const LoginRenderer = connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);

export default LoginRenderer