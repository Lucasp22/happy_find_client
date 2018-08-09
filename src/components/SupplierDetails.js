import React, { Component } from 'react';
import axios from 'axios'

const API_URL ="https://happy-find.herokuapp.com/suppliers/"

class SupplierDetails extends Component {
  constructor(props) {
    super(props);

    // bind event handlers
    this._buttonClick = this._buttonClick.bind(this);

    // state
    this.state = {
      services: [{}],
      fetch_state: 0
    }
  }

  _buttonClick() {
    // console.log(this.props);
    // do something else
    // do anothe something
    // do as many things as you like
    this.props.onSubmit();
  }

  refreshServices() {
    if (this.props.supplier && this.state.fetch_state === 0) {
      axios.get(API_URL + this.props.supplier.id + "/services").then((r) => {
        this.setState({ services: r.data, fetch_state: 1 })
        this.props.callback(r.data[0].id)
      })
    }
  }

  render() {
    // got to get supplier details from main form, expect supplier details to be provided in prop
    this.refreshServices();

    const { name, email } = this.props.supplier || { name: 'testing', email: 'test@test.co' }
    const { price } = this.state.services[0] || { price: "100" }
    return (
      <div class="summary">
        <h2>SupplierDetails</h2>
        <ul>
          <li>{ name }</li>
          <li>{ email }</li>
          <li>{ price }</li>
        </ul>
      </div>
    )
  }//end of Render
}// end of SupplierDetails

export default SupplierDetails;
