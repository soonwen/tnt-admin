/**
 * Created by robertzzy on 30/07/16.
 */
import dashboardReducers from './dashboard/Reducer/index'
import loginReducers from './login/Reducer/index'

import { combineReducers } from 'redux'


const mainReducer = combineReducers(Object.assign(dashboardReducers, loginReducers));

export default mainReducer;