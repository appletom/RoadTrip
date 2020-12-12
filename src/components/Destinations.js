import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import Beach from './Beach';
import Camping from './Camping';
import Snowboarding from './Snowboarding';

import destinations from '../destinations.css';

const Destinations = () => {
    return (
        <div>
        <ul>
        <li><Link to="/Beach">Beach</Link></li>
        <li><Link to="/Camping">Camping</Link></li>
        <li><Link to="/Snowboarding">Snowboarding</Link></li>
        </ul>

        <Draggable>
        <div>I can now be moved around!</div>
        </Draggable>

        </div>
    )
}

export default Destinations;