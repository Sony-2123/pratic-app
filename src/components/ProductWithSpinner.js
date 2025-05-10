// Task12 - ProductWithSpinner.jsx
import React, { useEffect, useState } from "react";

const Spinner = () => (
  <div className="flex justify-center items-center h-32">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

const ProductWithSpinner = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { title: "Product A", price: "$100" },
        { title: "Product B", price: "$200" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow rounded p-4">
              <img src="https://via.placeholder.com/150" alt="" className="w-full h-32 object-cover rounded mb-2" />
              <h2 className="font-bold">{product.title}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductWithSpinner;
