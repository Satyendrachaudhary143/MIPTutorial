// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
      {/* Heading */}
      <h1 className="text-4xl sm:text-3xl xs:text-2xl font-bold text-black mb-4 text-center">
        About Our Tutorials
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-base xs:text-sm text-black text-center max-w-2xl mb-6">
        Welcome to our free programming tutorials website! Here, you can learn everything
        from HTML, CSS, JavaScript, React, Node.js to Python, C, and more—all for free!
        Our goal is to make programming fun, easy, and accessible for everyone.
      </p>

      {/* Cute card / feature */}
      <div className="bg-gray-100 rounded-2xl shadow-md p-6 max-w-xl w-full hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold text-black mb-3 text-center">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li>Free & comprehensive tutorials</li>
          <li>Step-by-step examples</li>
          <li>Responsive & modern UI</li>
          <li>Learn at your own pace</li>
          <li>Community support</li>
        </ul>
      </div>

      {/* Footer / Contact */}
      <div className="mt-8 text-center text-black">
        <p className="text-sm sm:text-xs">
          Contact us: <span className="font-medium">satyendrachaudhary38@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default About;
