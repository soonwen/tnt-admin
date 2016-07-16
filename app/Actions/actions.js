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
	return createSimpleAction(actionTypes.EXERCISE_SEARCH_RESULT_RECEIVED, result)

}

function requestEquipmentResult(){

}
function renderEquipmentResult(result){
	return createSimpleAction(actionTypes.EQUIPMENT_SEARCH_RESULT_RECEIVED, result)

}
function requestMuscleResult(){

}
function renderMuscleResult(result){
	return createSimpleAction(actionTypes.MUSCLE_SEARCH_RESULT_RECEIVED, result)

}
function requestMuscleGroupResult(){

}
function renderMuscleGroupResult(result){
	return createSimpleAction(actionTypes.MUSCLE_GROUP_SEARCH_RESULT_RECEIVED, result)
}

function renderAllEquipmentResult(result){
	return createSimpleAction(actionTypes.GET_ALL_EQUIPMENT_RECEIVED, result)

}

function renderAllMuscleResult(result){
	return createSimpleAction(actionTypes.GET_ALL_MUSCLES_RECEIVED, result)
}


function createEntryRequestSent(){
	return createSimpleAction(actionTypes.CREATE_ENTRY_REQUEST_SENT, null)
}
function createEntryResultReceived(result){
	return createSimpleAction(actionTypes.ENTRY_CREATED, result)
}

function postRequest(request, type){
	return fetch('http://localhost:3000/'+ type+'/', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request)
	})
}

export function fetchMuscleGroupResult(keyword){
	let request = {operation: "query", data:{name:{"contains":keyword}}};
	return dispatch =>{
		//dispatch(requestMuscleGroupResult());
		return postRequest(request, 'muscle_group')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderMuscleGroupResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}

export function fetchMuscleResult(keyword){
	let request = {operation: "query", data:{name:{"contains":keyword}}};
	return dispatch =>{
		//dispatch(requestMuscleGroupResult());
		return postRequest(request, 'muscle')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderMuscleResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}

export function fetchEquipmentResult(keyword){
	let request = {operation: "query", data:{name:{"contains":keyword}}};
	return dispatch =>{
		//dispatch(requestMuscleGroupResult());
		return postRequest(request, 'equipment')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderEquipmentResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}

export function fetchExerciseResult(keyword){
	let request = {operation: "query", data:{keyword:[keyword]}};
	return dispatch =>{
		//dispatch(requestMuscleGroupResult());
		return postRequest(request, 'exercise')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderExerciseResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}

export function fetchAllMuscle(){
	let request = {operation: "query", data:{name:{"contains":""}}};
	return dispatch =>{
		return postRequest(request, 'muscle')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderAllMuscleResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}

export function fetchAllEquipment(){
	let request = {operation: "query", data:{name:{"contains":""}}};
	return dispatch =>{
		//dispatch(requestMuscleGroupResult());
		return postRequest(request, 'equipment')
				.then(response => response.json())
				.catch(err => console.log(err))
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
						dispatch(renderAllEquipmentResult(result));
					}else{
						console.log('failed to retrieve data')
					}
				})
	}
}


export function createMuscleGroup(muscleGroup){
	let request = {operation: "create", data:muscleGroup};
	return dispatch =>{
		dispatch(createEntryRequestSent());
		return postRequest(request, 'muscle_group')
				.then(response => response.json())
				.catch(err => {
					console.log(err);
					dispatch(createEntryResultReceived(result));
				})
				.then(result => {
					if(result.success){
						console.log('data retrieved');
						console.log(result.data);
					}else{
						console.log('failed to retrieve data')
					}
					dispatch(createEntryResultReceived(result));
				})
	}
}

export function addCreateEntryField(entryType){
	return createSimpleAction(actionTypes.ADD_CREATE_ENTRY_FIELD, entryType);
}

export function selectModel(type){
	return createSimpleAction(actionTypes.SELECTED_MODEL, type);
}

export function acknowledgeCreateEntryResult(){
	return createSimpleAction(actionTypes.CREATE_ENTRY_RESULT_ACKNOWLEDGED, null);

}