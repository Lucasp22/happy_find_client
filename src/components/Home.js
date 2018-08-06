import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MapsAPI from '../utils/MapsUtil';
import MapResults from './MapResults'

const API_KEY = "AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM";
const maps = new MapsAPI(API_KEY);

const SERVER_URL = 'https://happy-find.herokuapp.com/';

class Home extends Component {
  constructor(props) {
    super(props);

    // set state
    this.state = {
      loc: { lat: 0, lng: 0 },
      suppliers: [],
      categories: []
    }

    // bind methods
    this.searchAPI = this.searchAPI.bind(this);


    // get categories
    axios.get(SERVER_URL + 'skill_categories').then((r) => {
      this.setState( {categories: r.data.map( c => c.name ) } );
    });
  }

  searchAPI(searchData) {
    // searchData should be an object that holds 
    // { loc: { lat: n, lng: n }, category: '' }

    // set location from data first so user gets feedback early
    this.setState({ loc: searchData.loc })

    // update and uncomment when API ready
    // // get search results
    // axios.get(SERVER_URL + 'search').then((r) => {
    //   this.setState({ suppliers: r.data });
    // });

    // TODO: Delete me when API ready
    const happyResults = [{
      name: "Supplier 1",
      loc: { lat: -33, lng: 151 }
    }]

    // TODO: Delete me when API ready
    this.setState( {
      suppliers: happyResults
    });

  }


  render() {
    return(
      <main>
        <SearchForm 
          onSubmit={ this.searchAPI } 
          categories = { this.state.categories }
        />
        <MapResults 
          pos={ this.state.loc }  // centre of map
          markers={ this.state.suppliers.map( (s) => s.loc ) } // supplier pins
        />
        <SearchResult suppliers={ this.state.suppliers }/>
      </main>
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
    // get the lat lng from api then submit to home component
      maps.geocode(this.suburb.value, (results) => {
      // create params object
      const searchParams = {
        loc: maps.getLatLng(results),
        category: this.category.value
      }
      // call onSubmit function
      this.props.onSubmit(searchParams);
    })
  }

  generateOptions(options) {
    const opts = options.map((o) => <option value={o}>{o}</option>)
    opts.unshift(<option>Select a Category</option>)
    return opts;
  }

  render() {
    return(
      <form onSubmit={ this._handleSubmit } >
        <h2>Search</h2>
        <input name="search" type="text" placeholder="Postcode or Suburb" required autoFocus ref={ node => { this.suburb = node } }/>
        <select name="category" ref={ node => { this.category = node }}>
          { this.generateOptions(this.props.categories) }
        </select>
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
