import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import OrderSummary from './OrderSummary'
import BookingForm from './BookingForm'

const SERVER_URL = 'https://happy-find.herokuapp.com/orders/create.json';


class Booking extends Component {
  constructor(props) {
    super(props);
    // event handler and function bindings
    this._incrementPage = this._incrementPage.bind(this);
    // initial state setup
    // pull out history state -- should contain supplier from search page
    const hist = props.history.location.state

    this.state = {
      // ternary -- comparison ? value if true : value if false
      supplier: hist === undefined ? {/* todo: dummy data */} : (hist.supplier || {}),
      bookingPage: 1
    }
  }
  //incrment page function
  _incrementPage(){
    this.setState( { bookingPage: this.state.bookingPage + 1 } )
  }
  render() {
    // switch between components bsed on booking process stage
    let displayPage;
    switch (this.state.bookingPage) {
      case 1:
        displayPage = <SupplierDetails onSubmit={ this._incrementPage }/>
        break;
      case 2: // use details
        displayPage = <BookingForm  onSubmit={ this._incrementPage }/>
        break;
      case 3: // booking summary
        displayPage = <OrderSummary />
        break;
      // case 4: // confirm and pay
      //   displayPage = <SupplierDetails />
      //   break;
      default:
        displayPage = <SupplierDetails onSubmit={ this._incrementPage } />
    }
    return(
      <main>
      <h1>Booking {this.state.bookingPage}</h1>
       {displayPage}
     </main>
    )
  }// end of reder
}//end of class Booking


class SupplierDetails extends Component {
  constructor(){
  super();
    this._handleChangePageStage = this._handleChangePageStage.bind(this);
   }

  _handleChangePageStage() {
      // console.log(this.props);
      // do something else
      // do anothe something
      // do as many things as you like
      this.props.onSubmit();
  }

  render() {
    return(
        <div>
          <h1>SupplierDetails</h1>
  </div>
    )
  }//end of Render
}// end of SupplierDetails

///////////////////////////////////////////////////////////////////////


export default Booking;
