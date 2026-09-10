import React, { useState } from "react";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleTodoInput(event) {
    var { name, value } = event.target;
    setText(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleTodoInput}
        type="text"
        placeholder="Enter todo..."
        value={text}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
