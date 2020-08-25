import React from "react";
import "./styles.css";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <div className="row" id="today-weather">
        <div className="col-2" />
        <div className="col-3">
          <img
            src={"http://openweathermap.org/img/wn/03d@2x.png"}
            id="icon"
            alt="clouds"
            width="150"
          />
        </div>
        <div className="col-2">
          <ul className="basic-stats">
            <li>
              <span className="temp" id="temp-now">
                {props.weatherData.temperature}
              </span>
              <a href="" id="celsius-link" className="active">
                °C
              </a>
              |
              <a href="" id="fahrenheit-link">
                °F
              </a>
            </li>
            <li id="description">{props.weatherData.description}</li>
            <li id="date">{props.weatherData.date}</li>
            <li id="time">{props.weatherData.time}</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="advanced-stats">
            <li>
              Humidity: <span id="humidity" />
              {props.weatherData.humidity} %
            </li>
            <li>
              Wind:<span id="wind">{props.weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
