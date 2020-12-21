import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';




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

//https://travel.usnews.com/Bora_Bora/
//https://travel.usnews.com/Tahiti_French_Polynesia/
//https://travel.usnews.com/Tokyo_Japan/
//https://travel.usnews.com/Rome_Italy/
//https://travel.usnews.com/Phuket_Thailand/
//https://travel.usnews.com/Bali_Indonesia/
//https://travel.usnews.com/Cusco_Peru/Things_To_Do/Machu_Picchu_62666/
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

