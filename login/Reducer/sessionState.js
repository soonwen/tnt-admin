/**
 * Created by robertzzy on 30/07/16.
 */
import {SESSION_FETCHED} from '../Actions/loginActionTypes'
import * as sessionStates from '../sessionStates'

export default function sessionState(state = sessionStates.NOT_FOUND, action){
	switch (action.type){
		case SESSION_FETCHED:
			return action.payload;
	}
	return state;
}