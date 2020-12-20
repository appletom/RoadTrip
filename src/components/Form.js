import React from 'react';



import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel} className="travel-form"> 
        <input className="travel-input" type="text" name="searchInput" placeholder="Eat, drink, gas"/>
        <input type="hidden" defaultValue={process.env.REACT_APP_API_ID}/>
        <button>Search</button>
    </form>

    )


export default Form;