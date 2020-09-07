import React from "react";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function SearchResults(props) {
  return (
    <div className="SearchResults">
      <div className="row" id="today-weather">
          <div className="col-2" />
          <div className="col-3">
            <img
              src={props.data.iconUrl}
              id="icon"
              alt={props.data.description}
              width="150"
            />
          </div>
          <div className="col-2">
            <ul className="basic-stats">
              <li>
                <span className="temp" id="temp-now">
                  {Math.round(props.data.temperature)}
                </span>
                <a href="" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="" id="fahrenheit-link">
                  °F
                </a>
              </li>
              <li id="description">{props.data.description}</li>
              <li id="date"><FormattedDate date={props.data.date} /></li>
              <li id="time"><FormattedTime date={props.data.date} /></li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="advanced-stats">
              <li>
                Humidity: <span id="humidity" />
                {props.data.humidity} %
              </li>
              <li>
                Wind:<span id="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}
