import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Draggable from 'react-draggable';


import cooler from '../assets/images/camping/cooler.jpg'


import '../index.css';

class Camping extends Component {
    getTrivia = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            
       <div className="camping-page">
        <div className="camping-bg">
        <header>
            <h1 className="trivia-title">Trivia</h1>
            <button>Start</button>
        </header>


        </div>
        </div>
    )
}
}   


export default Camping