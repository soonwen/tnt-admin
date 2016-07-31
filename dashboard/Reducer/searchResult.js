/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from '../Actions/dashboardActionTypes'
import log from '../../LOGGER'
import * as models from '../model'



function extractResult(action){
	return action.payload.data
}
export default function renderResult(state = {headers:[], data:[], headerTexts:[], type:""}, action){
	let result = {headers:[], data:[], headerTexts:[], type:""};
	let type = action.type;
	switch (type){
		case actionTypes.ENTRY_DELETED:
		case actionTypes.SELECTED_MODEL:
			return result;
		case actionTypes.MUSCLE_GROUP_SEARCH_RESULT_RECEIVED:
			log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				result.type = models.MUSCLE_GROUP;
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name', 'imageURLs', 'muscles'];
				result.headerTexts = ['id', '名字','图片资源', '肌肉'];
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
			log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				result.type = models.EXERCISE;
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name','equipments', 'metrics','basicMetricType', 'resourceURLs', 'majorMuscles', 'minorMuscles', 'tag', 'advancedContent', 'basicContent'];
				result.headerTexts = ['id', '名字','器械', '数据类型','基础数据类型', '图片资源', '主要肌肉', '次要肌肉', '标签', '高级内容', '低级内容'];
				result.data = resultFromBackend.map((exerciseResult)=>{
					exerciseResult.metrics = exerciseResult['metrics'].map((metrics)=> {
						return metrics['name']+' '
					});
					exerciseResult.minorMuscles = exerciseResult['minorMuscles'].map((minorMuscles)=> {
						return minorMuscles['name']+' '
					});
					exerciseResult.majorMuscles = exerciseResult['majorMuscles'].map((majorMuscles)=> {
						return majorMuscles['name']+' '
					});
					exerciseResult.equipments = exerciseResult['equipments'].map((equipments)=> {
						return equipments['name']+' '
					});
					if(exerciseResult['repetition'] == -1){
						exerciseResult.basicMetricType = '时长'
					}else if(exerciseResult['duration'] == -1){
						exerciseResult.basicMetricType = '次数'
					}
					return exerciseResult;
				});
				return result
			}
			break;
		case actionTypes.MUSCLE_SEARCH_RESULT_RECEIVED:
			log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				result.type = models.MUSCLE;
				result.headers = ['_id', 'name', 'imageURLs'];
				result.headerTexts = ['id', '名字','图片资源'];
				result.data = extractResult(action);
				return result
			}
			break;
		case actionTypes.EQUIPMENT_SEARCH_RESULT_RECEIVED:
			log("result received: ", action);
			if(typeof action.payload != 'undefined'){
				result.type = models.EQUIPMENT;
				let resultFromBackend=extractResult(action);
				result.headers = ['_id', 'name', 'detail', 'imageURLs', 'type'];
				result.headerTexts = ['id', '名字','详细','图片资源', '标签'];
				result.data = resultFromBackend.map((equipmentResult)=>{
					equipmentResult.type = equipmentResult.type.name;
					return equipmentResult;
				});
				return result
			}
			break
	}
	return state

}