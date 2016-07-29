/**
 * Created by robertzzy on 28/07/16.
 */
import {DELETE_ENTRY_REQUEST_SENT, DELETE_ENTRY_REQUESTED, DELETE_REQUEST_CANCELED} from '../Actions/actionTypes'

export default function deleteEntryState(state = {popup:false, id:""}, action){
	switch (action.type){
		case DELETE_ENTRY_REQUESTED:
			return {popup:true, id:action.payload};
		case DELETE_ENTRY_REQUEST_SENT:
		case DELETE_REQUEST_CANCELED:
			return {popup:false, id:""};
	}
	return state;
}