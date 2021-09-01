import React, { useState, useEffect } from 'react';
import './todo.css';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import Form from './components/Form';
import getStateLocalStorage from './utils/getStateLocalStorage';
import saveStateLocalStorage from './utils/saveStateLocalStorage';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    setTodoList([
      {
        ...todo,
        id: uuidv4(),
      },
      ...todoList,
    ]);
  };

  const deleteTodo = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const newList = [...todoList];
    newList.splice(todoIndex, 1);
    setTodoList(newList);
  };

  const toggleDone = id => {
    const todoIndex = todoList.findIndex(todo => todo.id === id);
    const newList = [...todoList];
    newList[todoIndex].done = !newList[todoIndex].done;
    setTodoList(newList);
  };

  useEffect(() => {
    const savedState = getStateLocalStorage();
    if (savedState) {
      setTodoList(savedState);
    }
  }, []);

  useEffect(() => {
    saveStateLocalStorage(todoList);
  }, [todoList]);

  return (
    <div className="todo-wrapper">
      <Form addTodo={addTodo} />
      <TodoList todoList={todoList} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
