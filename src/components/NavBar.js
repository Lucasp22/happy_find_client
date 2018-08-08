import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  _signOut() {
    localStorage.removeItem("jwtToken");
  }

  render() {
    return(
      <header>
        <h1><i className="material-icons larger">sentiment_very_satisfied</i>Happy Find</h1>
        <nav>
            <Link to={`/home`} style = {{padding: 15}}>Home</Link>
            {
              window.localStorage.jwtToken ? (
                <div>
                  <Link to = "/" >Edit Profile</Link>
                  <Link to ="/"></Link>
                  <Link to ="/">
                    <button onClick={this._signOut}>Sign out</button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={`/signup`} style = {{padding:15}}>Sign Up</Link>
                  <Link to={`/login`} style = {{padding:15}}>Log in</Link>
                </div>
              )
            }
        </nav>
      </header>
    );
  }
}

export default NavBar;
