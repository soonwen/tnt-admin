/**
 * Created by robertzzy on 10/07/16.
 */
import modelType from './modelType'
import searchResult from  './searchResult'
import allMuscles from  './allMuscles'
import allEquipments from './allEquipments'
import createResourceResult from './createResourceResult'
import createResourceState from './createResourceState'
import deleteResourceState from './deleterResourceState'
import updateResourceState from './updateResourceState'
import updateResourceResult from './updateResourceResult'
import resourceToUpdate from './resourceToUpdate'
import updateResourceRequirementState from './updateResourceRequirementState'
import { combineReducers } from 'redux'


const mainReducer = combineReducers({modelType, searchResult, allMuscles, allEquipments, createResourceResult, createResourceState, deleteResourceState, updateResourceState, updateResourceResult, resourceToUpdate, updateResourceRequirementState});

export default mainReducer;