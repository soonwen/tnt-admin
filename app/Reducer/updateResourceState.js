/**
 * Created by robertzzy on 02/08/16.
 */
import {UPDATE_RESOURCE_REQUEST_SENT, UPDATE_RESOURCE_RESULT_ACKNOWLEDGED, RESOURCE_UPDATED} from '../Actions/actionTypes'
import * as updateResourceStates from '../Component/Update/updateResourceState'

export default function updateResourceState(state = updateResourceStates.UPDATE_RESOURCE_STATE_IDLE, action){
	switch (action.type){
		case UPDATE_RESOURCE_REQUEST_SENT:
			return updateResourceStates.UPDATE_RESOURCE_STATE_PENDING;
		case UPDATE_RESOURCE_RESULT_ACKNOWLEDGED:
			return updateResourceStates.UPDATE_RESOURCE_STATE_IDLE;
		case RESOURCE_UPDATED:
			return updateResourceStates.UPDATE_RESOURCE_STATE_RECEIVED;
	}
	return state;
}