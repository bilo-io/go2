import React from 'react';
import { Link } from 'react-router-dom';
require('./style.scss');

export default class Signboards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='signboards'>
                <h1>Signboards</h1>
                {this.props ?
                    <div>
                        <div> StopId: {this.props.stopId}</div>
                        <div> LineId: {this.props.lineId}</div>
                    </div>
                    : null}
            </div>
        )
    }
}