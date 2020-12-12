import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import Beach from './Beach';
import Camping from './Camping';
import Skiing from './Skiing';

const Destinations = () => {
    return (
        <div>
        <Link to="/Beach"> Beach </Link>
        <Link to="/Camping"> Camping </Link>
        <Link to="/Skiing"> Skiing </Link>


        <Draggable>
        <div>I can now be moved around!</div>
        </Draggable>

        </div>
    )
}

export default Destinations;