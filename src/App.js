import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TodoList from './components/TodoList';
import ResetButton from './components/ResetButton';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Initialize todos from local storage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to local storage whenever it changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add a new todo..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTodo(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <TodoList todos={todos} markComplete={markComplete} />
      <ResetButton resetTodos={resetTodos} />
    </div>
  );
}

export default App;
