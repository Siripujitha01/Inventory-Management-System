import React, { useState } from "react";
import "./cssfiles/AddItemForm.css";

const AddItemForm = ({ addItem, setAddFormVisible }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category && quantity) {
      addItem({ name, category, quantity: Number(quantity) });
      setName("");
      setCategory("");
      setQuantity("");
    }
    setAddFormVisible(false);
  };

  return (
    <div className="form-container">
      <div className="edit-parent">
        <div className="edit-child">
          <h2 className="form-title">Add New Item</h2>
        </div>
        <div className="edit-child">
          <button onClick={() => setAddFormVisible(false)}>x</button>
        </div>
      </div>
      <form className="item-form " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
