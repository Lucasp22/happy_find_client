import React, { Component } from 'react';
import axios from 'axios';
const SERVER_URL = 'https://happy-find.herokuapp.com/login.json';

class Login extends Component {
  constructor(){
    super();

     this.state = {
     email: '',
     password: ''
   };
   suppliers: [],


     this._handleChangeEmail = this._handleChangeEmail.bind(this)
     this._handleChangePassword = this._handleChangePassword.bind(this)
     this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleChangeEmail(event) {
      this.setState({email: event.target.value})
      console.log(event.target.value);
    }

  _handleChangePassword(event) {
    this.setState({password: event.target.value})
    console.log(event.target.value);
  }

  _handleSubmit(event) {
      event.preventDefault();
      axios.post(SERVER_URL, this.state).then( (results) => {
        // let result=[]
        this.setState({supplier: results.data})
    });
  }



  // define the obSubmit function
  // get the data from the setState
  // send that data to rails api


  render(){
    return(
      <div>
       <form className="formo" onSubmit={this._handleSubmit}>
       <h3>Login in</h3>
       <input type="text" ref="email" placeholder="enter you email" value={this.state.email} onChange={this._handleChangeEmail}/>
       <input type="password" ref="password" placeholder="password" value={this.state.password} onChange={this._handleChangePassword} />
       <input type="submit" value="Login" />
     </form>
     </div>


   )

  }
}

export default Login
