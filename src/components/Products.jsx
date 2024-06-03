import React from 'react';

const Products = ({ match }) => {
  return (
    <div>
      <h1>Product ID: {match.params.id}</h1>
    </div>
  );
};

export default Products;
