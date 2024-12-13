
import React, { useState, useEffect } from 'react';
import ProductCard from './Productpage';

const Home = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

