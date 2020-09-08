import React from "react";
import "./TodoItem.css";
const TodoItem = ({ text, onDelete }) => {
  return (
    <div className="item">
      <span>{text}</span>
      <button onClick={onDelete}>DELETE</button>
    </div>
  );
};

export default TodoItem;
