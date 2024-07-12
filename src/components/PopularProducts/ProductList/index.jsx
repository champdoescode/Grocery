// src/components/ProductList.jsx
import React from 'react';
import ProductCard from '../ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
