/**
 * Created by robertzzy on 16/07/16.
 */
import {CREATE_ENTRY_REQUEST_SENT, CREATE_ENTRY_RESULT_ACKNOWLEDGED, ENTRY_CREATED} from '../Actions/dashboardActionTypes'
import * as createEntryStates from '../Component/Create/createEntryState'

export default function createEntryState(state = createEntryStates.CREATE_ENTRY_STATE_CREATE, action){
	switch (action.type){
		case CREATE_ENTRY_REQUEST_SENT:
			return createEntryStates.CREATE_ENTRY_STATE_PENDING;
		case CREATE_ENTRY_RESULT_ACKNOWLEDGED:
			return createEntryStates.CREATE_ENTRY_STATE_CREATE;
		case ENTRY_CREATED:
			return createEntryStates.CREATE_ENTRY_STATE_RECEIVED;
	}
	return state;
}