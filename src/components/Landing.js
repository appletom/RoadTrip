import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import Map from '../assets/images/landing/world.png';
import cloud from '../assets/images/landing/a_cloud.png';
import clouds from '../assets/images/landing/clouds.png';
import styled, { keyframes } from 'styled-components';

import Header from './Header';
import Form from './Form';

import ZoomClass from './ZoomClass';


import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


class Landing extends Component {


    render () {

    return (
        <div className="landing-div">
           <img className="img-clouds" src={clouds} alt="clouds" />            
           <img className="img-world" src={Map} alt="world map" />
            <Form />

        </div>


    )
}
    }
    



export default Landing;