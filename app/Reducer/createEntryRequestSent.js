/**
 * Created by robertzzy on 15/07/16.
 */
import {CREATE_ENTRY_REQUEST_SENT, CREATE_ENTRY_RESULT_ACKNOWLEDGED} from '../Actions/actionTypes'

export default function createEntryRequestSent(state = false, action){
	switch (action.type){
		case CREATE_ENTRY_REQUEST_SENT:
			return true;
		case CREATE_ENTRY_RESULT_ACKNOWLEDGED:
			return false;

	}
	return state;
}