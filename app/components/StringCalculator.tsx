/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { add } from "../utils/stringCalculator";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult("");
    }
  };

  return (
    <div className="max-w-md sm:w-full w-11/12 mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-black">String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers (use comma for separations)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border focus:outline-none p-2 w-full mb-4 rounded"
      />
      <button
        onClick={handleCalculate}
        className="bg-orange-500 uppercase text-sm font-medium text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Calculate
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result !== "" && (
        <p className="text-green-700 font-medium bg-green-300 text-center p-2 rounded-md mt-4 ">
          Result: <span className="font-bold">{result}</span>
        </p>
      )}
    </div>
  );
};

export default StringCalculator;
