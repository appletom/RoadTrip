import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import { useSprings, animated, interpolate } from "react-spring";
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import '../index.css';


import snow1 from '../assets/images/snowboarding/snow1.png';
import snow2 from '../assets/images/snowboarding/snow2.png';
import snow3 from '../assets/images/snowboarding/snow3.png';
import snow4 from '../assets/images/snowboarding/snow4.png';

const Snowboarding = () => {
    return (
       <div className="snow-page">
        <div className="snow-bg">
            <div className="snow-div">
            <Slide left>

                
                <img className="snowpuzzle" src={snow1}/>

                <img className="snowpuzzle" src={snow2}/>

                <img className="snowpuzzle" src={snow3}/>
  
                <img className="snowpuzzle" src={snow4}/>                                                
  
           </Slide>
            </div>
        </div>
        </div>
    
    )
}


export default Snowboarding