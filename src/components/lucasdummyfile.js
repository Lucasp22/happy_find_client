/////////LUCAS////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'https://happy-find.herokuapp.com/skill_categories';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      skill_categories: []
    };
    this.getCategories = this.getCategories.bind(this);
  }


  getCategories(name){
    axios.get(SERVER_URL).then((results) => {
    console.log(results.data);
    const searchResult = results.data;
    let resultCategories = []
    for (var i = 0; i < searchCategories.length; i++) {
      console.log(searchResult[i].name, name);
      if ((searchResult[i].name === name)) {
      resultCategories.push(searchResult[i]);
      }
    }
    console.warn(resultCategories)
    this.setState({resultCategories: resultCategories})
    })
  }


  render() {
    return(
      <div>
         <SearchForm skill_categories={ this.state.skill_categories } onSubmit={ this._handleSubmit }/>
         <SearchResult />
      </div>
    );
  }
};


class SearchForm extends Component {
   constructor() {
      // do constructor stuff here
   }
  render() {
    return(
      <form onSubmit={ this._handleSubmit } >
         <input name="search" type="text" placeholder="Postcode or Suburb" required autoFocus />
         <select name="category" required>
            <option value="">Select A Category</option> {/* default category placeholder */}
            {props.skill_categories.map( (c) => {return (<option value="{ c }">{ c }</option>)} )}
         </select>
         <input  name="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {name: ''}
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleNameChange = this._handleNameChange.bind(this);
  }
    _handleSubmit(event){
      this.preventDefault();
      this.props.onSubmit(this.state.name);
      }

      _handleNameChange(event){
        this.setState({ name: event.target.value});
        console.log(this.state);
      }



  render() {
    return(
      <form style = {{textAlign: 'center'}} onSubmit={this._handleSubmit}>

        <input style = {{textAlign: 'center'}} type="text" placeholder="Categories" required autoFocus onInput={this._handleNameChange} /> <br/><br/>
        <input type="submit" value="Seach Flight" />
      </form>

    );
  }
}


class CategoriesDisplay extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.skill_categories.map(function(f) {
            return <li>Name: <link to={`/skill_categories`}>{f.name}</link></li>})}
        </ul>
      </div>
    )

  }
}


export default Home;
