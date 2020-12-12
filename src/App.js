import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Destinations from './components/Destinations'; //where destination lives 
import Beach from './components/Beach';
import Camping from './components/Camping';
import Snowboarding from './components/Snowboarding';

import Credits from './components/Credits';

import AlertError from './components/AlertError';
import AlertSuccess from './components/AlertSuccess';
import Footer from './components/Footer';

import Draggable from 'react-draggable';

import './index.css';
import './landing.css';
import './destinations.css';
import './beach.css';
import './camping.css';
import './snowboarding.css';


const App = () => {
  return (
    
  <div>

  <header>

      <div className="wrapper">
        <AlertError title="not a match" type="error">
        <div>It's not a match, try again!</div>
        </AlertError>
      </div>

      <div className="wrapper">
        <AlertSuccess title="That's correct" type="success">
        <div>That's correct!</div>
        </AlertSuccess>
      </div>

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
      <div className="footer-wrapper">
        <Footer/>
      </div>


  </footer>
  

  </div>
  );
}

export default App;
