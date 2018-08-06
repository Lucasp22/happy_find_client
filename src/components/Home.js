import React, { Component } from 'react';
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
      loc: { lat: -25.275, lng: 133.775 },
      zoom: 4,
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
    this.setState({ loc: searchData.loc, zoom: 12 })

    // get search results TODO: update to send data when search API Ready
    axios.post(SERVER_URL + 'search_suppliers', {}).then((r) => {
      this.setState({ suppliers: r.data });
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
          markers={this.state.suppliers.map((s) => { 
            return { lat: s.latitude, lng: s.longitude }
          })}
          zoom={this.state.zoom} // supplier pins
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
    const opts = options.map((o,i) => <option key={ i } value={o}>{o}</option>)
    opts.unshift(<option key="-1">Select a Category</option>)
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
          (s) => (<div key={s.id}><h3>{s.name}</h3></div>)
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
