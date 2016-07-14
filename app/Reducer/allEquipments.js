/**
 * Created by robertzzy on 13/07/16.
 */
import * as actionTypes from '../Actions/actionTypes'


function extractResult(action){
	return action.payload.data
}
export default function allEquipments(state = [], action){
	if(action.type == actionTypes.GET_ALL_EQUIPMENT_RECEIVED){
		if(typeof action.payload != 'undefined'){
			let resultFromBackend=extractResult(action);
			return resultFromBackend.map((equipment)=>{
				return equipment['name']
			});
		}
	}
	return state
}