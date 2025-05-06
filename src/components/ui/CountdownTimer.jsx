// src/components/ui/CountdownTimer.jsx (enhanced version)
"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({
  initialDays = 3,
  initialHours = 18,
  initialMinutes = 54,
  initialSeconds = 21,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;

        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }

        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prevTime.days - 1;
        if (newDays >= 0) {
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };
        }

        // If countdown is complete, just return zeros
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4">
      {/* Days */}
      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24">
        <span className="text-xl md:text-2xl font-bold text-[#1E2833]">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm text-gray-500">Days</span>
      </div>

      {/* Hours */}
      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24">
        <span className="text-xl md:text-2xl font-bold text-[#1E2833]">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm text-gray-500">Hour</span>
      </div>

      {/* Minutes */}
      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24">
        <span className="text-xl md:text-2xl font-bold text-[#1E2833]">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm text-gray-500">Min</span>
      </div>

      {/* Seconds */}
      <div className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24">
        <span className="text-xl md:text-2xl font-bold text-[#1E2833]">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm text-gray-500">Second</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
