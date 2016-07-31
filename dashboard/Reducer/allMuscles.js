/**
 * Created by robertzzy on 13/07/16.
 */
import * as actionTypes from '../Actions/dashboardActionTypes'


function extractResult(action){
	return action.payload.data
}
export default function allMuscles(state = [], action){
	if(action.type == actionTypes.GET_ALL_MUSCLES_RECEIVED){
		if(typeof action.payload != 'undefined'){
			let resultFromBackend=extractResult(action);
			return resultFromBackend.map((muscle)=>{
				return muscle['name']
			});
		}
	}
	return state
}