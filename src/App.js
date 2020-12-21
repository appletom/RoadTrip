import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useEntityComponentSystem } from 'react-entity-component-system'
import Zoom from 'react-reveal';


import './index.css';

import Landing from './components/Landing';
import Games from './components/Games'; //where destination lives 
import Travel from './components/Travel';
import Camping from './components/Camping';
import Snowboarding from './components/Snowboarding';

import Credits from './components/Credits';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: "travel the world"};
  }

  componentWillMount() {
    setTimeout(() => {
    this.setState({description: "games for the road"})
    }, 2000)
  }
    
  render () {


  return (
    

  <div className="App">
  
    
  <header>  
    <Zoom >
    <div className="header">
      <header>

        <h1 className="appTitle">ROAD TRIP</h1>


        <h5 id="appDesc">{this.state.description}</h5> 


      </header>
    </div>
    </Zoom>
  </header>

  <div className="main">

  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Games" component = {Games} /> {/* /destinations is where you want {Destinations} to go */}
      <Route exact path="/travel" component = {Travel} /> 
      <Route exact path="/camping" component = {Camping} /> 
      <Route exact path="/snowboarding" component = {Snowboarding} />
    </Switch>
    
  </main>

  </div>

  </div>
  );
}
  }
    



export default App;
