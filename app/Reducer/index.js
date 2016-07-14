/**
 * Created by robertzzy on 10/07/16.
 */
import renderTypeChoice from './searchTypeChooser'
import renderResult from  './searchResults'
import allMuscles from  './allMuscles'
import allEquipments from './allEquipments'


import { combineReducers } from 'redux'


const mainReducer = combineReducers({renderTypeChoice, renderResult, allMuscles, allEquipments});

export default mainReducer;