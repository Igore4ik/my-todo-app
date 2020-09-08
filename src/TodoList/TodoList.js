import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ data, onDelete }) => {
  const items = data.map((el) => {
    return (
      <li key={el.id}>
        <TodoItem
          onDelete={() => {
            onDelete(el.id);
          }}
          text={el.title}
        />
      </li>
    );
  });

  return data.length < 1 ? <h3>Enter some todo</h3> : <div>{items}</div>;
};

export default TodoList;
