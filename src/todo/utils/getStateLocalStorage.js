const getStateLocalStorage = () => {
  const savedTodoList = window.localStorage.getItem('todoList');
  return JSON.parse(savedTodoList);
};

export default getStateLocalStorage;
