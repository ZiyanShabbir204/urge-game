import React from "react";
import { Roulette, useRoulette } from "react-hook-roulette";

const resultOption = {
  1: "Oops You Missed",
  2: "5% off on your additional Purchase",
  3: "Get a 2ml tester on your purchase",
  4: "20% off on your second purchase",
  5: "Free 5ml tester",
  6: "Free 2ml tester",
  7: "Free three 0.5ml testers",
  8: "20% off on perfume wax on purchase of perfume bottle",
  9: "50% off on perfume wax on purchase of perfume bottle",
  10: "Free perfume wax on purchase of two perfume bottles",
};

const items = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "6" },
  { name: "7" },
  { name: "8" },
  { name: "9" },
  { name: "10" },
];

const SpinningWheel = () => {
  const { roulette, onStart, onStop, result } = useRoulette({ items });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <Roulette roulette={roulette} />

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onStart}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded shadow hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          type="button"
          onClick={onStop}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 transition"
        >
          Stop
        </button>
      </div>

      <p className="text-xl font-bold text-gray-800">
       
        <span className="text-blue-600">
          {resultOption[result] || "Spin the wheel to see your result!"}
        </span>
      </p>
    </div>
  );
};

export default SpinningWheel;
