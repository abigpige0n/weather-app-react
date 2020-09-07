import React from 'react';
import './App.css';
import Header from "./Header";
import Weather from "./Weather";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Header defaultCity="Toronto" />
        <Weather defaultCity="Toronto" />
        <Footer />
      </div>
    </div>
  );
}

