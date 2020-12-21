import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Clock from './components/Clock';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

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
