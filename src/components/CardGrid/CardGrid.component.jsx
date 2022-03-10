import { Component } from "react";
import "./CardGrid.style.sass";
import Card from "../Card/Card.component";

class CardGrid extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="CardGrid">
        {pokemon.map((poke, i) => (
          <Card key={i} pokemon={poke} />
        ))}
      </div>
    );
  }
}

export default CardGrid;
