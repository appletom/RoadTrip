import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Zoom from 'react-reveal';

import { headerColor } from './components/styles'
import './index.css';

import Landing from './components/Landing';
import Play from './components/Play'; 
import Browse from './components/Browse'; 
import Cart from './components/Cart';
import Snowboarding from './components/Snowboarding';
import Form from './components/Form';
import Credits from './components/Credits';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  
    
  render () {


  return (
    

  <div className="App">
  
  <Router>
  <header>
    <Header />

  </header>

  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Play" component = {Play} /> 
      <Route exact path="/Browse" component = {Browse} /> 
      <Route exact path="/Cart" component = {Cart} /> 
      <Route exact path="/Snowboarding" component = {Snowboarding} />
      <Route exact path="/Credits" component = {Credits} /> 
    </Switch>

  </main>
  <footer>
    <Footer />

  </footer>
  </Router>
  
  </div>


  );
}
  }
    



export default App;
