import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createJourneyFromId, createJourneyFromBody, selectItinerary, setSomeMessage } from './app/pages/journeys/actions';
import { createStore } from 'redux';
import store from './app/store';

// let next = store.dispatch
// store.dispatch = function dispatchAndLog(action) {
//     let result = next(action)
//     console.log('dispatching', action);
//     console.log('next state', store.getState())
//     return result
// }

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
document.getElementById('app'));
