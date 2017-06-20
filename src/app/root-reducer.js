import { combineReducers } from 'redux';
import journeysReducer from './pages/journeys/reducer';
import signboardsReducer from './pages/signboards/reducer';

const rootReducer = combineReducers({
    journeys: journeysReducer,
    signboards: signboardsReducer
});

export default rootReducer;