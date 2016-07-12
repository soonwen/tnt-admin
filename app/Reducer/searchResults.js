/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from '../Actions/actionTypes'


function extractResult(action){
	return action.payload.data
}
export default function renderResult(state = {headers:[], data:[]}, action){
	let result = {headers:[], data:[]};
	let type = action.type;
	switch (type){
		case actionTypes.MUSCLE_GROUP_SEARCH_RESULT_RECEIVED:
			console.log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name', 'imageURLs', 'muscles'];
				result.data = resultFromBackend.map((muscleGroupResult)=>{
					muscleGroupResult.muscles = muscleGroupResult['muscles'].map((muscle)=> {
						return muscle['name']+' '
					});
					return muscleGroupResult;
				});
				return result
			}
			break;
		case actionTypes.EXERCISE_SEARCH_RESULT_RECEIVED:
			console.log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name','equipments', 'metrics', 'resourceURLs', 'minorMuscles', 'majorMuscles', 'tag', 'advancedContent', 'basicContent'];
				result.data = resultFromBackend.map((exerciseResult)=>{
					exerciseResult.metrics = exerciseResult['metrics'].map((metrics)=> {
						return metrics['name']+' '
					});
					exerciseResult.minorMuscles = exerciseResult['minorMuscles'].map((minorMuscles)=> {
						return minorMuscles['name']+' '
					});
					exerciseResult.majorMuscles = exerciseResult['minorMuscles'].map((majorMuscles)=> {
						return majorMuscles['name']+' '
					});
					exerciseResult.equipments = exerciseResult['equipments'].map((equipments)=> {
						return equipments['name']+' '
					});
					return exerciseResult;
				});
				return result
			}
			break;
		case actionTypes.MUSCLE_SEARCH_RESULT_RECEIVED:
			console.log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				result.headers = ['_id', 'name', 'imageURLs'];
				result.data = extractResult(action);
				return result
			}
			break;
		case actionTypes.EQUIPMENT_SEARCH_RESULT_RECEIVED:
			console.log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name', 'detail', 'imageURLs', 'type'];
				result.data = resultFromBackend.map((equipmentResult)=>{
					equipmentResult.type = equipmentResult.type.name;
					return equipmentResult;
				});
				return result
			}
			break
	}
	return result

}