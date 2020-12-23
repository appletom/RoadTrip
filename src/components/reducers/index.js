
import React from 'react';
import { combineReducers } from 'redux';

import cartCounter from './cartCounter';
import isLogged from './isLogged';
import cartReducers from './cartReducers';

const allReducers = combineReducers({
    cartCounter: cartCounter,
    isLogged: isLogged,
    cartReducers: cartReducers
})

export default allReducers;