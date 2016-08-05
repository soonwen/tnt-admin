/**
 * Created by robertzzy on 28/07/16.
 */
import {DELETE_RESOURCE_REQUEST_SENT, DELETE_RESOURCE_REQUESTED, DELETE_REQUEST_CANCELED, RESOURCE_DELETED, DELETE_RESOURCE_ERROR_ACKNOWLEDGED} from '../Actions/actionTypes'

export default function deleterResourceState(state = {popup:false, id:"", exceptionMessage:""}, action){
	switch (action.type){
		case DELETE_RESOURCE_REQUESTED:
			return {popup:true, id:action.payload, exceptionMessage:""};
		case DELETE_RESOURCE_REQUEST_SENT:
		case DELETE_REQUEST_CANCELED:
			return {popup:false, id:"", exceptionMessage:""};
		case RESOURCE_DELETED:
			if(!action.payload.success){
				return {popup:false, id:"", exceptionMessage:action.payload.exceptionMessage};
			}
			return state;
		case DELETE_RESOURCE_ERROR_ACKNOWLEDGED:
			return {popup:false, id:"", exceptionMessage:""};
	}
	return state;
}