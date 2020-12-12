import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Destinations from './components/Destinations'; //where destination lives 

import Credits from './components/Credits';

import Draggable from 'react-draggable';

import './landing.css';

const App = () => {
  return (
    
  <div>

  <header>



  </header>

  <main>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/destinations" component = {Destinations} /> {/* /destinations is where you want {Destinations} to go */}
    </Switch>

  </main>
  
  <footer>


  </footer>
  
  </div>
  );
}

export default App;
