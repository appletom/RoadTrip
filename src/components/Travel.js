import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Form from './Form'

import '../index.css';

class Travel extends Component {

    getTravel = (e) => { // responsible for making API call
        const searchInput = e.target.elements.searchInput.value;
        e.preventDefault();
        console.log(searchInput);
    }

    render() {
        return (
            <div className="Travel">
                <header className="Travel-header">
                    <h1 className="Travel-title">Travel Search</h1>
 
                </header>
                <Form getTravel={this.getTravel}/>
            </div>
        )
    }
}


export default Travel;