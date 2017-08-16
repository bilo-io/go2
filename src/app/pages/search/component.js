import React from 'react';
import {Link} from 'react-router-dom';
var axios = require('axios');
require('./style.scss');

export class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='signboards'>
                <h1>Google</h1>
                <div>
                    <p>
                        <label>Address</label>
                        <input
                            type="text"
                            defaultValue={this.props.searchQuery
                            ? this.props.searchQuery
                            : ''}
                            onChange={(e) => this.props.searchGoogle(e.target.value)}/>
                        <button onClick={() => this.props.addItem(this.props.searchQuery)}>Add</button>
                    </p>
                    <h1>And: {this.props.searchQuery}</h1>
                    <p>
                        {(this.props.items || []).map((item) => {
                            return <label>{item}</label>
                        })}
                    </p>
                </div>
            </div>
        )
    }
}

