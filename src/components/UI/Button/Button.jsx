import React from 'react';

import './Button.css';

const Button = ({ type, className = '', onClick }) => {
  const isDelete = type === 'Delete';
  return (
    <button
      type='submit'
      onClick={onClick ? onClick : null}
      className={className}
    >
      {isDelete ? <i className='far fa-trash-alt fa-2x' /> : type}
    </button>
  );
};

export default Button;
