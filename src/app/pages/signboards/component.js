import React from 'react';
import { Link } from 'react-router-dom';
import { Timetable } from './timetable';
var axios = require('axios');
require('./style.scss');

export class Signboards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='signboards'>
                <h1>Signboards</h1>
                {this.props ?
                    <div>
                        <p>
                            <label> StopId: {this.props.stopId}</label>
                            <input
                                type="text"
                                value={this.props.stopId}
                                onChange={(e) => this.props.setStopId(e.target.value)} />
                            <button onClick={() => this.props.fetchLineTimetable('SomeLine')}>Fetch</button>
                        </p>
                        <p>
                            <label>LineId: {this.props.lineId}</label>
                            <input
                                type="text"
                                value={this.props.stopId}
                                onChange={(e) => this.props.setLineId(e.target.value)} />
                            <button onClick={() => this.props.fetchLineTimetable('SomeLine')}>Fetch</button>
                        </p>
                    </div>
                    : null}
            </div>
        )
    }
}

export default Signboards;