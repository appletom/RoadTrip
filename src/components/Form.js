import React from 'react';



import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel}> 
        <input type="text" name="searchInput" placeholder="Eat, drink, gas"/>
        
        <button>Search</button>
    </form>

    )


export default Form;