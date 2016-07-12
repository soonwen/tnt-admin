/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from '../Actions/actionTypes'

export default function renderTypeChoice(state = "", action){
	switch (action.type){
		case actionTypes.SEARCH_EQUIPMENT:
		case actionTypes.SEARCH_EXERCISE:
		case actionTypes.SEARCH_MUSCLE:
		case actionTypes.SEARCH_MUSCLE_GROUP:
			return action.type
	}
	return state;
}