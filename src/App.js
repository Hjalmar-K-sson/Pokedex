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
      .then((pokemon) => {
        console.log(pokemon);
        this.setState(() => {
          return { pokemon: pokemon };
        });
      });
    console.log(this.state);
  }
  render() {
    return <div>TEST DIV</div>;
  }
}

export default App;
