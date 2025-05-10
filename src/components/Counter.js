import React, { Component } from 'react';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: '$1000',
          image: 'https://via.placeholder.com/100?text=Laptop'
        },
        {
          id: 2,
          name: 'Phone',
          price: '$500',
          image: 'https://via.placeholder.com/100?text=Phone'
        },
        {
          id: 3,
          name: 'Headphones',
          price: '$200',
          image: 'https://via.placeholder.com/100?text=Headphones'
        },
        {
          id: 4,
          name: 'Camera',
          price: '$750',
          image: 'https://via.placeholder.com/100?text=Camera'
        },
        {
          id: 5,
          name: 'Watch',
          price: '$150',
          image: 'https://via.placeholder.com/100?text=Watch'
        },
        {
          id: 6,
          name: 'Tablet',
          price: '$400',
          image: 'https://via.placeholder.com/100?text=Tablet'
        },
        {
          id: 7,
          name: 'Monitor',
          price: '$300',
          image: 'https://via.placeholder.com/100?text=Monitor'
        },
        {
          id: 8,
          name: 'Keyboard',
          price: '$50',
          image: 'https://via.placeholder.com/100?text=Keyboard'
        },
        {
          id: 9,
          name: 'Mouse',
          price: '$25',
          image: 'https://via.placeholder.com/100?text=Mouse'
        },
        {
          id: 10,
          name: 'Speaker',
          price: '$100',
          image: 'https://via.placeholder.com/100?text=Speaker'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {this.state.products.map((product) => (
            <li key={product.id} style={{ marginBottom: '20px' }}>
              <img src={product.image} alt={product.name} width="100" />
              <p>{product.name} - {product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
