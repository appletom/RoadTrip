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
            <div className="travel-nav-container">

            <Link to="/" className="headerIcon"><HomeIcon fontSize="medium" /></Link>                
            <Link to="/Travel" className="headerIcon"><SearchIcon fontSize="medium" /></Link>
            <Link to="/cart" className="headerIcon"><ShoppingCartIcon fontSize="medium" /></Link>

            </div>
        </nav>

    )

}



export default TravelNavbar;