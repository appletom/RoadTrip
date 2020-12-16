import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import cooler from '../assets/images/camping/cooler.jpg'

import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import '../index.css';

const Camping = () => {
    return (
       <div className="camping-page">
        <div className="camping-bg">
    
    <img src={cooler} alt="Cooler" />;

        <Draggable>
        <div>I can now be moved around!</div>
        </Draggable>

        
        <div className="wrapper">
            <AlertError title="not a match" type="error">
            </AlertError>
        </div>

        <div className="wrapper">
            <AlertSuccess title="That's correct" type="success">

            </AlertSuccess>
        </div>
        </div>
        </div>
    )
}


export default Camping