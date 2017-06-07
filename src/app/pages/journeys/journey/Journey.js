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
                <h1>Journey</h1>
                {this.props && this.props.journey && this
                    .props
                    .journey
                    .itineraries
                    .map((itinerary) => {
                        return <Itinerary
                            key={itinerary.id}
                            itinerary={itinerary}
                            onClick={ () => { this.props.setActiveItinerary(`itineraryID: ${itinerary.id}`) }}/>
                    })}
            </div>
        )
    }
}

export class Itinerary extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {}
    render() {
        return (
            <div className='itinerary'>
                <h2>Itinerary</h2>
                {this.props && this.props.itinerary && this
                    .props
                    .itinerary
                    .legs
                    .map((leg, index) => {
                        tapi.Itinerary.getModes(this.props.itinerary)
                        return <Leg key={index} leg={leg}/>
                    })}
            </div>
        )
    }
}

export class Leg extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        // console.log(this.props.getModeIcon('Rail'));
    }
    render() {
        return (
            <div className='leg'>
                <h3>Leg</h3>
            </div>
        )
    }
}