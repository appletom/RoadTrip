import React, { Component } from 'react';


import api from '../hooks/YelpAPI/api';
import config from '../hooks/YelpAPI/config';
import Form from './Form'


import '../index.css';

const dotenv = require('dotenv').config({path: __dirname + '/.env'});


class Travel extends Component {

    getTravel = async (e) => { // responsible for making API call
        const url = 'https://api.yelp.com/'
        
        const searchInput = e.target.elements.searchInput.value;
        e.preventDefault();
        
        const api_call = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  'Bearer' + `${process.env.REACT_APP_API_KEY}`,
                'Access-Control-Allow-Origin': 'https://www.yelp.com',
                Location: 'https://api.yelp.com'
            }
            
            })

        }



    render() {
        return (
            <div className="Travel-div">
                <header className="Travel-header">
                    <h1 className="Travel-title">Travel Search</h1>
 
                </header>
                <Form getTravel={this.getTravel}/>
                
            </div>
        )
    }
}


export default Travel;