/**
 * Created by robertzzy on 16/07/16.
 */
import {CREATE_RESOURCE_REQUEST_SENT, CREATE_RESOURCE_RESULT_ACKNOWLEDGED, RESOURCE_CREATED} from '../Actions/actionTypes'
import * as createEntryStates from '../Component/Create/createResourceState'

export default function createResourceState(state = createEntryStates.CREATE_RESOURCE_STATE_IDLE, action){
	switch (action.type){
		case CREATE_RESOURCE_REQUEST_SENT:
			return createEntryStates.CREATE_RESOURCE_STATE_PENDING;
		case CREATE_RESOURCE_RESULT_ACKNOWLEDGED:
			return createEntryStates.CREATE_RESOURCE_STATE_IDLE;
		case RESOURCE_CREATED:
			return createEntryStates.CREATE_RESOURCE_STATE_RECEIVED;
	}
	return state;
}