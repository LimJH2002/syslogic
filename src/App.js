import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-gray-800 text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
