import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-bar">
        <div className="row">
          <div className="col-9">
            <input
              className="searchbar"
              type="search"
              placeholder="Search Weather..."
              id="city"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <span className="submitbutton">
              <input className="submit" type="submit" value="Search" />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
