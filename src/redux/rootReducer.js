// one reducer handles UI. one handles shop state.
import { combineReducers } from 'redux';

import shopReducer from './Shopping/shopping-reducers';

const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;