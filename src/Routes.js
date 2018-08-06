import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Booking from './components/Booking';


const Routes = (
  <Router>
    <div>
      <Route exact path="/*" component={NavBar} />
      <Switch>

        <Route path = "/booking" component={Booking} />
        <Route path = "/" component={Home} />

      </Switch>
      <Route exact path="/*" component={Footer} />

    </div>
  </Router>
)

export default Routes;
