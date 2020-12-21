import React from 'react';
import { Link } from 'react-router-dom';

import Games from './Games'
import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel} className="Form-div"> 
    <h1 className="formHeader">Explore</h1>
        <input className="searchBar" type="text" placeholder="Eat, drink, explore"/>
        
        <div className="Form-btn-div">
        <button className="formButton">Search</button>
        <button className="formButton"><Link to="/Games">Play</Link></button>
        </div>
    </form>


    )

export default Form;