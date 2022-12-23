import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = ({onSearchChange}) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;