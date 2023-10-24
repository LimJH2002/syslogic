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
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
