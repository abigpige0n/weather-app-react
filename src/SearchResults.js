import React from "react";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherTemperature from "./WeatherTemperature"

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
                <WeatherTemperature celsius={props.data.temperature}/>
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
