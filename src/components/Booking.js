import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Booking extends Component {
  render() {
    return(
      <div>
      <h1>Booking</h1>
      <SupplierDetails />
      <BookingForm />

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


export default Booking;
