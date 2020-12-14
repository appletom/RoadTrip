import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import Zoom from './Zoom';

import '../index.css';

const Beach = () => {

    return (
        <div className="beach-page">
        <div className="beach-bg">

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

export default Beach;