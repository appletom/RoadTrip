import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import Map from '../assets/images/landing/world.png';
import cloud from '../assets/images/landing/a_cloud.png';
import clouds from '../assets/images/landing/clouds.png';
import styled, { keyframes } from 'styled-components';

import Travel from './Travel';
import ZoomClass from './ZoomClass';


const Landing = () => {
    return (
        <div className="landing-div">
            <img className="img-clouds" src={clouds} alt="clouds" />
            
            <Link to="./Travel"><img className="img-world" src={Map} alt="world map" />
            </Link>
        </div>
    )
}



export default Landing