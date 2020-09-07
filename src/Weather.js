import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
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
        <div className="row" id="today-weather">
          <div className="col-2" />
          <div className="col-3">
            <img
              src={"http://openweathermap.org/img/wn/02n@2x.png"}
              id="icon"
              alt="partly cloudy"
              width="150"
            />
          </div>
          <div className="col-2">
            <ul className="basic-stats">
              <li>
                <span className="temp" id="temp-now">
                  {temperature}
                </span>
                <a href="" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="" id="fahrenheit-link">
                  °F
                </a>
              </li>
              <li id="description">Partly Cloudy</li>
              <li id="date">Tues. 25 Aug 2020</li>
              <li id="time">00:30</li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="advanced-stats">
              <li>
                Humidity: <span id="humidity" />
                72 %
              </li>
              <li>
                Wind:<span id="wind">72</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "Toronto";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
  

  
}
