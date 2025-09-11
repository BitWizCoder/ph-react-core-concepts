import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const handleReset = () => {
    const newCount = 0;
    setCount(newCount);
  };

  return (
    <div className="max-w-7xl mx-auto px-12 mt-16">
      <h1 className="text-3xl font-semibold mb-8"> {count} </h1>
      <div>
        <button
          className="bg-amber-600 py-3 px-4 rounded-sm text-white mr-6 cursor-pointer"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="bg-amber-600 py-3 px-4 rounded-sm text-white mr-6 cursor-pointer"
          onClick={handleDecrease}
        >
          Decrease
        </button>
        <button
          className="bg-amber-600 py-3 px-4 rounded-sm text-white mr-6 cursor-pointer"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
