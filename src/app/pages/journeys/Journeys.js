import React from 'react';
import {Link} from 'react-router-dom';
import Map from '../../components/map/Map.js';
import Journey from './journey/Journey';
import tapi from '../../tapi.utils';
require('./journeys.scss');
var qs = require('query-string');
var axios = require('axios');

export default class Journeys extends React.Component {
    constructor(props) {
        super(props);
        this.platformUrl = 'https://platform.whereismytransport.com/api';
        this.identityUrl = 'https://indentity.whereismytransport.com/connect/token';
        this.clientId = '';
    }
    componentDidMount() {
        this.initState();
        let journeyId = this.props.match.params.journeyId;
        let params = qs.parse(this.props.location.search);

        if (journeyId) {
            console.log('Get Journey with ID:', journeyId);
            setTimeout(() => {
                this.getJourney(journeyId);
            }, 10000);
        } else if (params.destination) {
            this.itineraryIndex = params.index;
            let destination = params
                .destination
                .split(',')
                .map((numString) => {
                    return Number(numString);
                });
            let end = destination.reverse();
            if ('geolocation' in navigator) {
                console.log('getting location');
                navigator
                    .geolocation
                    .getCurrentPosition((position) => {
                        let start = [position.coords.longitude, position.coords.latitude];
                        let body = {
                            geometry: {
                                type: 'MultiPoint',
                                coordinates: [
                                    [...start],
                                    [...end]
                                ]
                            },
                            maxItineraries: 5
                        }
                        this.postJourney(body);
                    })
            } else {
                console.log('could not get location',);
            }
        }
    }
    initState() {
        this.setState({geometry: {}});
    }
    render() {
        return (
            <div className='journeys'>
                <Journey
                    className='journey-wrapper'
                    journey={this.state && this.state.journey}
                    setActiveItinerary={this
                    .setActiveItinerary
                    .bind(this)}/>
                <Map className='map-wrapper' geojson={this.state && this.state.geometry}/>
            </div>
        )
    }
    getJourney(id) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('wimt_token')
        };
        axios({method: 'get', url: `${this.platformUrl}/journeys/${id}`, headers: headers}).then((response) => {
            this.setState(Object.assign({}, this.state, {journey: response.data}));
            this.checkForGeometry(response.data);
            this.selectItinerary(this.itineraryIndex
                ? this.itineraryIndex
                : 0);
        }).catch((error) => {
            console.log({error});
        });
    }
    postJourney(body) {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('wimt_token')
        };
        axios({method: 'post', url: `${this.platformUrl}/journeys`, data: body, headers: headers}).then((response) => {
            this.setState(Object.assign({}, this.state, {journey: response.data}));
            this.checkForGeometry(response.data);
            this.selectItinerary(this.itineraryIndex
                ? this.itineraryIndex
                : 0);
        }).catch((error) => {
            console.log({error});
        });
    }
    checkForGeometry(response) {
        this.geometry = {};
        this.geometry.points = [];
        this.geometry.lines = [];
        this.geometry.itineraries = [];
        (response.itineraries || []).forEach((itinerary) => {
            let firstLeg = true;
            let lastLeg = false;
            let mapItinerary = {};
            mapItinerary.lines = [];
            mapItinerary.points = [];

            (itinerary.legs || []).forEach((leg, index) => {
                if (index > 0) {
                    firstLeg = false;
                }
                if (index === itinerary.legs.length - 1) {
                    lastLeg = true;
                }
                // Lines
                let name = leg.line
                    ? leg.line.name
                    : 'walking';
                let color = '#';
                if (leg.type === 'Transit') {
                    // '04A1B9'
                    color += ((!leg.line || !leg.line.colour)
                        ? '999999'
                        : leg.line.colour.substring(3, leg.line.colour.length));
                } else {
                    color += '777777';
                }
                let pinType = '';

                leg.geometry && mapItinerary
                    .lines
                    .push({
                        geometry: leg.geometry,
                        properties: {
                            name: name,
                            color: color
                        },
                        options: {
                            style: {
                                color: color,
                                weight: 8,
                                opacity: 1
                            }
                        }
                    });
                // Points
                (leg.waypoints || []).forEach((waypoint, index) => {
                    let pinType = 'stop';
                    if (firstLeg && index === 0) {
                        pinType = 'start';
                    } else if (lastLeg && index === leg.waypoints.length - 1) {
                        pinType = 'end';
                    }
                    let name = waypoint.stop
                        ? waypoint.stop.name
                        : (waypoint.location
                            ? waypoint.location.address
                            : 'Taxi');
                    let point = waypoint.stop
                        ? waypoint.stop.geometry
                        : (waypoint.location
                            ? waypoint.location.geometry
                            : waypoint.hail.geometry);

                    point && mapItinerary
                        .points
                        .push({
                            geometry: point,
                            properties: {
                                name: name,
                                pinType: pinType,
                                color: color
                            },
                            options: {}
                        });
                });
            });
            this
                .geometry
                .itineraries
                .push(mapItinerary);
        });
        this.setState(Object.assign({}, this.state, {geometry: this.geometry}));
    }
    selectItinerary(index) {
        if (index >= this.geometry.itineraries.length) {
            return;
        }
        let geometry = {};
        geometry.points = [];
        geometry.lines = [];
        geometry.itineraries = ((this.state && this.state.geometry && this.state.geometry.itineraries || []).map(itinerary => {
            return itinerary
        }) || []);

        if (this.geometry.itineraries[index]) {
            (this.geometry.itineraries[index].points || []).forEach((point) => {
                geometry
                    .points
                    .push(point);
            });
            (this.geometry.itineraries[index].lines || []).forEach((line) => {
                geometry
                    .lines
                    .push(line);
            });
        }
        this.geometry.points && this
            .geometry
            .points
            .forEach((point) => {
                geometry
                    .points
                    .push(point);
            })
        this.setState(Object.assign(this.state, {
            geometry: geometry,
            activeItinerary: index
        }));
    }
    setActiveItinerary(id) {
        console.log('Parent selecting Itinerary:', id, this.props);
    }
}