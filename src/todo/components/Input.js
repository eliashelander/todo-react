import React from 'react';

const Input = ({
  inputName, label, formValue, setFormValue,
}) => {
  const handleChange = e => {
    const { name } = e.target;

    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

  return (
    <>
      <label className="form__label" htmlFor={inputName}>
        {label}
        <input className="form__input" id={inputName} type="text" name={inputName} value={formValue[inputName]} onChange={handleChange} />
      </label>
    </>
  );
};

export default Input;
