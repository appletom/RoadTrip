import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import cartReducers from './cartReducers';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  initState: cartReducers 
})

export default allReducers