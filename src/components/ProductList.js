// Task10 - ProductListing.jsx
import React from "react";

const products = [
  { id: 1, title: "Product 1", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 2, title: "Product 2", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, title: "Product 3", price: "$40", image: "https://via.placeholder.com/150" },
];

const ProductListing = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded p-4">
          <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
