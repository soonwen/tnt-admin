/**
 * Created by robertzzy on 17/07/16.
 */

import * as actionTypes from './actionTypes'
import fetch from 'isomorphic-fetch'
import {checkStatus, parseJSON} from '../../common/fetchUtils'
import log from '../../LOGGER'

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

function createLoginRequested(){
	return createSimpleAction(actionTypes.LOGIN_REQUESTED, null)
}


function createLoginFailed(){
	return createSimpleAction(actionTypes.LOGIN_FAILED_RECEIVED, null)
}


function requestLogin(username, password){
	let credentials = window.btoa(username+':'+password);

	return fetch(ENDPOINT +'api/auth/', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'tnt-admin-auth-scheme ' + credentials
		},
		body: JSON.stringify({'username':username})
	})
}

function handleLoginSuccess(result){
	log('login success');
	let claim =JSON.parse(window.atob(result.split('.')[1]));
	log(claim);
	log(result);
	let duration = claim.exp - claim.iat;
	window.localStorage.setItem('jwt', result);
	document.cookie = "jwt="+result+"; Max-Age="+duration+"; Path=/";
	window.location.replace(ENDPOINT+'dashboard')
}


export function login(username, password){
	return dispatch =>{
		dispatch(createLoginRequested());
		return requestLogin(username, password)
				.then(checkStatus)
				.then(parseJSON)
				.then(handleLoginSuccess)
				.catch((err) => {
					log('login failed');
					log(err);
					dispatch(createLoginFailed())
				})
	}
}