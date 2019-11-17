import * as ProjectsService from './service';

export const getProjects = dispatch => ProjectsService.getProjects(dispatch);

export const createProject = payload => dispatch =>
  ProjectsService.createProject(payload, dispatch);
