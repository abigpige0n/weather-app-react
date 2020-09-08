import React from "react";

export default function WeatherForecastDetails(props) {
    return(
        <div className="col">
            <br />
            {new Date(props.data.dt * 1000).getHours()}:00
            <br />
            {props.data.weather[0].description}
            <br />
            {Math.round(props.data.main.temp)}°C
            <br />
            Humidity: {props.data.main.humidity}%
            <br />
            Wind: {props.data.wind.speed} km/h
        </div>
    );
}