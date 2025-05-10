import React from 'react';
import Skeleton from './Skeleton';

const ProductCard = ({ loading, product }) => {
  if (loading) {
    return (
      <div className="product-card">
        <Skeleton width="100%" height="150px" />
        <Skeleton width="80%" height="20px" />
        <Skeleton width="60%" height="20px" />
      </div>
    );
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width="100%" height="150" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
