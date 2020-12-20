import React, { Component } from 'react';

import api from '../hooks/YelpAPI/api';
import config from '../hooks/YelpAPI/config';
import Form from './Form'


import '../index.css';

class Travel extends Component {

render() {
        return (
            <div className="Travel-div">
                <header className="Travel-header">
                    <h1 className="Travel-title">Travel</h1>
                </header>
                <Form />
            </div>
        )
    }

}



export default Travel;



////////// Yelp API ///////////
/* const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const bodyParser = require('body-parser');
app.use(bodyParser.json());

class Travel extends Component {

    getTravel = async (e) => { // responsible for making API call
        const searchInput = e.target.elements.searchInput.value;
        e.preventDefault();
        
        const api_call = await fetch({
            method: 'GET',
            url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  'Bearer' + `${process.env.REACT_APP_API_KEY}`,
                'Access-Control-Allow-Origin': 'https://api.yelp.com/',
                Location: 'https://api.yelp.com'
            }
            }).then(function(response) {
                console.log(response.headers)
            }).then(data => console.log(data));
            


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
} */

