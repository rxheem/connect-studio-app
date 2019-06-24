import React from 'react';

const Input = props => {
  return (
    <div className='control'>
      <input
        className='input'
        type={props.type}
        placeholder={props.placeholder}
        checked={props.checked}
        type={props.type}
        accept={props.accept}
        alt={props.alt}
        disabled={props.disabled}
        form={props.form}
        max={props.max}
        min={props.min}
        id={props.id}
        name={props.name}
        value={props.value}
        required={props.required}
        pattern={props.pattern}
        autoFocus={props.autofocus}
      />
    </div>
  );
};

export default Input;
