import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

import { headerColor } from './styles'

const TravelNavbar = () => {
    return(
        <nav className="travel-nav">
            <div className="headerIcon">

            <Link to="/" ><HomeIcon fontSize="medium"/></Link>                
            <Link to="/Travel" ><SearchIcon fontSize="medium" /></Link>
            <Link to="/cart" ><ShoppingCartIcon fontSize="medium" /></Link>

            </div>
        </nav>

    )

}



export default TravelNavbar;