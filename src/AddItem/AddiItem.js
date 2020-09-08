import React from "react";
import "./AddItem.css";

const AddItem = ({ onAddItem }) => {
  return (
    <form onSubmit={onAddItem}>
      <input type="text" />
      <button className="btnAdd">Add todo</button>
    </form>
  );
};
export default AddItem;
