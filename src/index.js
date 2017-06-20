import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createJourneyFromId, createJourneyFromBody, selectItinerary, setSomeMessage } from './app/pages/journeys/actions';
import { setStopId, setLineId } from './app/pages/signboards/actions';
import store from './app/store';
import { createStore } from 'redux';

let next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
    let result = next(action)
    console.log('dispatching', action);
    console.log('next state', store.getState())
    console.log('result', result);
    return result
}

store.dispatch(setStopId('some Id'));
store.dispatch(setLineId('another Id'));

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app'));
