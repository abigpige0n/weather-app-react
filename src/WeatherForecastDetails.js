import React from "react";

export default function WeatherForecastDetails(props) {
    return(
        <div className="col">
            {new Date(props.data.dt * 1000).getHours()}:00
            <br />
            {props.data.weather[0].description}
            <br />
            {Math.round(props.data.main.temp)}°C
            <br />
            {props.data.main.humidity}% Humidity
            <br />
            {props.data.wind.speed} km/h
        </div>
    );
}