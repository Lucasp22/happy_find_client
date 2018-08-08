import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Booking from './components/Booking';
import CheckoutForm from './components/CheckoutForm';
import PaySummary from './components/PaySummary';
import Login from './components/Login';
import SignUp from './components/SignUp';



const Routes = (
  <Router>
    <div>
      <Route exact path="/*" component={NavBar} /> {/* header */}
      <Switch> {/* only one of these will display at a time */}
      <Route path = "/booking" component={Booking} />
      <Route path = "/checkoutform" component={CheckoutForm} />
      <Route path = "/login" component={ Login } />
      <Route path = "/signup" component={ SignUp } />
      <Route path = "/paysummary" component={PaySummary} />
      <Route path = "/" component={Home} />
      </Switch>
      <Route exact path="/*" component={Footer} /> {/* footer */}

    </div>
  </Router>
)

export default Routes;
