import React from "react";
import "./styles.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        <i className="fas fa-seedling" />
        <span id="city" />Your Weather
        <i className="fas fa-seedling" />
      </h1>
      <h2>What's it like out?</h2>
    </div>
  );
}
