import React from 'react';
import './App.css';
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Header />
        <Weather defaultCity="Toronto" />
        <Footer />
      </div>
    </div>
  );
}

