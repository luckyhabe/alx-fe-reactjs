import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';
import '@testing-library/jest-dom';

test('renders initial todos', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('Learn React')).toBeInTheDocument();
  expect(getByText('Build a Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByLabelText, getByText } = render(<TodoList />);
  const input = getByLabelText('Add todo:');
  const addButton = getByText('Add');
  
  fireEvent.change(input, { target: { value: 'Do laundry' } });
  fireEvent.click(addButton);
  
  expect(getByText('Do laundry')).toBeInTheDocument();
});

test('toggles a todo', () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText('Buy groceries');
  
  fireEvent.click(todoItem);
  
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  const { getByText, queryByText } = render(<TodoList />);
  const todoItem = getByText('Walk the dog');
  const deleteButton = getByText('Delete');
  
  fireEvent.click(deleteButton);
  
  expect(todoItem).not.toBeInTheDocument();
});