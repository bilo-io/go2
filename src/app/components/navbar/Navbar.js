import React from 'react';
import { Link } from 'react-router-dom';
require('./navbar.scss');

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.initState();
    }

    initState() {
        this.setState({
            title: 'Go2',
            screen: 'journeys'
        });
    }

    render() {
        return (
            <div className='navbar'>
                {this.pageTitle()}
            </div>
        )
    }
    pageTitle() {
        return (
            <div>
                <label>{this.state && this.state.title}</label>
            </div>
        )
    }
}