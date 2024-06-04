import React from 'react';

const Category = ({ match }) => {
  return (
    <div>
      <h1>Category ID: {match.params.id}</h1>
    </div>
  );
};

export default Category;
