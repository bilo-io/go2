import React from 'react';
import { Link } from 'react-router-dom';
var axios = require('axios');
require('./style.scss');

export const Search = (props) => {
    return (
        <div className='signboards'>
            <h1>Google</h1>
            <div>
                <p>
                    <label>Address</label>
                    <input type="text"
                            value={props.searchQuery ? props.searchQuery : ''}
                            onChange={(e) => props.searchGoogle(e.target.value)} />
                </p>
            </div>
        </div>
    )
}

export default Search;