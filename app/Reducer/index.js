/**
 * Created by robertzzy on 10/07/16.
 */
import renderTypeChoice from './modelTypeChooser'
import renderResult from  './searchResult'
import allMuscles from  './allMuscles'
import allEquipments from './allEquipments'
import createEntryResult from './createEntryResult'
import createEntryRequestSent from './createEntryRequestSent'

import { combineReducers } from 'redux'


const mainReducer = combineReducers({renderTypeChoice, renderResult, allMuscles, allEquipments, createEntryResult, createEntryRequestSent});

export default mainReducer;