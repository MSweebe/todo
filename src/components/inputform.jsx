import React, { useState } from "react";

function Form({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <div className="todo-input form-group">
          <label for="todo-item">Enter new task:</label>
          <input
            type="text"
            name="todo-item"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
