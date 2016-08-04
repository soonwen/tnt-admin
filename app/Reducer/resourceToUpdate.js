/**
 * Created by robertzzy on 03/08/16.
 */
import {RESOURCE_TO_UPDATE_CHOSEN} from '../Actions/actionTypes'

export default function resourceToUpdate(state = {}, action){
	if(action.type == RESOURCE_TO_UPDATE_CHOSEN){
		return action.payload
	}
	return state;
}