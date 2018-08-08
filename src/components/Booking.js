import React, { Component } from 'react';
import BookingForm from './BookingForm';
import SupplierDetails from './SupplierDetails';
import CustomerSummary from './CustomerSummary';
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
      case 2: // use details
        displayPage = <BookingForm  onSubmit={ this._incrementPage } callback={this.setStateForm} />
        break;
      case 3: // booking summary
        displayPage = [
          <SupplierDetails onSubmit={this._incrementPage} supplier={this.state.supplier} callback={this.setServiceID} />,<CustomerSummary />
        ]
        break;
      // case 4: // confirm and pay
      //   displayPage = <SupplierDetails />
      //   break;
      default:
        displayPage = <SupplierDetails onSubmit={this._incrementPage} supplier={this.state.supplier} callback={this.setServiceID} />   
    }
    return(
      <main>
      <h1>Booking {this.state.bookingPage}</h1>
       {displayPage}
     </main>
    )
  }// end of reder
}//end of class Booking

///////////////////////////////////////////////////////////////////////


export default Booking;
