import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import DateRangeIcon from '@material-ui/icons/DateRange';

const SearchDate = () => {
    // showCalendar state keeps track of when calendar button is clicked
    const [showCalendar, setShowCalendar] = useState
    (false);


    return (
        <nav className="travel-nav">
        <div className="headerIcon">
            <div className="searchDate">

            { /* if showCalendar is true then open calendar */}
            {showCalendar && <h1>open calendar</h1>}
            

             <Button onClick={() => 
                setShowCalendar(!showCalendar)}
                className="dateButton">
                <DateRangeIcon fontSize="small"/>
            </Button> 

            </div>    
        </div>
        </nav>
    )
}

export default SearchDate;



                    