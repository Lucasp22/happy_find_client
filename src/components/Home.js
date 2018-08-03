import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends Component {
  render() {
    return(
      <div>
      <SearchForm />
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
