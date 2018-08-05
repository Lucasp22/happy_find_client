import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MapsAPI from '../utils/MapsUtil';
import MapResults from './MapResults'

const API_KEY = "AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM";
const maps = new MapsAPI(API_KEY);

class Home extends Component {
  constructor(props) {
    super(props);

    // set state
    this.state = {
      loc: { lat: 0, lng: 0 },
      suppliers: []
    }

    // bind methods
    this.searchAPI = this.searchAPI.bind(this);
  }

  searchAPI(searchData) {
    // searchData should be an object that holds 
    // { loc: { lat: n, lng: n }, category: '' }

    // set location from data first so user gets feedback early
    this.setState({ loc: searchData.loc })

    // TODO: Call Rails API to get actual results.
    const happyResults = [{
      name: "Supplier 1",
      loc: { lat: -33, lng: 151 }
    }]

    // update state with results TODO: this will be in a callback function for API
    this.setState( {
      suppliers: happyResults
    });
  }


  render() {
    return(
      <div>
        <SearchForm onSubmit={ this.searchAPI }/>
        <MapResults pos={ this.state.loc } markers={ this.state.suppliers.map( (s) => s.loc ) } />
        <SearchResult suppliers={ this.state.suppliers }/>
      </div>
    );
  }
};

class SearchForm extends Component {
  constructor() {
    super();
    // bind event handlers
    this._handleSubmit = this._handleSubmit.bind(this);

    // state
  }

  _handleSubmit(e) {
    e.preventDefault();

    // get details from form
    const searchTerm = this.suburb.value

    // get the lat lng from api
    maps.geocode(searchTerm, (results) => {
      const searchParams = {
        loc: maps.getLatLng(results),
        category: '' // get category from search later
      }
      this.props.onSubmit(searchParams);
    })

    // call Home's search method.
    
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit } >
        <h2>Search</h2>
        <input name="search" type="text" placeholder="Postcode or Suburb" required autoFocus ref={ node => { this.suburb = node } }/>
        <input  name="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

class SearchResult extends Component {
  render() {
    // set up suppliers array
    let suppliers = this.props.suppliers.map(
          (s) => (<div><h3>{s.name}</h3></div>)
        )

    // return the xHTML to render
    return(
      <div>
        { suppliers }
      </div>

    );
  }
}



export default Home;
