import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Hero from "./views/Hero";
import Services from "./views/Services";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;