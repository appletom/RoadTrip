import React, { Component }  from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import Beach from './Beach';
import Camping from './Camping';
import Snowboarding from './Snowboarding';

import BeachIcon from '../assets/images/beach/iconbeach.png';
import CampingIcon from '../assets/images/camping/icontent.png';
import SnowIcon from '../assets/images/snowboarding/iconpenguin.png';



const Destinations = () => {
    return (
    <div>
    <div className="destinations">
        <ul className="destination-ul-list">
            <li className="destination-li-icons">
                <Link to="/Beach">
                <img className="iconbeach" src={BeachIcon} alt="Beach"/>
                </Link>
            </li>
 
            <li className="destination-li-icons">
                <Link to="/Camping">
                <img className="iconcamping" src={CampingIcon} alt="Camping"/>
                </Link>
            </li>



            <li className="destination-li-icons">
                <Link to="/Snowboarding">
                <img className="iconsnow" src={SnowIcon} alt="Snowboarding"/>
                </Link>
            </li>

        </ul>
    </div>


    </div>
    )
}

export default Destinations;