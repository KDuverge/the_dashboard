import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ProjectActions from '../../../redux/Project/actions';

import ModalShroud from './ModalShroud';

import './Modal.css';

const Prompt = ({ deleteProject, closeModal, history }) => {
  return (
    <div className='modal-container'>
      <h4>Are you sure you want to delete this Project?</h4>
      <div className='modal-button-container'>
        <button
          onClick={() => {
            deleteProject().then(() => {
              history.push('/');
            });
          }}
        >
          Yes
        </button>
        <button onClick={() => closeModal()}>No</button>
      </div>
    </div>
  );
};

const Modal = ({
  isModalOpen,
  closeModal,
  deleteProject,
  project,
  history,
}) => {
  const prompt = (
    <Prompt
      deleteProject={() => deleteProject(project._id)}
      closeModal={closeModal}
      history={history}
    />
  );

  return (
    isModalOpen && (
      <ModalShroud isModalOpen={isModalOpen} closeModal={closeModal}>
        {prompt}
      </ModalShroud>
    )
  );
};

const mapStateToProps = state => ({
  isModalOpen: state.ui.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  deleteProject: bindActionCreators(ProjectActions.deleteProject, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
