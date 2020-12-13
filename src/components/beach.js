import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import '../index.css';

const Beach = () => {

    return (
        <div className="beach-page">
        <div className="beach-bg">

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

export default Beach;