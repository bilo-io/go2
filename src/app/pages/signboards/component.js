import React from 'react';
import { Link } from 'react-router-dom';
import { Timetable } from './timetable';
var axios = require('axios');
require('./style.scss');

export const Signboards = (props) => {
    return (
        <div className='signboards'>
            <h1>Signboards</h1>
            <div>
                <p>
                    <label>StopId:</label>
                    <input
                        type="text"
                        value={props.stopId ? props.stopId : ''}
                        onChange={(e) => props.setStopId(e.target.value)} />
                    <button onClick={() => props.fetchStopTimetable(props.stopId)}>Fetch</button>
                </p>
                <p>
                    <label>LineId:</label>
                    <input
                        type="text"
                        value={props.lineId ? props.lineId : ''}
                        onChange={(e) => props.setLineId(e.target.value)} />
                    <button onClick={() => props.fetchLineTimetable(props.lineId)}>Fetch</button>
                </p>
            </div>
        </div>
    )
}

export default Signboards;