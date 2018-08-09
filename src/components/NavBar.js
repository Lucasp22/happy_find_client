import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  _signOut(e) {
    localStorage.removeItem("jwtToken");
  }

  render() {
    return(
      <header>
        <h1><i className="material-icons larger">sentiment_very_satisfied</i>Happy Find</h1>
        <nav>

            {
              window.localStorage.jwtToken ? (
                <div>
        
                  <Link to ="/"></Link>
                  <Link to ="/" onClick={this._signOut}>Sign out</Link>
                  <Link to={`/edit`} style = {{padding:15}}>Edit</Link>
                </div>
              ) : (
                <div>
                  <Link to={`/home`} style = {{padding: 15}}>Home</Link>
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
