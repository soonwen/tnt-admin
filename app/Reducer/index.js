/**
 * Created by robertzzy on 10/07/16.
 */
import renderTypeChoice from './searchTypeChooser'
import renderResult from  './searchResults'

import { combineReducers } from 'redux'


const mainReducer = combineReducers({renderTypeChoice, renderResult});

export default mainReducer;