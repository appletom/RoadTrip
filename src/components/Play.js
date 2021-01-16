import React, { Component }  from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import Camping from './Camping';
import Snowboarding from './Snowboarding';

import TravelIcon from '../assets/images/games/travelicon.jpg';
import CampingIcon from '../assets/images/camping/icontent.png';
import SnowIcon from '../assets/images/snowboarding/iconpenguin.png';



const Games = () => {
    return (
    <div>
    <div className="Games">



        <ul className="Games-ul-list"> 


            <li className="Games-li-icons">
                <h4>Solve a puzzle</h4>
                <Link to="/Snowboarding">
                <img className="icon" src={SnowIcon} alt="Snowboarding"/>
                </Link>
            </li>

        </ul>
    </div>

    
    </div>
    )
}

export default Games;