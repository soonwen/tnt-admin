/**
 * Created by robertzzy on 18/07/16.
 */
import {LOGIN_FAILED_RECEIVED, LOGIN_REQUESTED} from '../Actions/loginActionTypes'
import * as loginStates from '../loginStates'

export default function loginState(state = loginStates.LOGIN_START, action){
	switch (action.type){
		case LOGIN_REQUESTED:
			return loginStates.LOGIN_PENDING;
		case LOGIN_FAILED_RECEIVED:
			return loginStates.LOGIN_START;
	}
	return state;
}