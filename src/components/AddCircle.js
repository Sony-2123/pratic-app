// Task8 - AddCircle.jsx
import React, { useState } from "react";

const AddCircle = () => {
  const [circles, setCircles] = useState([]);

  const addCircle = () => {
    setCircles([...circles, {}]);
  };

  return (
    <div className="p-4">
      <button
        onClick={addCircle}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Circle
      </button>
      <div className="flex gap-4 flex-wrap">
        {circles.map((_, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-full bg-green-400"
          />
        ))}
      </div>
    </div>
  );
};

export default AddCircle;
