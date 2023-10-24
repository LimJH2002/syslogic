import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./AppRouter";

function App() {
  const [current, setCurrent] = useState("Landing");

  return (
    <div className="App bg-gray-900 text-white">
      <AppRouter />
      <Navbar current={current} setCurrent={setCurrent} />
      {/* {current === "Landing" ? <Hero /> : <AboutUS />}
      {current !== "Landing" ? <Footer /> : null} */}
    </div>
  );
}

export default App;
