import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'https://happy-find.herokuapp.com/orders/create.json';

class BookingForm extends Component {
  constructor(props) {
    super(props);

    const user = localStorage.user ? JSON.parse(localStorage.user) : {};
    
    this.state = {
      service_id: this.props.serviceID,
      user_name: user.name,
      user_email: user.email,
      user_phone: user.phone,
      user_address: user.address,
      hours: '',
      date: ''
    }

    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeEmail = this._handleChangeEmail.bind(this);
    this._handleChangePhone = this._handleChangePhone.bind(this);
    this._handleChangeAddress = this._handleChangeAddress.bind(this);
    this._handleChangeDuration = this._handleChangeDuration.bind(this);
    this._handleChangeDate = this._handleChangeDate.bind(this);
    
    //SubmitForm
    this._handleSubmitSaveUser = this._handleSubmitSaveUser.bind(this);
    
    //stagepage
    this._handleChangePageStage = this._handleChangePageStage.bind(this);
  }

  _handleChangePageStage() {
    if (this.props.onSubmit) {
      this.props.onSubmit();
    } else {
      console.warn('does <BookingForm /> need an onSubmit prop?');
    }
    this.props.callback(this.state) // sends user info to booking component
  }
/////////////
  _handleChangeName(e) {
    this.setState( {user_name: e.target.value} );
  }
  _handleChangeEmail(e) {
  this.setState( {user_email: e.target.value} );
  }
  _handleChangePhone(e) {
  this.setState( {user_phone: e.target.value} );
  }
  _handleChangeAddress(e) {
  this.setState( {user_address: e.target.value} );
  }
  _handleChangeDuration(e) {
  this.setState( {hours: e.target.value} );
  }
  _handleChangeDate(e) {
  this.setState( {date: e.target.value} );
  }
  // _handleChangeDate(e) {
  //   this.setState( {service_id: e.target.value} );
  // }
  /////SubmitFormUser
  _handleSubmitSaveUser(e){
    e.preventDefault();
    console.log(this.state)
    axios.post(SERVER_URL, this.state ).then( (results) => {
      console.log(results);
      this._handleChangePageStage();

    })
  }

  doPropsUpdates() {
    if (this.props.serviceID !== this.state.service_id){
      this.setState({
        service_id: this.props.serviceID
      })
    }
  }

  render() {
    this.doPropsUpdates();
    return(
      <main>
      <div>
      <h2>Sign in or Sign Up</h2>

      <form onSubmit={ this._handleSubmitSaveUser }>
        <fieldset> 
          <label htmlFor="name">Full Name</label>
          <input onChange={ this._handleChangeName } value={this.state.user_name} name="name" type="text" placeholder="Full Name" required autoFocus />
        </fieldset>

        <fieldset> 
          <label htmlFor="email">Email</label>
          <input onChange={ this._handleChangeEmail } value={this.state.user_email} name="email" type="text" placeholder="Email" required  />
        </fieldset>

        <fieldset>
          <label htmlFor="phone">Phone</label>
          <input onChange={ this._handleChangePhone } value={this.state.user_phone} name="phone" type="text" placeholder="Phone" required />
        </fieldset>
          
        <fieldset>
          <label htmlFor="address">Address</label>
          <input 
            onChange={ this._handleChangeAddress }
            value={this.state.user_address}
            name="address"
            type="text"
            placeholder="Full address"
            required />
        </fieldset>

        <fieldset>
          <label htmlFor="duration">Duration</label>
          <input 
            onChange={ this._handleChangeDuration }
            value={this.state.hours}
            name="duration"
            type="text"
            placeholder="Duration"
            required />
        </fieldset>
                    
        <fieldset>
          <label htmlFor="date">Date</label>
          <input 
            onChange={ this._handleChangeDate }
            value={this.state.date}
            name="date"
            type="date"
            placeholder="date"
            required />
        </fieldset>
                
        <input name="submit" type="submit" value="Submit" />

      </form>
    </div>
  </main>
    )
  }//end of render
}//end of booking

// class Users extends Component  {
//   constructor() {
//       super();
//       this.state = {
//       orders: []
//     };
//     this.saveOrder = this.saveOrder.bind(this);
//     const fetchOrders = () => {
//       axios.get(SERVER_URL).then( (results) => {
//       console.log(results);
//       this.setState({ orders: results.data });
//       setTimeout(fetchOrders, 4000);
//       })
//     }
//     fetchOrders();
//     }
//       saveOrder(s) {
//         axios.post(SERVER_URL, {user_name: s.user_name, user_email: s.user_email, user_phone: s.user_phone, user_address: s.user_address, hours: s.hours, date: s.date}).then((results) => {
//       this.setState( {orders: [results.data,...this.state.orders] });
//     })
//   }
//   render (){
//     return (
//       <main>
//       <div>
//         <h1>Created Order</h1>
//         <Users onSubmit={ this.saveUser }  />

//       </div>
//       </main>
//     )
//   }
// }//end of createUser

export default BookingForm;
