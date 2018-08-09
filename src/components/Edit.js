import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const SERVER_URL = 'https://happy-find.herokuapp.com/supplier/update';



// let userData = JSON.parse(localStorage.getItem('user'));

class Edit extends Component {
  constructor(){
    super();
    this.state = {  name: JSON.parse(localStorage.getItem('user')).name,
                    phone: JSON.parse(localStorage.getItem('user')).phone,
                    address: JSON.parse(localStorage.getItem('user')).address,}

    this._handleChangeName = this._handleChangeName.bind(this);
    this._handleChangeAddress = this._handleChangeAddress.bind(this);
    this._handleChangePhone = this._handleChangePhone.bind(this);
    ////////SubmitForm
    this._handleSubmitEdit = this._handleSubmitEdit.bind(this);
  }///end of constructor
  _handleChangeName(e) {
    this.setState( {name: e.target.value} );
  }
  _handleChangeAddress(e) {
    this.setState( {address: e.target.value} );
  }
  _handleChangePhone(e) {
    this.setState( {phone: e.target.value} );
  }
  ///SubmitForm
  _handleSubmitEdit(e){
    e.preventDefault();
    let postData = {
      supplier : {
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address
      },
      services:[]
    };
    console.log(JSON.stringify(postData))
    axios.post(SERVER_URL, postData, { headers: {
      "Authorization": localStorage.getItem("jwtToken")
    }}).then((response)=> {
      localStorage.setItem('user', JSON.stringify(response.data));
      this.setState( {name: response.data.name})
      swal({icon: "success",});
      this.props.history.push("/home");


    })

  }
  render() {
    return(
        <main>
          <div>
            <form onSubmit={ this._handleSubmitEdit }>
              <label>Name</label>
              <input onChange={ this._handleChangeName } value={this.state.name} name="name" type="text" placeholder="Full Name" required autoFocus />
              <br/>
              <label>Phone</label>
              <input onChange={ this._handleChangePhone } value={this.state.phone} name="phone" type="text" placeholder="Phone" required autoFocus />
              <br/>
              <label>Address</label>
              <input  onChange={ this._handleChangeAddress } value={this.state.address} name="address" type="text" placeholder="Address" required autoFocus />
              <br/>
              <input  name="submit" type="submit" value="Edit" />
              </form>
              </div>
          </main>
    )
  }//end of render
}//end of edit



export default Edit;
