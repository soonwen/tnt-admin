/**
 * Created by robertzzy on 17/07/16.
 */

import * as actionTypes from './actionTypes'
import fetch from 'isomorphic-fetch'
import {checkStatus, parseJSON} from '../../common/fetchUtils'

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


function requestLogin(credentials){
	return fetch('http://localhost:3000/api/auth/', {
		method: 'GET',
		headers: {
			'Authorization': 'tnt-admin-auth-scheme ' + credentials
		}
	})
}

function handleLoginSuccess(result){
	console.log('login success');
	console.log(result);
	window.localStorage.setItem('jwt', result);
	window.location = 'http://localhost:3000/dashboard'
}


export function login(username, password){
	let credentials = window.btoa(username+':'+password);
	return dispatch =>{
		dispatch(createLoginRequested());
		return requestLogin(credentials)
				.then(checkStatus)
				.then(parseJSON)
				.then(handleLoginSuccess)
				.catch((err) => {
					console.log('login failed');
					console.log(err);
					dispatch(createLoginFailed())
				})
	}
}