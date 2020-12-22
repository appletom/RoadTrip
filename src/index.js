import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './components/reducers/index';

//import store from './redux/store';
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



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
