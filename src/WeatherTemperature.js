import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")
    function convertFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === `celsius`) {
        return(
            <div>
                <span className="temp" id="temp-now">
                {Math.round(props.celsius)}
                </span>
                <a href="" id="celsius-link" className="active">
                °C
                </a>
                |
                <a href="" id="fahrenheit-link" onClick={convertFahrenheit}>
                °F
                </a>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32
        return (
            <div>
            <span className="temp" id="temp-now">
            {Math.round(fahrenheit)}
            </span>
            <a href="" id="celsius-link" onClick={convertCelsius}>
            °C
            </a>
            |
            <a href="" id="fahrenheit-link" className="active">
            °F
            </a>
        </div>
        )
    }
}