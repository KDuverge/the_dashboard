import * as ProjectService from './service';

import * as ProjectActionTypes from './actionTypes';

import * as ProjectsActions from '../Projects/actions';

export const getSingleProject = id => dispatch =>
  ProjectService.getSingleProject(id, dispatch);

export const updateProject = (id, payload) => dispatch =>
  ProjectService.updateProject(id, payload, dispatch);

export const deleteProject = id => async dispatch => {
  await ProjectService.deleteProject(id, dispatch);
  ProjectsActions.getProjects(dispatch);
};
export const clearProjectState = () => dispatch =>
  dispatch({ type: ProjectActionTypes.CLEAR_PROJECT_STATE });

export const updateTag = (tag, tags) => dispatch => {
  dispatch({
    type: ProjectActionTypes.UPDATE_TAG_REQUEST,
  });

  tag = tag.trim();

  if (tags.indexOf(tag) > -1 || tag.length <= 0) {
    dispatch({
      type: ProjectActionTypes.UPDATE_TAG_FAILED,
    });
    return;
  }

  dispatch({
    type: ProjectActionTypes.UPDATE_TAG_SUCCESS,
    payload: tag,
  });
};

export const removeTag = tag => dispatch =>
  dispatch({
    type: ProjectActionTypes.REMOVE_TAG,
    payload: tag,
  });
