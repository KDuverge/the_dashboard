import * as ProjectsActionTypes from './actionTypes';
import * as ProjectActionTypes from '../Project/actionTypes';

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case ProjectsActionTypes.CREATE_PROJECT_SUCCESS:
      return [...state, action.payload];
    case ProjectsActionTypes.GET_PROJECTS_SUCCESS:
      return [...action.payload];
    case ProjectsActionTypes.GET_PROJECTS_FAILED:
      return state;
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      return state.filter(project => project._id !== action.payload);
    default:
      return state;
  }
};

export default projectsReducer;
