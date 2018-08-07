import React, { Component } from 'react';


class SignUp extends Component {
  render(){
    return(
      <form>
       <h3>SignUp </h3>
       <input type="text" ref="name" placeholder=" name" />
       <input type="text" ref="address" placeholder=" address" />
       <input type="password" ref="password" placeholder=" password" />
       <input type="password" ref="password" placeholder=" password confirmation" />
       <input type="submit" value="SignUp" />
     </form>
    )
  }
}

export default SignUp
