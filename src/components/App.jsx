import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  function getInputValue(inputValue) {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          isComplete: false,
          value: inputValue,
        },
      ];
    });
  }

  function deletionItem(id) {
    setTodos((prev) => {
      return prev.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  function completion(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  }

  return (
    <div className="app">
      <h1>Todo App</h1>

      <TodoForm onAdd={getInputValue} />

      <TodoList todos={todos} onDelete={deletionItem} onToggle={completion} />
    </div>
  );
}

export default App;
