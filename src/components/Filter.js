import React from "react";
import "./cssfiles/Filter.css";

const Filter = ({ categories, setFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="category-filter" className="filter-label">
        Category Filter:
      </label>
      <select
        id="category-filter"
        className="filter-select"
        onChange={(e) => setFilter(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
