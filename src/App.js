import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: ''
    }
    this.getJoke = this.getJoke.bind(this);
  }
  async getJoke() {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      this.setState({ joke: response.data.value })
      
    } catch(error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Chuck Norris</h1>
        <button onClick={this.getJoke}>Get Chuck Norris</button>
        <h2>{this.state.joke}</h2>
      </div>
    );
  }
  
}

export default App;
