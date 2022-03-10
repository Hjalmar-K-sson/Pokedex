import { Component } from "react";
import "./App.sass";
import CardGrid from "./components/CardGrid/CardGrid.component";
import SearchBar from "./components/SearchBar/SearchBar.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=153")
      .then((response) => response.json())
      .then((pokemon) =>
        this.setState(() => {
          return { pokemon: pokemon.results };
        })
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };
  render() {
    const { pokemon, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredPokemon = pokemon.filter((poke) => {
      return poke.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1>POKEDEX</h1>
        <SearchBar
          onChange={onSearchChange}
          placeholder="Search Pokemon"
          className="pokemon__search-box"
        />
        <CardGrid pokemon={filteredPokemon} />
      </div>
    );
  }
}

export default App;
