/**
 * Created by robertzzy on 15/07/16.
 */
import {ENTRY_CREATED} from '../Actions/actionTypes'

export default function createEntryResult(state = false, action){
	if(action.type == ENTRY_CREATED){
		return action.payload.success
	}
	return state;
}