import React, { Component } from 'react';
import BookingForm from './BookingForm';
import SupplierDetails from './SupplierDetails';
import CustomerSummary from './CustomerSummary';
import PaySummary from './PaySummary';

import Axios from 'axios';

const API_URL = "https://happy-find.herokuapp.com/supplier/"

class Booking extends Component {
  constructor(props) {
    super(props);
    // event handler and function bindings
    this._incrementPage = this._incrementPage.bind(this);
    this.setServiceID = this.setServiceID.bind(this);
    this.setStateForm = this.setStateForm.bind(this);
    // initial state setup
    // pull out history state -- should contain supplier from search page
    const hist = props.history.location.state
    const supplierFromProps = props.match.params.id

    if (supplierFromProps) {
      Axios.get(API_URL + supplierFromProps).then((r) => {
        this.setState({ supplier: r.data })
      })
    }

    this.state = {
      // ternary -- comparison ? value if true : value if false
      supplier: hist === undefined ? {/* todo: dummy data */} : (hist.supplier || {}),
      bookingPage: 1,
      serviceID: -1
    }
  }

  setServiceID(id){
    this.setState( { serviceID: id });
  }
  setStateForm(s){
    this.setState({ formState: s});
  }

  //incrment page function
  _incrementPage(){
    this.setState( { bookingPage: this.state.bookingPage + 1 } )
  }
  render() {
    // switch between components bsed on booking process stage
    let displayPage;
    switch (this.state.bookingPage) {
      case 1: // user details
        displayPage = <BookingForm  onSubmit={ this._incrementPage } callback={this.setStateForm} />
        break;
      case 2: // booking summary - displayPage is an array.
        displayPage = [
          <SupplierDetails 
            onSubmit={this._incrementPage} 
            supplier={this.state.supplier} 
            callback={this.setServiceID} 
          />,
          <CustomerSummary customer={ this.state.formState } />,
          <PaySummary />
        ]
        break;
      default:
        this.setState({bookingPage: 1});
    }
    return(
      <main>
        <div className="checkout-progress">
          <div className="info">
            <div className={("stage" + this.state.bookingPage >= 1 ? ' active' : '')}>
              <span>Step 1 - Your Details</span>
            </div>
            <div className={"stage" + this.state.bookingPage >= 2 ? ' active' : ''}>
              <span>Step 2 - Summary</span>
            </div>
          </div>
          <div className="graphic">
            <div className={"circle" + this.state.bookingPage >= 1 ? ' active' : ''} />
            <div className={"line" + this.state.bookingPage >= 2 ? ' active' : ''} />
            <div className={"line" + this.state.bookingPage >= 2 ? ' active' : ''} />
          </div>
        </div>
        {displayPage}
      </main>
    )
  }// end of reder
}//end of class Booking

///////////////////////////////////////////////////////////////////////


export default Booking;
