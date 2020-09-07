import React from 'react';
import './App.css';
import Header from "./Header";
import Search from "./Search";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Header />
        <Search />
        <SearchResults />
        <Footer />
      </div>
    </div>
  );
}

