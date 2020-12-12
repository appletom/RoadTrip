import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import beach from '../beach.css';

import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

const Beach = () => {
    return (
        <div>
        <h1>beach</h1>

        <div className="wrapper">
            <AlertError title="not a match" type="error">
            <div>It's not a match, try again!</div>
            </AlertError>
        </div>

        <div className="wrapper">
            <AlertSuccess title="That's correct" type="success">
            <div>That's correct!</div>
            </AlertSuccess>
        </div>


        </div>
    )
}


export default Beach;