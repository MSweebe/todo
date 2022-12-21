import React from "react";

function TodoList({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="list row">
      <div
        className="todo col"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "",
          color: todo.isCompleted ? "darkgray" : "",
        }}
      >
        {todo.text}
      </div>
      <div className="col"></div>
      <div className="col">
        <button onClick={() => completeTodo(index)} className="btn btn-success">
          Complete Task
        </button>
        <button onClick={() => removeTodo(index)} className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
