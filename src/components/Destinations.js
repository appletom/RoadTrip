import React, { Component }  from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';

import Travel from './Travel';
import Camping from './Camping';
import Snowboarding from './Snowboarding';

import TravelIcon from '../assets/images/travel/travelicon.jpg';
import CampingIcon from '../assets/images/camping/icontent.png';
import SnowIcon from '../assets/images/snowboarding/iconpenguin.png';



const Destinations = () => {
    return (
    <div>
    <div className="destinations">



        <ul className="destination-ul-list">
            <li className="destination-li-icons">
                <Link to="/Travel">
                <img className="icon" src={TravelIcon} alt="Travel"/>
                </Link>
            </li>
 
            <li className="destination-li-icons">
                <Link to="/Camping">
                <img className="icon" src={CampingIcon} alt="Camping"/>
                </Link>
            </li>



            <li className="destination-li-icons">
                <Link to="/Snowboarding">
                <img className="icon" src={SnowIcon} alt="Snowboarding"/>
                </Link>
            </li>

        </ul>
    </div>


    </div>
    )
}

export default Destinations;