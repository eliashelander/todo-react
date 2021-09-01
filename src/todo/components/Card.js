import React from 'react';

const Card = ({ todo, toggleDone, deleteTodo }) => {
  const handleClickCard = e => {
    if (e.target.type !== 'button') {
      toggleDone(todo.id);
    }
  };

  const handleClickDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`card${todo.done ? ' card--done' : ''} box-shadow`} onClick={handleClickCard}>
      <h2 className={`card__title${todo.done ? ' card__title--done' : ''}`}>{todo.title}</h2>
      <p className="card__description">{todo.description}</p>
      <button className={`btn btn--delete${todo.done ? '' : ' is-hidden'}`} name="delete" type="button" onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default Card;
