import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import AddItemForm from "./components/AddItemForm";
import InventoryTable from "./components/InventoryTable";

const App = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isAddFormVisible, setAddFormVisible] = useState(false); 


  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);

    if (!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
    
    setAddFormVisible(false);
  };

  const updateItem = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category === filter);

  const sortedItems = [...filteredItems].sort((a, b) =>
    sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventory Management System</h1>
      </header>

      <main className="App-main">
        <div className="controls">
          <Filter categories={categories} setFilter={setFilter} />

          <InventoryTable
            items={sortedItems}
            updateItem={updateItem}
            deleteItem={deleteItem}
            setSortOrder={setSortOrder}
          />

          <center>
            {!isAddFormVisible && (
              <button
                className="add-item-btn"
                onClick={() => setAddFormVisible(true)}
              >
                Add Item
              </button>
            )}

            {isAddFormVisible && (
              <AddItemForm
                addItem={addItem}
                setAddFormVisible={setAddFormVisible}
              />
            )}
          </center>
        </div>
      </main>
    </div>
  );
};

export default App;
