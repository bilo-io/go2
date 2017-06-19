import { createStore } from 'redux';
import rootReducer from './root-reducer';
let store = createStore(rootReducer);
export default store;