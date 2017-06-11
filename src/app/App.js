import React from 'react';
import {Route, Switch} from 'react-router-dom';
// Components
import Navbar from './components/navbar/Navbar.js';
// Pages
import Home from './pages/home/Home.js';
import NotFound from './pages/not-found/NotFound.js';
import Journeys from './pages/journeys/Journeys.js';
import tapi from './tapi.utils.js';
import tapiConfig from './tapi.config.js';
import axios from 'axios';
import qs from 'query-string';
require('./app.scss');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.requestToken();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className='app-content'>
                    <Switch>
                        <Route exact path="/" component={Journeys}/>
                        {/*<Route exact path="/home" component={Home}/>*/}
                        <Route exact path="/journeys" component={Journeys}/>
                        <Route path="/journeys/:journeyId" component={Journeys}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
    requestToken() {
        let payload = {
            client_id: tapiConfig.clientId,
            client_secret: tapiConfig.clientSecret,
            scope: 'transportapi:all',
            grant_type: 'client_credentials'
        }
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        axios.post(tapiConfig.identityUrl, qs.stringify(payload), {headers}).then((response) => {
            let token = response.data.access_token;
            localStorage.setItem('wimt_token', `Bearer ${token}`);
        }).catch((error) => {
            console.error(error);
        });
    }
}