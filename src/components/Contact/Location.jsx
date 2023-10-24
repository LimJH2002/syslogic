import React from "react";

const Location = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl p-3">
        Where Are We
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7071519554447!2d103.83833811097524!3d1.3522627615614964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da173c58da939b%3A0xfc12ce1f98e5597d!2s7%20Pemimpin%20Dr%2C%20Seasons%20View%20Block%207%2C%20Singapore%20576150!5e0!3m2!1sen!2ssg!4v1698145256517!5m2!1sen!2ssg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className="h-96 w-full"
      ></iframe>
    </div>
  );
};

export default Location;
