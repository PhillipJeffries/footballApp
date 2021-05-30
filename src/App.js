import { render } from '@testing-library/react';
import React from 'react';

import InfoCard from './components/info-card/teamInfoCard'




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Teams from './components/teams/teams';
import Competitions from './components/competitions/competitions';




let HomePage = () => {
    return(
      <div>
        <h1>
          Hello
        </h1>
      
      </div>
    )
  
}




export default class App extends React.Component {

  
  state = {}


  constructor(){
    super();

  }

  

   
  render(){
    return (
      <Router>
        <div className="pageWrapper">
          <h4>navigation</h4>
          <nav className="routeNavWrapper">
            <ul className="routeList">
              <li>
                <Link className="routeLink" to="/">Home</Link>
              </li>
              <li>
                <Link className="routeLink" to="/teams">Teams</Link>
              </li>
              <li>
                <Link className="routeLink" to="/competitions">Competitions</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/teams">
              <Teams/>
            </Route>
            <Route path="/competitions">
              <Competitions/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
}
}

