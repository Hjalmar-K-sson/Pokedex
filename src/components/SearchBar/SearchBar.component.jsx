import { Component } from "react";
import "./SearchBar.style.sass";

class SearchBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <input
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default SearchBar;
