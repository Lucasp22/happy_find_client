import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';

const SERVER_URL = 'https://happy-find.herokuapp.com/';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
      redirect: false
    }

    this._handleChangeEmail = this._handleChangeEmail.bind(this)
    this._handleChangePassword = this._handleChangePassword.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
  _handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  _handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  _handleSubmit(event) {
    event.preventDefault();
    let postData = {
          auth: {
            email: this.state.email,
            password: this.state.password
        }
    }
    axios
      .post(SERVER_URL+'supplier_token', postData, { headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }})
      .then((response) => {
        let token = response.data.jwt;
        localStorage.setItem('jwtToken', token);
        axios.get(SERVER_URL+'suppliers/show', {
          headers: {
            "Authorization": localStorage.getItem("jwtToken")
          }
        }).then((response) => {
          if(response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data));
            this.setState({redirect: true})
          }
        })
      })
      .catch((err) => {
        if(err) {
          swal("Check your email or password!")
        };
    })
  }


  // define the obSubmit function
  // get the data from the setState
  // send that data to rails api


  render(){
    return(
      <div>
      <form className="formo" onSubmit={this._handleSubmit}>
       <h3 className="logino">Login in</h3>
       <input type="text" ref="email" placeholder="enter you email" value={this.state.email} onChange={this._handleChangeEmail}/>
       <input type="password" ref="password" placeholder="password" value={this.state.password} onChange={this._handleChangePassword} />
       <input type="submit" value="Login" />
       {this.state.redirect ? <Redirect to='/'/>:null}
     </form>
     </div>


   )

  }
}

export default Login
