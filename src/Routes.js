import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Edit from './components/Edit';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Splash from './components/Splash';


const Routes = (
  <Router>
    <div>
      <Route exact path="/*" component={NavBar} /> {/* header */}
      <Switch> {/* only one of these will display at a time */}
        <Route path = "/booking/:id" component={Booking} />
        <Route path = "/booking" component={Booking} />
        <Route path = "/edit" component={Edit} />
        <Route path = "/login" component={ Login } />
        <Route path = "/signup" component={ SignUp } />
        <Route path = "/search" component={Home} />
        <Route path = "/home" component={Home} />
        <Route path = "/" component={ Splash } />
      </Switch>
      <Route exact path="/*" component={Footer} /> {/* footer */}
    </div>
  </Router>
)

export default Routes;
