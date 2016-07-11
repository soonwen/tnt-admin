/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from '../Actions/actionTypes'

const defaultType = "选择搜索类型";

function translateAction(actionType){
	switch (actionType){
		case actionTypes.SEARCH_EXERCISE:
			return "动作";
		case actionTypes.SEARCH_EQUIPMENT:
			return "器械";
		case actionTypes.SEARCH_MUSCLE:
			return "肌肉";
		case actionTypes.SEARCH_MUSCLE_GROUP:
			return "肌肉组";
		default:
			return defaultType;
	}
}


export default function renderTypeChoice(state = defaultType, action){
	return translateAction(action.type);
}