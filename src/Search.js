import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./styles.css";

export default function Search() {
  
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
    })
  }
  const apiKey = "97a29dafab1111956594c069c61f40c";
  let city = "Toronto";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
      <SearchResults weatherData={weatherData} />
    </div>
  );
}
