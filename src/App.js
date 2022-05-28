import React from "react";
import "./App.css";
import BookCard from "./UI elements/BookCard";
import Header from "./UI elements/Header";
import Search from "./UI elements/Search";

export default function App() {
  return (
    <div>
      <div className="back">
        <Header />
        <Search />
        <BookCard />
      </div>
    </div>
  );
}
