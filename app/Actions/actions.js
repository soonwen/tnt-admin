/**
 * Created by robertzzy on 09/07/16.
 */
import * as actionTypes from './actionTypes'
import fetch from 'isomorphic-fetch'

function createAction(type, payload, error, meta){
	return{
		type: type,
		payload: payload,
		error: error,
		meta: meta
	}
}

function createSimpleAction(type, payload){
	return createAction(type, payload, null, null)
}

function requestExerciseResult(){

}
function renderExerciseResult(result){

}

function requestEquipmentResult(){

}
function renderEquipmentResult(result){

}
function requestMuscleResult(){

}
function renderMuscleResult(result){

}
function requestMuscleGroupResult(){

}
function renderMuscleGroupResult(result){

}

function fetchResult(request, type){
	return fetch('http://localhost:3000/'+ type,
			{
				method:'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(request)
			})
}

export function fetchMuscleGroupResult(keyword){
	let request = {operation: "query", name:keyword};
	return dispatch =>{
		dispatch(requestMuscleGroupResult());
		return fetchResult(request, 'muscle_group')
				.then(response => response.json())
				.then(result => dispatch(renderMuscleGroupResult(result)))
	}
}



export function selectSearchType(type){
	return createSimpleAction(type, null);
}