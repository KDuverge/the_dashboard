import React from 'react';

import './SingleProject.css';

const SingleProject = ({ project }) => {
  return (
    <figure className='single-project-container'>
      <img
        className='single-project-image'
        alt={project.title}
        src={project.image_url}
      />
      <figcaption className='single-project-title'>{project.title}</figcaption>
    </figure>
  );
};

export default SingleProject;
