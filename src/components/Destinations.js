import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import Beach from './Beach';
import Camping from './Camping';
import Skiing from './Skiing';

const Destinations = () => {
    return (
        <div>
        <li> {Beach} </li>
        <li> {Camping} </li>
        <li> {Skiing} </li>

        <Draggable>
        <div>I can now be moved around!</div>
        </Draggable>

        </div>
    )
}

export default Destinations;