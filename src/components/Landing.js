import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';

import Map from '../assets/images/landing/world.png';
import cloud from '../assets/images/landing/a_cloud.png';
import clouds from '../assets/images/landing/clouds.png';
import styled, { keyframes } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Play from './Play';
import Browse from './Browse';

import cartReducers from './reducers/cartReducers';

import ZoomClass from './ZoomClass';


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
