import React from 'react';

import './Badge.css';

const Badge = ({ count, text }) => {
  return (
    <div className='badge-container'>
      {text}
      <span className='badge-count'>{count}</span>
    </div>
  );
};

export default Badge;
