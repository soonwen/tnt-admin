/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from '../Actions/actionTypes'


function extractResult(action){
	return action.payload.data
}
export default function renderResult(state = [], action){
	console.log("result received: ", action);
	if(typeof action.payload == 'undefined'){
		return []
	}else{
		return extractResult(action)
	}
}