import React, { Component } from 'react';
import React, { useState } from 'react';

const TodoList = () => {
  // Initialize state with a few todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Practice the Daily 3', completed: false }
  ]);

  const [newTodo, setNewtodo] = useState('');

  // Function to add new tasks
  const addTodo = (text) => {
    if(newTodo.trim()){
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
      setNewtodo('');
    }
    
  };

  // Method to toggle the completion status of a todo
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Method to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoText.value.trim();
    if (text) {
      addTodo(text);
      e.target.reset();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" placeholder="Add a new todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
