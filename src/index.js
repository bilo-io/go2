import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createJourneyFromId, createJourneyFromBody, selectItinerary, setSomeMessage } from './app/pages/journeys/actions';
import store from './app/store';

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
document.getElementById('app'));
