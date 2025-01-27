import React from "react";
import "./cssfiles/InventoryTable.css";
import { useState } from "react";
import EditItemForm from "./EditItemForm";

const InventoryTable = ({ items, updateItem, deleteItem, setSortOrder }) => {
  //const handleSort = (order) => setSortOrder(order);
    const [isEditFormVisible, setEditFormVisible] = useState(false); 

  return (
    <div>
      <button onClick={() => setSortOrder("desc")}>Sort Items</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {

          return(
            <tr key={item.id} className={item.quantity < 10 ? "low-stock" : ""}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                {!isEditFormVisible && (
                  <button
                    className="add-item-btn"
                    onClick={() => setEditFormVisible(true)}
                  >
                    Edit
                  </button>
                )}
                {isEditFormVisible && (
                  <EditItemForm
                    updateItem={updateItem}
                    setEditFormVisible={setEditFormVisible}
                    item = {item}
                  />
                )}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
