import React from 'react';
import { Link } from 'react-router-dom';

import Games from './Games'
import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel} className="travel-form"> 
        <input className="searchBar" type="text" name="searchInput" placeholder="Eat, drink, gas"/>
        <input type="hidden" defaultValue={process.env.REACT_APP_API_ID}/>
        
        <div className="Travel-div">
        <button className="travelButton">Explore</button>
        <button className="travelButton"><Link to="./Games">Play</Link></button>
        
        </div>
    </form>

    )


export default Form;