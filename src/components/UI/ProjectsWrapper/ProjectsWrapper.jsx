import React from 'react';
import { Link } from 'react-router-dom';

import SingleProject from '../SingleProject/SingleProject';

import './ProjectsWrapper.css';

const Projects = ({ data: projects }) => {
  return (
    <div className='projects-container'>
      {!projects.length && <div className='no-projects'>No Projects...</div>}
      {projects.map(project => (
        <Link to={`/projects/${project._id}`} key={project._id}>
          <SingleProject key={project._id} project={project} />
        </Link>
      ))}
    </div>
  );
};

export default Projects;
