import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Destinations from './components/Destinations'; //where destination lives 
import Beach from './components/Beach';
import Camping from './components/Camping';
import Snowboarding from './components/Snowboarding';

import Credits from './components/Credits';

import Draggable from 'react-draggable';

import './landing.css';
import './destinations.css';
import './beach.css';
import './camping.css';
import './snowboarding.css';

const App = () => {
  return (
    
  <div>

  <header>



  </header>

  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/destinations" component = {Destinations} /> {/* /destinations is where you want {Destinations} to go */}
      <Route path="/beach" component = {Beach} /> 
      <Route path="/camping" component = {Camping} /> 
      <Route path="/snowboarding" component = {Snowboarding} />             
    </Switch>

  </main>
  
  <footer>


  </footer>
  
  </div>
  );
}

export default App;
