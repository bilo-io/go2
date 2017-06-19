import { combineReducers } from 'redux';
import journeysReducer from './journeys/index.js';
import signboardsReducer from './signboards/';

const rootReducer = combineReducers({
    journeysReducer,
    signboardsReducer
});