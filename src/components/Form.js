import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import Play from './Play'
import Browse from './Browse'
import '../index.css';

// stateless components require props argument to acces getTravel from './Travel'
const Form = props => (

    <form onSubmit={props.getTravel} className="Form-div"> 
        <div className="Form-btn-div">
            <h1 className="formHeader">Games and activities</h1>
                <button className="formButton"><Link to="./Browse">Browse </Link></button>
                <button className="formButton"><Link to="./Snowboarding">Play </Link></button>
                </div>
    </form>


    )

export default Form;