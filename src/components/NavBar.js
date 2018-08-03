import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavBar extends Component {
  render() {
    return(
      <div style={{textAlign: "right"}}>
        <Link to={`/home`} style = {{padding: 15}}>Home</Link>
      </div>
    );
  }
}

export default NavBar;
