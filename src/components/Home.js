import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MapsAPI from '../utils/MapsUtil';
import MapResults from './MapResults'

const API_KEY = "AIzaSyDiQ5gOiu9480aI_pxyj7EJhJl-F3LVspM";
const maps = new MapsAPI(API_KEY);

const SERVER_URL = 'https://happy-find.herokuapp.com/skill_categories.js';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loc: { lat: 0, lng: 0 }
    }


    maps.geocode('sydney', (results) => {
      this.setState({
        loc: maps.getLatLng(results)
      })
    });

  }


  render() {
    return(
      <div>
      <SearchForm />
      <MapResults pos={this.state.loc} />

      <SearchResult />
      </div>
    );
  }
};


class SearchForm extends Component {
  render() {
    return(
      <form>
        <h2>Search</h2>
      <input name="search" type="text" placeholder="Postcode or Suburb" required autoFocus />
        <input  name="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

class SearchResult extends Component {
  render() {
    return(
      <div>
      <h2>SearchResult coming</h2>

      </div>

    );
  }
}



export default Home;
