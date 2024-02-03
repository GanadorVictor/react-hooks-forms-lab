import React, { useState } from "react";
import { v4 as uuid } from "uuid"; // Import uuid for generating unique IDs

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // Default category

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item up to the parent component
    onItemFormSubmit(newItem);

    // Clear the form fields after submission
    setItemName("");
    setItemCategory("Produce"); // Reset category to default
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={handleNameChange}
      />
      <select value={itemCategory} onChange={handleCategoryChange}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
