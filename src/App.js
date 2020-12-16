import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


import './index.css';

import Landing from './components/Landing';
import Destinations from './components/Destinations'; //where destination lives 
import Beach from './components/Beach';
import Camping from './components/Camping';
import Snowboarding from './components/Snowboarding';

import Credits from './components/Credits';
//import Zoom from './components/Zoom';

//import Header from './components/Header';
//import Footer from './components/Footer';

import Draggable from 'react-draggable';




const App = () => {
  return (
    
  <div>

{ /*   <header>
     <div className="header-wrapper">
        <Header/>
      </div>


  </header>
*/}
  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/destinations" component = {Destinations} /> {/* /destinations is where you want {Destinations} to go */}
      <Route path="/beach" component = {Beach} /> 
      <Route path="/camping" component = {Camping} /> 
      <Route path="/snowboarding" component = {Snowboarding} />

          
    </Switch>

  </main>
  
{ /*   <footer>
      <div className="footer-wrapper">
        <Footer/>
      </div>


  </footer>
*/}  

  </div>
  );
}


export default App;
