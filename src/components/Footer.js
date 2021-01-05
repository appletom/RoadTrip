import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';


import Credits from './Credits';
import Zoom from 'react-reveal';
import '../index.css';

class Footer extends Component {
    constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
      return (
        <div className="Footer">

            <Link to="./Credits">Credits</Link>
       
        </div>
      )

  }

    
}

export default Footer;