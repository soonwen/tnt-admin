/**
 * Created by robertzzy on 10/07/16.
 */
import modelType from './modelType'
import searchResult from  './searchResult'
import allMuscles from  './allMuscles'
import allEquipments from './allEquipments'
import createEntryResult from './createEntryResult'
import createEntryState from './createEntryState'
import deleteEntryState from './deleteEntryState'


const dashboardReducers = {modelType, searchResult, allMuscles, allEquipments, createEntryResult, createEntryState, deleteEntryState};

export default dashboardReducers;