import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./views/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [current, setCurrent] = useState("Landing");
  return (
    <div className="App bg-gray-900 text-white">
      <Navbar current={current} setCurrent={setCurrent} />
      <Hero />
      {current !== "Landing" ? <Footer /> : null}
    </div>
  );
}

export default App;
