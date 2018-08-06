// import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Booking extends Component {
  render() {
    return(
      <div>
      <h1>Booking</h1>
      <SupplierDetails />
      <BookingForm />
      <App />

      </div>
    )
  }// end of reder
}//end of class Booking


class SupplierDetails extends Component {
  render() {
    return(
        <div>
          <h1>SupplierDetails</h1>
    <table>
      <tr>
                <th><h4>Name</h4></th>
                  <th><h4>Skill</h4></th>
                    <th><h4>Stars</h4></th>
      </tr>
                <tr>
                  <th><h4>Lucas Padua</h4></th>
                  <th>  <h4>WebDev</h4></th>
                    <th>  <h4>* * *</h4></th>
                </tr>
    </table>
  </div>
    )
  }//end of Render
}// end of SupplierDetails


class BookingForm extends Component {

  render() {
    return(
      <div>
      <h4>Your Details</h4>
      <form>
        <label>Full Name</label>
          <input name="name" type="text" placeholder="Full Name" required autoFocus />
          <label>Email</label>
          <input name="email" type="text" placeholder="Email" required autoFocus />
            <label>Phone</label>
            <input name="phone" type="text" placeholder="Phone" required autoFocus />
              <label>Address</label>
              <input name="address" type="text" placeholder="Full address" required autoFocus />
                <br/><br/>
                  <input  name="submit" type="submit" value="Submit" />
      </form>
    </div>
    )
  }//end of render
}//end of booking



class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <div className="example">
          <h1>Payment</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}



export default Booking;
