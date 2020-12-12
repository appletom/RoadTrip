import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Destinations from './components/Destinations';

import Credits from './components/Credits';

import Draggable from 'react-draggable';

const App = () => {
  return (
    
  <div>

  <header>


      <Route exact path="/" component={Landing} />


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
