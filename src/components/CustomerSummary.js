import React, { Component } from 'react';


class CustomerSummary extends Component {

  render() {
    const { user_name, user_email, user_phone, user_address, hours, date } = this.props.customer || { user_name: 'testing', user_email: 'test@test.co',user_phone: '111', user_address: 'xxx', hours: '1', date: '1984-22-2' }
    return(
      <div className="summary">
        <h2>Your details</h2>
          <ul>
            <li>{ user_name }</li>
            <li>{ user_email }</li>
            <li>{ user_phone }</li>
            <li>{ user_address }</li>
            <li>{  hours }</li>
            <li>{  date }</li>
          </ul>

      </div>
    )
  }
}

export default CustomerSummary ;
