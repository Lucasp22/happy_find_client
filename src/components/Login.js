import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

     this.state = {
     email: '',
     password_digest: ''
     }
     this._handleChangeEmail = this._handleChangeEmail.bind(this)
     this._handleChangePassword = this._handleChangePassword.bind(this)
     //this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleChangeEmail(event) {
      this.setState({email: event.target.value})
      console.log(event.target.value);
    }

  _handleChangePassword(event) {
    this.setState({password: event.target.value})
    console.log(event.target.value);
  }


  // define the obSubmit function
  // get the data from the setState
  // send that data to rails api


  render(){
    return(
      <form class="formo" onSubmit={this._handleSubmit}>
       <h3>Login in</h3>
       <input type="text" ref="email" placeholder="enter you email" value={this.state.email} onChange={this._handleChangeEmail}/>
       <input type="password" ref="password" placeholder="enter password" value={this.state.password_digest} onChange={this._handleChangePassword} />
       <input type="submit" value="Login" />
     </form>
   )

  }
}

export default Login
