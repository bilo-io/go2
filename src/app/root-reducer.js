import { combineReducers } from 'redux';
import journeysReducer from './pages/journeys/reducer';
import signboardsReducer from './pages/signboards/reducer';

const rootReducer = combineReducers({
    journeysReducer,
    signboardsReducer
});

export default rootReducer;