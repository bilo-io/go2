import React from 'react';
import tapi from '../../../tapi.utils';
import moment from 'moment';
require('./journey.scss');

export default class Journey extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <div className="journey">
                {/*{this.journeyHeader()}*/}
                {this.props && this.props.journey && this
                    .props
                    .journey
                    .itineraries
                    .map((itinerary) => {
                        return <Itinerary
                            key={itinerary.id}
                            itinerary={itinerary}
                            onClick={() => { this.props.setActiveItinerary(`itineraryID: ${itinerary.id}`) }} />
                    })}
            </div>
        )
    }
    journeyHeader() {
        this.props.journey ?
            <div>
                <div className="labeled-value">
                    <span><b>Start:</b></span>
                    <span>{tapi.Journey.getStartOf(this.props.journey)}</span>
                </div>
                <div className="labeled-value">
                    <span><b>End:</b></span>
                    <span>{tapi.Journey.getEndOf(this.props.journey)}</span>
                </div>
            </div> : null
    }
}

export class Itinerary extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) { }

    render() {
        let modes = (tapi.Itinerary.getModes(this.props.itinerary) || []);
        // let color = tapi.toHexColor(this.props.leg && this.props.leg.line ? this.props.leg.line.colour : '#777');
        return (
            <div className='itinerary'>
                <div className='modes-container'>
                    {this.props.itinerary && modes.map((mode, idx) => {
                        return <span key={`${mode.name}${idx}`}>
                            <i className="material-icons" style={{ color: mode.color }}>{mode.name}</i>
                        </span>
                    })}
                </div>
                {this.props && this.props.itinerary && this
                    .props
                    .itinerary
                    .legs
                    .map((leg, index) => {
                        return <Leg key={index} leg={leg} />
                    })}
            </div>
        )
    }
}

export class Leg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let color = tapi.toHexColor(this.props.leg && this.props.leg.line ? this.props.leg.line.colour : '#777');
        return (
            <div className='leg'>
                {this.props.leg.waypoints.map((waypoint, idx) => {
                    return (
                        <div key={`${idx}-${waypoint.name}`} className='waypoint'>
                            {/*<WaypointGraphic icon={} type={'start'} />*/}
                            <span style={{ backgroundColor: color }}>
                                {(waypoint.stop ? waypoint.stop.name : (waypoint.address ? waypoint.address.name : 'taxi'))}
                            </span>
                            <span>
                                {moment.utc(waypoint.arrivalTime).local().format("HH:mm")}
                            </span>
                        </div>
                    )
                })}
                <hr />
            </div>
        )
    }
}

export class WaypointGraphic extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div></div>
        )
    }
}