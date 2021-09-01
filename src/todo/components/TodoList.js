import React from 'react';
import Card from './Card';

const TodoList = ({ todoList, toggleDone, deleteTodo }) => (
  <section className="todo-list">
    {todoList.map(todo => (
      <Card todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} key={todo.id} />
    ))}
  </section>
);

export default TodoList;
