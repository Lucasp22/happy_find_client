import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavBar extends Component {
  render() {
    return(
      <header>
        <h1><i class="material-icons larger">sentiment_very_satisfied</i>Happy Find</h1>
        <nav>
          <Link to={`/home`} style = {{padding: 15}}>Home</Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
