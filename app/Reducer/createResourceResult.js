/**
 * Created by robertzzy on 15/07/16.
 */
import {RESOURCE_CREATED} from '../Actions/actionTypes'

export default function createEntryResult(state = {}, action){
	if(action.type == RESOURCE_CREATED){
		return action.payload
	}
	return state;
}