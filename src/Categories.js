import React from "react";

const Categories = (props) => {
  return (
    <div className="btn-container">
      {props.allCategories.map((cat) => (
        <button
          key={Math.random()}
          className="filter-btn"
          onClick={() => props.filterItems(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
