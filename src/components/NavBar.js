// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// class NavBar extends Component {
//   _signOut(e) {
//     localStorage.removeItem("jwtToken");
//   }
//
//   render() {
//     return(
//       <header>
//         <h1><i className="material-icons larger">sentiment_very_satisfied</i>Happy Find</h1>
//         <nav>
//
//             {
//               window.localStorage.jwtToken ? (
//                 <div>
//                   <Link to = {"/"} style = {{padding: 15}}>Edit Profile</Link>
//                   <Link to ="/"></Link>
//                   <Link to ="/" onClick={this._signOut}>Sign out</Link>
//                 </div>
//               ) : (
//                 <div>
//                   <Link to={`/home`} style = {{padding: 15}}>Home</Link>
//                   <Link to={`/signup`} style = {{padding:15}}>Sign Up</Link>
//                   <Link to={`/login`} style = {{padding:15}}>Log in</Link>
//                 </div>
//               )
//             }
//         </nav>
//       </header>
//     );
//   }
// }
//
// export default NavBar;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  _signOut(e) {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
  }

  render() {
    return(
      <header>
        <div className="navWraper" id="home">
         <div className="clearfix">
             <h2 className="companyName">Happy Find</h2>
          </div>
        </div>

        <nav className="mainNav">
          {
            window.localStorage.jwtToken ? (
            <ul>
              <li>
                <Link to = {"/edit"}>Edit Profile</Link>
              </li>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
                <Link to ="/" onClick={this._signOut}>Sign out</Link>
              </li>
            </ul>
              ) : (
            <ul>
              <li>
                <Link to={`/home`}>Home</Link>
              </li>
              <li>
                <Link to={`/signup`}>Sign Up</Link>
              </li>
              <li>
                <Link to={`/login`}>Log in</Link>
              </li>
            </ul>
           )
         }
       </nav>

      </header>
    );
  }
}

export default NavBar;
