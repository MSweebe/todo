import React, { useState } from "react";
import "./App.css";
import Form from "./components/inputform";
import TodoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    console.log(todos)
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="display-6">TODO App</h1>
      <Form addTodo={addTodo} />
      <hr />
      <div className="listContainer">
        {todos.map((todo, idx) => (
          <TodoList
            key={idx}
            index={idx}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
