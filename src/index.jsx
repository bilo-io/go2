import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App></App>
    </Router>
, document.getElementById('app'));
