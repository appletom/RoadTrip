import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import Play from './Play'
import Explore from './Explore'
import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel} className="Form-div"> 
    <h1 className="formHeader">Games for the road</h1>
        <input className="searchBar" type="text" placeholder="Search our database"/>
        <Link to="/Explore" ><Button><SearchIcon fontSize="medium" /></Button></Link>
        
        <div className="Form-btn-div">
        <button className="formButton"><Link to="./Play">Play </Link></button>
        </div>
    </form>


    )

export default Form;