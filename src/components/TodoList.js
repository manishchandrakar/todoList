import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList({ todos, markComplete }) {
  const renderTodos = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      if (a.completed && !b.completed) return 1; // Completed todos go to the bottom
      if (!a.completed && b.completed) return -1; // Active todos go to the top
      return b.id - a.id; // Sort by creation time, most recent on top
    });

    return sortedTodos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={markComplete} />
    ));
  };

  return <div className="TodoList">{renderTodos()}</div>;
}

export default TodoList;
