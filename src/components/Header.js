import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import HomeIcon from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { useSelector } from 'react-redux';

import Browse from './Browse';
import Cart from './Cart';
import Form from './Form';
import CalendarNavbar from './CalendarNavbar';
import Zoom from 'react-reveal';
import '../index.css';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {description: "eat play sleep"};
  }

  componentDidMount() {
    setTimeout(() => {
    this.setState({description: "games and activities"})
    }, 3000)
  }

  render() {

      return (

        <div className="header">
            <div>
            <h1 className="appTitle">ROAD TRIP</h1>
            <h5 id="appDesc">{this.state.description}</h5> 
            </div>
                <div className="headerIcon">
                    <Link to="/" ><Button><HomeIcon fontSize="small"/></Button></Link>                
                    <Link to="/Browse" ><Button><Search fontSize="small"/></Button></Link>       
                    <Link to="/Cart" ><Button><ShoppingCartIcon fontSize="small" /></Button></Link>


                    <CalendarNavbar/>
                </div>    
            </div>

      )

  }

    
}

export default Header;