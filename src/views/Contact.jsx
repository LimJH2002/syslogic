import React from "react";
import Location from "../components/Contact/Location";
import OperatingHours from "../components/Contact/OperatingHours";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="bg-white mt-8">
      <div className="flex">
        <div className="flex-1 p-4">
          <ContactForm />
        </div>
        <div className="flex-1 p-4 mt-4">
          <OperatingHours />
          <Location />
        </div>
      </div>
      <Footer />
    </div>
  );
}
