import React from 'react';

const Form = props => {
  return (
    <div className='form' role='form'>
      {props.children}
    </div>
  )
}

export default Form;
