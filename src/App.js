import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=153")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemon: name.results }));
  }
  render() {
    console.log(this.state);
    return <div>SOME DIV</div>;
  }
}

export default App;
