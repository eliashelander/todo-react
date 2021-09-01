import React, { useState } from 'react';
import Input from './Input';

const Form = ({ addTodo }) => {
  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
  });

  const [validationError, setValidationError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (!formValue.title) {
      setValidationError(true);
      return;
    }
    setValidationError(false);

    addTodo({
      title: formValue.title,
      description: formValue.description,
      done: false,
    });

    setFormValue({
      title: '',
      description: '',
    });
  };

  return (
    <div className="form-wrapper">
      <form className="form box-shadow" action="post" onSubmit={handleSubmit}>
        <Input inputName="title" label="Todo title" formValue={formValue} setFormValue={setFormValue} />
        <Input inputName="description" label="Describe your todo" formValue={formValue} setFormValue={setFormValue} />
        {validationError
          ? <p className="form__error">Must include a title</p>
          : null}
        <button className="btn btn--add" name="add" type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
