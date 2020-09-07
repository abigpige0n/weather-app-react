import React, { useState } from "react";
import "./styles.css"
import axios from "axios";
import WeatherForecastDetails from "./WeatherForecastDetails";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast row">
                    <WeatherForecastDetails data={forecast.list[0]} />
                    <WeatherForecastDetails data={forecast.list[1]} />
                    <WeatherForecastDetails data={forecast.list[2]} />
                    <WeatherForecastDetails data={forecast.list[3]} />
                    <WeatherForecastDetails data={forecast.list[4]} />
                    <WeatherForecastDetails data={forecast.list[5]} />
            </div>
        )
    } else {
        let apiKey = "17542c4e1dbe7d5f6eac4d6130c79818";
        let url = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);
        return props.city;
    }
    
}