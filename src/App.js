import { Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Destinations from './components/Destinations';

import Credits from './components/Credits';

import Draggable from 'react-draggable';

const App = () => {
  return (
    
  <div>

  <header>
    ROAD TRIP
    
    <Link to="/components/Destinations"> Destinations </Link>    
    <Link to="/components/Credits"> Credits </Link>
 
  </header>

  <main>
    <Switch>
      <Route exact path="./components/Destinations" component = {Destinations} />
    </Switch>

  </main>
  
  <footer>


  </footer>
  
  </div>
  );
}

export default App;
