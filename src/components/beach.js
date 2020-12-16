import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import Zoom from './Zoom';

import '../index.css';
import seashell from '../assets/images/beach/2seashell.png';

const Beach = () => {

    return (
        <div className="beach-page">
        <div className="beach-bg">

            <div className="beach-icons-div">
            <Draggable>
            <img className="beach-icons" src={seashell}/>
            </Draggable>

            </div>

        </div>
        </div>
    
    )

}

export default Beach;