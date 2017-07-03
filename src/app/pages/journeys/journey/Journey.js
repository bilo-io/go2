import React from 'react';
import tapi from '../../../tapi.utils';
require('./journey.scss');

export default class Journey extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
    }
    render() {
        return (
            <div className='journey'>
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
            <div className='leg' style={{backgroundColor: color}}>
                {this.props.leg.waypoints.map((waypoint, idx) => {
                    return <span key={`${idx}-${waypoint.name}`}>
                        {(waypoint.stop ? waypoint.stop.name : (waypoint.address ? waypoint.address.name : 'taxi'))}
                    </span>
                })}
            </div>
        )
    }
}