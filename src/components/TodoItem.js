import React from 'react';
import '../styles/TodoItem.css';

function TodoItem({ todo, markComplete }) {
  return (
    <div
      className={`TodoItem ${todo.completed ? 'completed' : ''}`}
      onClick={() => markComplete(todo.id)}
    >
      {todo.text}
    </div>
  );
}

export default TodoItem;
