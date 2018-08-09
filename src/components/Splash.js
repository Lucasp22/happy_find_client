import React, { Component } from 'react';


class Splash extends Component {
  render() {


    return(
      <main className="splash">
        <div className="hero"><img src="happy_find_logo.png" alt="" /></div>
        <div className="stuff">
          Find anyone<br />
          for anything<br />
          at any time<br />
          <a className="btn btn-splash" href="#/home">Find Now!</a>
        </div>
      </main>
    )
  }
}

export default Splash