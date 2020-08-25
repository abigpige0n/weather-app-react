import React from 'react';
import './App.css';
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

export default function App() {
  let weatherdata = {
    city: "Toronto",
    wind: "10",
    temperature: "26",
    date: "Tues. 25 Aug 2020",
    time: "00:30",
    description: "partly cloudy",
    humidity: "72"
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

