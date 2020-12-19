import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';


import '../index.css';


const Travel = () => {

    return (

        <div className="travel-page">
            <div className="travel-forms">
                <h4>Food</h4>
                <input type="text" name="input-food" placeholder="Eat something"/>
                <button>Search</button>
            </div>

            <div className="travel-forms">
                <h4>Gas</h4>
                <input type="text" name="input-food" placeholder="Fill up"/>
                <button>Search</button>
            </div>

            <div className="travel-forms">
                <h4>Hotel</h4>
                <input type="text"name="input-food" placeholder="Sleep easy"/>
                <button>Search</button>
            </div>

        </div>

    )

}

export default Travel;