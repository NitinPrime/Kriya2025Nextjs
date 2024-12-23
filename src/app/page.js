"use client";

import React from "react";
import CountdownTimer from "../components/CountdownTimer";

function App() {
  return (
    <div className="font-gruppo text-white min-h-screen flex flex-col items-center p-10 space-y-12 relative mt-[20px]">
      {/* Video Background with slight zoom */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          transition: "transform 0.1s ease-out", // Smooth transition for the zoom effect
        }}
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-10"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
        }}
      ></div>

      {/* Kriya 2025 Logo */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <img
          src="/kriya-2025-black.png"
          alt="Kriya 2025"
          className="w-96 md:w-[500px] opacity-70 filter invert-0 hue-rotate-270 saturate-150"
        />
      </div>

      {/* Kriya Title Section */}
      <div className="w-full text-center relative z-20 mt-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Kriya 2025
        </h1>
        <p className="text-2xl font-semibold text-gray-300 mt-4">
          The Ultimate Tech Symposium
        </p>
      </div>

      {/* Dates Revealing In Section */}
      <div className="flex flex-col items-center mt-10 relative z-20">
        <h2 className="text-5xl font-semibold text-pink-400 mb-4">Dates Revealing In</h2>
        <CountdownTimer />
      </div>

      {/* Mark Your Calendar Section */}
      <div className="text-center space-y-4 mt-8 relative z-20">
        <h2 className="text-3xl font-semibold text-gray-300">
          Mark your <span className="text-pink-500">calendar</span>
        </h2>
        <p className="text-gray-350 text-lg max-w-lg mx-auto">
          Join us at the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Kriya 2025!
        </p>

        <button
          className="bg-pink-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-2 hover:border-green-500 animate-pulseColor"
          onClick={() => {
            window.open(
              "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Kriya+2025+-+The+Ultimate+Tech+Symposium&details=Join+us+for+a+day+of+innovation+and+networking+at+Kriya+2025!&location=PSG+College+of+Technology,+Coimbatore&dates=20250204T090000Z/20250204T180000Z",
              "_blank"
            );
          }}
        >
          Add to Calendar
        </button>
      </div>
    </div>
  );
}

export default App;
