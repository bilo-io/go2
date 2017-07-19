import { combineReducers } from 'redux';
import journeysReducer from './pages/journeys/reducer';
import signboardsReducer from './pages/signboards/reducer';
import searchReducer from './pages/search/reducer';

const rootReducer = combineReducers({
    journeys: journeysReducer,
    search: searchReducer,
    signboards: signboardsReducer
});

export default rootReducer;