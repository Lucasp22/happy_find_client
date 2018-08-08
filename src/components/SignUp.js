import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(){
    super();

    this.state = {
      name: '',
      email: ''
    }
    this._handleChangeName = this._handleChangeName.bind(this)
    this._handleChangeEmail = this._handleChangeEmail.bind(this)
    this._handleChangeAddress = this._handleChangeAddress.bind(this)
    this._handleChangePassword = this._handleChangePassword.bind(this)

  }


    _handleChangeName(event){
      this.setState({name: event.target.value})
       console.log(event.target.value);
    }
    _handleChangeEmail(event) {
      this.setState({email: event.target.value})
       console.log(event.target.value);
    }
    _handleChangeAddress(event) {
      this.setState({address: event.target.value})
    }
    _handleChangePassword(event) {
      this.setState({password: event.target.value})
    }

    _handleSubmit(event){
      event.preventDefault();
      // axios here
    }


  render(){
    return(
      <main>
      <form class="sign" onSubmit={this._handleSubmit}>
       <h3 class="robo">SignUp </h3>
       <input type="text" ref="name" placeholder=" name" value={this.state.name} onChange={this._handleChangeName}/>
       <input type="text" ref="email" placeholder="enter you email" value={this.state.email} onChange={this._handleChangeEmail}/>
       <input type="text" ref="address" placeholder=" address" value={this.state.address} onChange={this._handleChangeAddress}/>
       <input type="password" ref="password" placeholder=" password" value={this.state.password} onChange={this._handleChangePassword}/>
       <input type="password" ref="password" placeholder=" password confirmation" value={this.state.password} onChange={this._handleChangePassword}/>
       <input type="submit" value="SignUp" />
     </form>
     </main>
    )
  }
}

export default SignUp
