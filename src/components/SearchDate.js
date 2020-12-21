import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';

const SearchDate = () => {
    return (
        <div className="searchDate">
            <Button className="searchButtonDates" variant="outlined">
                Search Dates
            </Button>
        </div>
    )
}

export default SearchDate;

