import React from 'react';

import './Image.css';

const Image = ({ imageUrl, title }) => {
  return (
    <picture className='update-image'>
      <source srcSet={imageUrl} />
      <img alt={title} src={imageUrl} />
    </picture>
  );
};

export default Image;
