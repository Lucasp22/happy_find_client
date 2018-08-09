import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';

const SERVER_URL = 'https://happy-find.herokuapp.com/';

class SignUp extends Component {
  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      address: "",
      password: "",
      password_confirmation: ""
    }
    this._handleChangeEmail = this._handleChangeEmail.bind(this)
    this._handleChangeName = this._handleChangeName.bind(this)
    this._handleChangeAddress = this._handleChangeAddress.bind(this)
    this._handleChangePassword = this._handleChangePassword.bind(this)
    this._handleChangePasswordConfirmation = this._handleChangePasswordConfirmation.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }
  _handleChangeName(event) {
    this.setState({name: event.target.value})
  }
  _handleChangeAddress(event) {
    this.setState({address: event.target.value})
  }

  _handleChangePassword(event) {
    this.setState({password: event.target.value})
  }
  _handleChangePasswordConfirmation(event) {
    this.setState({password_confirmation: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    axios
      .post(SERVER_URL+'suppliers.json', {
        supplier: {
          email: this.state.email,
          name: this.state.name,
          address: this.state.address,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        }
      },{ headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }}).then ( (response) => {
        swal("Success your account was created!")
        this.props.history.push("/login");
      }).catch(err => {
        if(err.message.includes("422")) {
          swal("Sign up failed ! Please try again! ")
        };
      });
  }



  render(){
    return(
      <main>
      <form className="sign" onSubmit={this._handleSubmit} >
       <h3 className="logino" >SignUp </h3>
       <input type="text" ref="email" placeholder=" email" value={this.state.email} onChange={this._handleChangeEmail}/>
       <input type="text" ref="name" placeholder=" name" value={this.state.name} onChange={this._handleChangeName}/>
       <input type="text" ref="address" placeholder=" address" value={this.state.address} onChange={this._handleChangeAddress}/>
       <input type="password" ref="password" placeholder=" password" value={this.state.password} onChange={this._handleChangePassword}/>
       <input type="password" ref="password" placeholder=" password confirmation" value={this.state.password_confirmation} onChange={this._handleChangePasswordConfirmation}/>
       <input type="submit" value="SignUp" disabled={this.state.address !== "" && this.state.email !== "" && this.state.password !== "" && this.state.password_confirmation !== "" ? false : true} />
     </form>
     </main>
    )
  }
}

export default SignUp
