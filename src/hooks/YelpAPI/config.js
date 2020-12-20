const dotenv = require('dotenv').config({path: __dirname + '/.env'});

export const API_baseURL = 'https://api.yelp.com/v3/';

// remove this token before commit
export const BEARER_TOKEN = `${process.env.REACT_APP_API_KEY}`

