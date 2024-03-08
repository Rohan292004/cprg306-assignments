"use client";
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
};

export default Item;


