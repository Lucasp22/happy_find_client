import React, { Component } from 'react';




class CustomerSummary extends Component {

  render() {
    const { user_name, user_email, user_phone, user_address, hours, date } = this.props.customer || { user_name: 'testing', user_email: 'test@test.co',user_phone: '111', user_address: 'xxx', hours: '1', date: '1984-22-2' }
    return(
      <div>
        <h1>Customer Details SUmmary Here</h1>
        { user_name }/{ user_email }/{ user_phone }/{ user_address }/{ hours }/{ date }
      </div>
    )
  }
}

export default CustomerSummary;
