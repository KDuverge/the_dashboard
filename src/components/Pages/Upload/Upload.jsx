import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DashboardForm, Tags, Loader } from '../../UI';

import * as ProjectsActions from '../../../redux/Projects/actions';
import * as ProjectActions from '../../../redux/Project/actions';

const Upload = props => {
  const { isLoading, clearProjectState } = props;

  useEffect(() => {
    clearProjectState();
  }, [clearProjectState, props]);

  if (isLoading) return <Loader />;

  return (
    <>
      <DashboardForm type='Upload' />
      <Tags type='Upload' />
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  createProject: bindActionCreators(ProjectsActions.createProject, dispatch),
  clearProjectState: bindActionCreators(
    ProjectActions.clearProjectState,
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
