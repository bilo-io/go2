import React from 'react';
require('./home.scss');
import image from '../../../img/profile-pic.jpg';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                {/*<h1>This is the home page!</h1>*/}
                {/*<img src={image} />*/}
            </div>
        )
    }
}