/**
 * Created by robertzzy on 17/07/16.
 */

import { combineReducers } from 'redux'
import loginState from './loginState'


const mainReducer = combineReducers({loginState});

export default mainReducer;