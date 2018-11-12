import React, { Component } from "react";
import PokeList from "./PokeList";
import "./styles/App.css";
import { render } from "react-dom";
import "/src/index.html";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PokeList />
      </div>
    );
  }
}

class HTMLTitle extends Component {
  render() {
    return (
      <div className="HTMLTitle">
        <h1> Choose, create and have fun! </h1>
      </div>
    );
  }
}

export default App;
