import { createStore } from 'redux';
import { makeRootReducer } from './root-reducer';
let store = createStore(makeRootReducer(), window.STATE_FROM_SERVER);
export default store;