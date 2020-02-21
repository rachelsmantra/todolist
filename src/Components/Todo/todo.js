import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="container-fluid">
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button
            style={{
              backgroundColor: todo.isCompleted ? "#ABA5A3" : "#dc3545"
            }}
            className="complete-btn btn btn-danger"
            onClick={() => completeTodo(index)}
          >
            Complete
          </button>
          <button className="btn btn-danger" onClick={() => removeTodo(index)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
