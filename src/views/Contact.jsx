import React from "react";
import Location from "../components/Contact/Location";
import OperatingHours from "../components/Contact/OperatingHours";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-white mt-8">
      <OperatingHours />
      <Location />
      <Footer />
    </div>
  );
}
