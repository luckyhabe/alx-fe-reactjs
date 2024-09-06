import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: true },
        { id: 3, text: 'Daily 3 Practice', completed: false }
      ]
    };
  }

  addTodo = (text) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      text,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    // Render logic here
  }
}

export default TodoList;