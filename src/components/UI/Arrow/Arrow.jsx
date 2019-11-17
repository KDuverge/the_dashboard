import React from 'react';
import { Link } from 'react-router-dom';

import './Arrow.css';

const Arrow = () => {
  return (
    <Link to='/projects' className='arrow'>
      <i className='fas fa-chevron-circle-left' />
    </Link>
  );
};

export default Arrow;
