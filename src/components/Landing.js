import React from 'react';
import Map from '../assets/images/landing/world.png';
import landing from '../landing.css'

const Landing = () => {
    return (

        
        <a href="/destinations">
        <img className="img-world" src={Map} alt="world map" />
        </a>

    )
}


export default Landing