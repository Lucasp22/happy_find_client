import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import HappyFind from './components/HappyFind';


const Routes = (
  <Router>
    <div>
      <Route path="/*" component={HappyFind} />
      <Switch>
        <Route path = "/home" component={Home} />
      </Switch>
    </div>
  </Router>
)

export default Routes;
