import { Component } from "react";
import "./App.sass";
import CardGrid from "./components/CardGrid/CardGrid.component";
import SearchBar from "./components/SearchBar/SearchBar.component";

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
      .then((pokemon) => this.setState({ pokemon: pokemon.results }));
  }
  onSearchChange = (event) => {
    const search = event.target.value.toLowerCase();
    this.setState(() => {
      return { search };
    });
  };
  render() {
    const { pokemon, search } = this.state;
    const { onSearchChange } = this;
    console.log(this.state.pokemon[0]);
    return (
      <div className="App">
        <h1>POKEDEX</h1>
        <SearchBar onSearchChange={onSearchChange} />
        <CardGrid pokemon={pokemon} />
      </div>
    );
  }
}

export default App;
