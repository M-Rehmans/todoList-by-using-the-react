import React from "react";

function TodoList({ todos, onToggle, onDelete }) {
  // CHALLENGE:
  // todos ko map karo.
  // Har todo mein:
  // - text show karo
  // - completed status ke according style/class lagao
  // - Complete button do
  // - Delete button do

  return (
    <div>
      {/* Todo items yahan render karo */}
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                marginBottom: "5px",
              }}
            >
              {todo.value}{" "}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                }}
              >
                <button
                  onClick={() => {
                    onToggle(todo.id);
                  }}
                  style={{
                    backgroundColor: todo.isComplete ? "green" : "yellow",
                    border: 0,
                    borderRadius: "4px",
                  }}
                >
                  {todo.isComplete ? "Completed" : "unComplete"}
                </button>
                <button
                  onClick={() => {
                    onDelete(todo.id);
                  }}
                  style={{
                    backgroundColor: "red",
                    border: 0,
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
