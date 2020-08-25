import React from "react";
import "./styles.css";
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

export default function App() {
  let weatherdata = {
    city: "Toronto",
    wind: "5",
    temperature: "25",
    date: "Sun. 2 Aug 2020",
    time: "21:00",
    description: "clouds",
    humidity: "75"
  };
  return (
    <div className="container">
      <div className="weather-app">
        <Header weatherData={weatherdata} />
        <Search />
        <SearchResults weatherData={weatherdata} />
        <Footer />
      </div>
    </div>
  );
}
