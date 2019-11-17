import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Arrow, Button, DashboardForm, Loader, Modal, Tags } from '../../UI';

import * as ProjectActions from '../../../redux/Project/actions';
import * as UIActions from '../../../redux/UI/actions';

class Update extends Component {
  async componentDidMount() {
    const { match, getSingleProject } = this.props;
    const { id } = match.params;
    await getSingleProject(id);
  }

  render() {
    const {
      isLoading,
      project,
      history,
      deleteProject,
      openModal,
      closeModal,
    } = this.props;

    if (isLoading) return <Loader />;

    return (
      <>
        <Arrow />
        <Button
          type='Delete'
          className='delete'
          onClick={() => openModal('DELETE')}
        />
        <DashboardForm history={history} type='Update' />
        <Tags type='Update' />
        <Modal
          history={history}
          project={project}
          onClick={deleteProject}
          closeModal={closeModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
  project: state.project,
});

const mapDispatchToProps = dispatch => ({
  getSingleProject: bindActionCreators(
    ProjectActions.getSingleProject,
    dispatch,
  ),
  deleteProject: bindActionCreators(ProjectActions.deleteProject, dispatch),
  openModal: bindActionCreators(UIActions.openModal, dispatch),
  closeModal: bindActionCreators(UIActions.closeModal, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
