const saveStateLocalStorage = todoList => {
  window.localStorage.setItem('todoList', JSON.stringify(todoList));
};

export default saveStateLocalStorage;
