import { Component } from "react";
import './search-box.styles.css'

export default class SearchBox extends Component {
    render() {
      const { onSearchChange } = this.props;
      return (
        <div className="search-box">
          <input
            type="search"
            placeholder="search monsters"
            onChange={onSearchChange}
          />
        </div>
      );
    }
}