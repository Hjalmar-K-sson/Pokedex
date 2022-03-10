import { Component } from "react";
import "./Card.style.sass";

class Card extends Component {
  render() {
    const { name, url } = this.props.pokemon;
    return (
      <div>
        <h2>{name}</h2>
        <a href={url}>{`Go to ${name}'s subpage`}</a>
      </div>
    );
  }
}

export default Card;
