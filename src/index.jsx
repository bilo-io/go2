import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { createJourneyFromId, createJourneyFromBody, selectItinerary, setSomeMessage } from './app/pages/journeys/actions';
import store from './app/store';

/// This is just a test
// console.log(store.getState());
// store.dispatch(setSomeMessage('SomeJourneyId'));
// store.dispatch(setSomeMessage('Another'));
// let unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// });
// unsubscribe();
///

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
document.getElementById('app'));
