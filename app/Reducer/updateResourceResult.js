/**
 * Created by robertzzy on 02/08/16.
 */
import {RESOURCE_UPDATED} from '../Actions/actionTypes'

export default function updateResourceResult(state = {}, action){
	if(action.type == RESOURCE_UPDATED){
		return action.payload
	}
	return state;
}