/**
 * Created by robertzzy on 03/08/16.
 */

import {GET_ALL_EQUIPMENT_RECEIVED, GET_ALL_MUSCLES_RECEIVED, UPDATE_RESOURCE_REQUIREMENT_FILLED} from '../Actions/actionTypes'
import * as updateResourceRequirementStates from '../Component/Update/updateResourceRequirementState'

export default function updateResourceRequirementState(state = updateResourceRequirementStates.UPDATE_RESOURCE_REQUIREMENT_PENDING, action){
	switch (action.type){
		case GET_ALL_EQUIPMENT_RECEIVED:
		case GET_ALL_MUSCLES_RECEIVED:
			return updateResourceRequirementStates.UPDATE_RESOURCE_REQUIREMENT_RECEIVED;
		case UPDATE_RESOURCE_REQUIREMENT_FILLED:
			return updateResourceRequirementStates.UPDATE_RESOURCE_REQUIREMENT_PENDING
	}
	return state;
}