"use client";   
import React, { useState } from 'react';
import Item from './Item'; // Assuming Item component is in Item.js
import items from './item.json'; // Assuming items are stored in items.json

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name"); // Initialize sortBy state variable with "name"
  const [itemList, setItemList] = useState(items);

  // Function to handle sorting based on sortBy state variable
  const handleSort = () => {
    // Sorting logic based on sortBy state variable
    if (sortBy === "name") {
      setItemList([...itemList].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === "category") {
      setItemList([...itemList].sort((a, b) => a.category.localeCompare(b.category)));
    }
  };

  // Call handleSort whenever sortBy state changes
  React.useEffect(() => {
    handleSort();
  }, [sortBy]);

  return (
    <div>
      <h2>Item List</h2>
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "lightblue" : "white" }}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {itemList.map(item => (
          <Item
            key={item.id} // Assuming each item has an id property
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
