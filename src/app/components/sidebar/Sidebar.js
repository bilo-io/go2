import React from 'react';
import L from 'leaflet';


export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='sidebar-container'>
                <div className='sidebar'></div>
            </div>
        )
    }
}