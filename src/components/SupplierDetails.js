import React, { Component } from 'react';

class SupplierDetails extends Component {
  render() {
    // got to get supplier details from main form, expect supplier details to be provided in prop

    const { name, email } = this.props.supplier || { name: 'testing', email: 'test@test.co' }
    const { price } = this.props.service || { price: "100" }
    return (
      <div className="summary">
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
