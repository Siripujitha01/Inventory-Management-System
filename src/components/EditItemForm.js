import React, { useState } from "react";
import "./cssfiles/AddItemForm.css";

const EditItemForm = ({updateItem, setEditFormVisible, item }) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [quantity, setQuantity] = useState(item.quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category && quantity) {
      updateItem(item.id,{ name, category, quantity: Number(quantity) });
    }
    setEditFormVisible(false);
  };

  return (
    <div className="form-container">
      <div className="edit-parent">
        <div className="edit-child">
          <h2 className="form-title">Edit Item</h2>
        </div>
        <div className="edit-child">
          <button onClick={() => setEditFormVisible(false)}>x</button>
        </div>
      </div>
      <form className="item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={item.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="text"
          placeholder={item.category}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="number"
          placeholder={item.quantity}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="submit-btn">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditItemForm;