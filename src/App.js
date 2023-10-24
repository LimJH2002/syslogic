import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-gray-900 text-white">
      <AppRouter />
      <Navbar />
    </div>
  );
}

export default App;
