import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';

import Form from './Form';
import CalendarNavbar from './CalendarNavbar';
import Zoom from 'react-reveal';
import '../index.css';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {description: "eat play sleep"};
  }

  componentWillMount() {
    setTimeout(() => {
    this.setState({description: "travel the world"})
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
                    <Link to="/Cart" ><Button><ShoppingCartIcon fontSize="small" /></Button></Link>
                    
                    <CalendarNavbar/>
                </div>    
            </div>

      )

  }

    
}

export default Header;