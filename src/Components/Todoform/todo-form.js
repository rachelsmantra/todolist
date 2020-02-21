import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      <button
        className="add-btn btn btn-success"
        onChange={e => setValue(e.target.value)}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
