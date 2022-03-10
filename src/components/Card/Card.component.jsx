import { Component } from "react";
import "./Card.style.sass";

class Card extends Component {
  render() {
    const { name, url } = this.props.pokemon;
    return (
      <div className="Card">
        <h2>{name}</h2>
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
        ></img>
        <a href={url}>{`Go to ${name}'s subpage`}</a>
      </div>
    );
  }
}

export default Card;
