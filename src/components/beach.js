import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import AlertError from './AlertError';
import AlertSuccess from './AlertSuccess';

import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';

import '../index.css';
import seashell from '../assets/images/beach/2seashell.png';

const Beach = () => {

    return (

        <div className="beach-page">
        <div className="beach-bg">

            <Slide left>
            <div className="beach-icons-div">

            
 
            <div className="column">
            <Rotate>

                <Draggable>
                <img className="beach-icons" src={seashell}/>
                </Draggable>

                <Draggable>
                <img className="beach-icons" src={seashell}/>
                </Draggable>

                <Draggable>
                <img className="beach-icons" src={seashell}/>
                </Draggable>

            </Rotate>      
            </div>

            </div>
 
 
           </Slide>

        </div>
        </div>

    )

}

export default Beach;