import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Routes = (
  <Router>
    <div>
      <Route path="/*" component={NavBar} />
      <Switch>
        <Route path = "/" component={Home} />
      </Switch>
      <Route path="/*" component={Footer} />
    </div>
  </Router>
)

export default Routes;
