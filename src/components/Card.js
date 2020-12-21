import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';

import '../index.css';

const Card = (
    src,
    title,
    description,
    price,
    cart
    
) => {
    return (
        <div className="card">
            <img src={src} alt="image" />
            <div className="cardDetails">
                <h2>{title}</h2> 
                <h4>{description}</h4>
                <h3>{price}</h3>
                <h3>{cart}</h3>

            </div> 
        </div>
    )
}

export default Card;