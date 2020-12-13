import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';



import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import '../index.css';

const Snowboarding = () => {
    return (
       <div className="snow-page">
        <div className="snow-bg">

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


export default Snowboarding