import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//store for shopping cart
import cartReducers from './components/reducers/cartReducers'
import counterReducer from './components/reducers/counter'
import loggedReducer from './components/reducers/isLogged'

//import store from './redux/store';
const store = createStore(cartReducers);


const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}> 
    <App />
    </Provider> 
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
