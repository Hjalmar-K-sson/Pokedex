import { Component } from "react";
import "./SearchBar.style.sass";

class SearchBar extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default SearchBar;
