import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Zoom from 'react-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';


import { headerColor } from './styles';
import SearchDate from './SearchDate';

const TravelNavbar = () => {

    return(
        <nav className="travel-nav">
            <div className="headerIcon">


            <Link to="/" ><Button><HomeIcon fontSize="medium"/></Button></Link>                
            <Link to="/Travel" ><Button><SearchIcon fontSize="medium" /></Button></Link>
            <Link to="/cart" ><Button><ShoppingCartIcon fontSize="medium" /></Button></Link>
            <Button><SearchDate/></Button>
            </div>
        </nav>

    )

}



export default TravelNavbar;