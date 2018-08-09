import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



console.log(JSON.parse(localStorage.getItem('user')))

class Edit extends Component {
  render() {
    return(

      <div>
      <h5>Info from Supplyer</h5>
      <form>
      <label>Name</label>
      <input  name="name" type="text" placeholder="Full Name" required autoFocus />
      <br/>
      <label>Phone</label>
      <input name="phone" type="text" placeholder="Phone" required autoFocus />
      <br/>
      <label>Skills</label>
      <input name="skills" type="text" placeholder="Skills" required autoFocus />
      <br/>
      <label>Address</label>
      <input name="address" type="text" placeholder="Address" required autoFocus />
      <br/>
      <input  name="submit" type="submit" value="Edit" />
      </form>
      </div>

    )
  }
}






export default Edit;
