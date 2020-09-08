import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";
import AddItem from "./AddItem/AddiItem";
import "./styles.css";

export default class App extends Component {
  id = 10;
  onCreate = (text) => {
    return { id: this.id++, title: text, done: false };
  };

  state = {
    data: [
      this.onCreate("Some text"),
      this.onCreate("Some anoter text"),
      this.onCreate("Again text"),
      this.onCreate("And again text"),
      this.onCreate("New text")
    ]
  };

  onDelete = (id) => {
    const todoData = this.state.data;
    const index = todoData.findIndex((el) => id === el.id);
    this.setState((data) => {
      return {
        data: [...todoData.slice(0, index), ...todoData.slice(index + 1)]
      };
    });
  };

  onAdd = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector("input").value;
    if (inputValue.trim() !== "") {
      this.setState((data) => {
        return {
          data: [...this.state.data, this.onCreate(inputValue)]
        };
      });
    }
    document.querySelector("input").value = "";
  };

  render() {
    return (
      <div className="App">
        <h1>Todo List App</h1>

        <ul>
          <TodoList onDelete={this.onDelete} data={this.state.data} />
        </ul>

        <AddItem onAddItem={this.onAdd} />
      </div>
    );
  }
}
