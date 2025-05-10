// Task9 - ImageCarousel.jsx
import React, { useState } from "react";

const ImageCarousel = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/200",
  ]);

  const addImage = () => {
    const newImage = `https://via.placeholder.com/${Math.floor(
      Math.random() * 200 + 100
    )}`;
    setImages([...images, newImage]);
  };

  return (
    <div className="p-4">
      <button
        onClick={addImage}
        className="bg-purple-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Image
      </button>
      <div className="flex overflow-x-auto gap-4">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`img-${index}`} className="w-48 h-32 object-cover rounded" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
