import React from "react";
import Location from "../components/Contact/Location";
import OperatingHours from "../components/Contact/OperatingHours";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="bg-white mt-8">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1 p-4">
          <ContactForm />
        </div>
        <div className="flex-1 p-4 mt-4 sm:mt-0">
          <OperatingHours />
          <Location />
        </div>
      </div>
      <Footer />
    </div>
  );
}
