import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducers from './components/reducers/cartReducers'

//import store from './redux/store';
const store = createStore(cartReducers);

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
