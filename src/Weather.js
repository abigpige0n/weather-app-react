import React from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  
  const apiKey = "97a29dafab1111956594c069c61f40c";
  let city = "Toronto";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
                26
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
}
