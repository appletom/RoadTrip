import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import '../index.css';


const Calendar = () => { 
 
        // render below dates using react-date-range
        //set up states for start and end dates
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());

        //displays date range
        const selectionRange = {
            startDate: startDate,
            endDate: endDate,
            key: "selection",
        };

        //responsible for selecting start and end dates
        function handleSelect(ranges) {
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate);
        }

        return (
            <div className="Calendar">
                <DateRangePicker ranges = {
                    [selectionRange]} onChange = 
                    {handleSelect} />
                }
                
            </div>
        )
    }


export default Calendar;