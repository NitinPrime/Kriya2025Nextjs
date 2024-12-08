"use client";
import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-04T09:00:00"); // Set your event date
    const now = new Date();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
<div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 mt-14 w-full relative z-20">
  <div className="flex flex-row items-center space-x-10">
    <div className="flex flex-col items-center space-y-4">
      <span className="text-4xl sm:text-6xl font-bold">{timeLeft.days}</span>
      <span className="text-xl sm:text-3xl font-medium">Days</span>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <span className="text-4xl sm:text-6xl font-bold">{timeLeft.hours}</span>
      <span className="text-xl sm:text-3xl font-medium">Hours</span>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <span className="text-4xl sm:text-6xl font-bold">{timeLeft.minutes}</span>
      <span className="text-xl sm:text-3xl font-medium">Minutes</span>
    </div>
    <div className="flex flex-col items-center space-y-4">
      <span className="text-4xl sm:text-6xl font-bold">{timeLeft.seconds}</span>
      <span className="text-xl sm:text-3xl font-medium">Seconds</span>
    </div>
  </div>
</div>

  );
}

export default CountdownTimer;
