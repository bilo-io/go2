import { createStore } from 'redux';
import rootReducer, { makeRootReducer } from './root-reducer';
let store = createStore(rootReducer, window.STATE_FROM_SERVER);
export default store;