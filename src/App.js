import { Link, Route, Switch } from 'react-router-dom';

import Beach from './components/Beach';
import Camping from './components/Camping';
import Home from './components/Home';
import Skiing from './components/Skiing';
import Credits from './components/Credits';

import Draggable from 'react-draggable';

const App = () => {
  return (
    
  <div>

  <header>
    ROAD TRIP

    <Link to="/components/Home"> Home </Link>    
    <Link to="/components/Beach"> Beach </Link>
    <Link to="/components/Camping"> Camping </Link>
    <Link to="/components/Skiing"> Skiing </Link>
    <Link to="/components/Credits"> Credits </Link>

    <Draggable>
      <div>I can now be moved around!</div>
    </Draggable>

  </header>

  <main>
    <Switch>
      <Route exact path="./components/Home" component = {Home} />
    </Switch>

  </main>
  
  <footer>


  </footer>
  
  </div>
  );
}

export default App;
