import React from 'react';

const Header = ({ products, total }) => {

  console.log("these are my products", products)

// {/* Refactor with just the strings being conditionally rendered */}
  if (products.length == 0) {
    return (
    <div>
      <h1> ACME STORE </h1>
      <button> Your Cart is empty </button>
    </div>
  )} else {return (
    <div>
      <h1> ACME STORE </h1>
      <button> Your Cart </button>
    </div>
  )}

}

export default Header
