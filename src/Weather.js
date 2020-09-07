import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Loading from "./Loading";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "http://openweathermap.org/img/wn/02n@2x.png",
        date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
              src={weatherData.iconUrl}
              id="icon"
              alt={weatherData.description}
              width="150"
            />
          </div>
          <div className="col-2">
            <ul className="basic-stats">
              <li>
                <span className="temp" id="temp-now">
                  {Math.round(weatherData.temperature)}
                </span>
                <a href="" id="celsius-link" className="active">
                  °C
                </a>
                |
                <a href="" id="fahrenheit-link">
                  °F
                </a>
              </li>
              <li id="description">{weatherData.description}</li>
              <li id="date"><FormattedDate date={weatherData.date} /></li>
              <li id="time"><FormattedTime date={weatherData.date} /></li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="advanced-stats">
              <li>
                Humidity: <span id="humidity" />
                {weatherData.humidity} %
              </li>
              <li>
                Wind:<span id="wind">{weatherData.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Loading />
    )
  }
  

  
}
