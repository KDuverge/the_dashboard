import React from 'react';
import { connect } from 'react-redux';

import { Badge, ProjectsWrapper } from '../../UI';

const Projects = ({ projects }) => {
  return (
    <>
      <Badge text='Projects' count={projects.length} />
      <ProjectsWrapper data={projects} />
    </>
  );
};

const mapStateToProps = state => ({
  projects: state.projects,
});

export default connect(mapStateToProps, null)(Projects);
