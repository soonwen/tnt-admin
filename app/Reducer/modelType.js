/**
 * Created by robertzzy on 09/07/16.
 */
import {SELECTED_MODEL} from '../Actions/actionTypes'

export default function modelType(state = "", action){
	if(action.type == SELECTED_MODEL){
		return action.payload
	}
	return state;
}