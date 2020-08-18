import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './components/layouts/NavbarComp';
import India from './components/pages/India';
import Countries from './components/countries/Countries';

import IndiaState from './context/india/IndiaState';
import CountryState from './context/countries/CountryState';
import Home from './components/pages/Home';

const App = () => {
  return (
    <CountryState>
      <IndiaState>
        <Router>
          <NavbarComp />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/countries" component={Countries} />
              <Route exact path="/india" component={India} />
            </Switch>
          </div>
        </Router>
      </IndiaState>
    </CountryState>
  );
};

export default App;
