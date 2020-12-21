import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Zoom from 'react-reveal';

import { headerColor } from './components/styles'
import './index.css';

import Landing from './components/Landing';
import Games from './components/Games'; //where destination lives
import Camping from './components/Camping';
import Snowboarding from './components/Snowboarding';
import Form from './components/Form';
import Credits from './components/Credits';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  
    
  render () {


  return (
    

  <div className="App">
  

  <header>
    <Header />

  </header>

  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Games" component = {Games} /> 
      <Route exact path="/camping" component = {Camping} /> 
      <Route exact path="/snowboarding" component = {Snowboarding} />
      <Route exact path="/Credits" component = {Credits} /> 
    </Switch>

  </main>
  <footer>
    <Footer />

  </footer>

  </div>


  );
}
  }
    



export default App;
