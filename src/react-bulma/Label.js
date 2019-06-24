import React from 'react';

const Label = props => {
  return (
    <label for={props.for} className='label' form={props.form}>
      {props.text}
    </label>
  )
}

export default Label;
