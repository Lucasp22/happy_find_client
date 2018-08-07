import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return(
      <header>
        <h1><i className="material-icons larger">sentiment_very_satisfied</i>Happy Find</h1>
        <nav>
          <Link to={`/home`} style = {{padding: 15}}>Home</Link>
          <Link to={`/signup`} style = {{padding:15}}>Sign Up</Link>
          <Link to={`/login`} style = {{padding:15}}>Log in</Link>

        </nav>
      </header>
    );
  }
}

export default NavBar;
