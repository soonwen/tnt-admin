/**
 * Created by robertzzy on 10/07/16.
 */
import modelType from './modelType'
import renderResult from  './searchResult'
import allMuscles from  './allMuscles'
import allEquipments from './allEquipments'
import createEntryResult from './createEntryResult'
import createEntryState from './createEntryState'

import { combineReducers } from 'redux'


const mainReducer = combineReducers({modelType, renderResult, allMuscles, allEquipments, createEntryResult, createEntryState});

export default mainReducer;