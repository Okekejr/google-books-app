import React from "react";
import "./App.css";
import Header from "./UI/Header";
import Search from "./UI/Search";

function App() {
  return (
    <div>
      <div className="back">
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
