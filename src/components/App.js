import React, { Component } from "react";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "../Pokemon";
import axios from "axios";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => {
        const pokemon = new Pokemon(response.data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
