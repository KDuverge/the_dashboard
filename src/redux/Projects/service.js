import axios from 'axios';

import * as UIActionTypes from '../UI/actionTypes';
import * as ProjectsActionTypes from './actionTypes';
import * as NotificationActionTypes from '../Notification/actionTypes';

import { notificationActions } from '../Notification/actions';

import { Auth } from '../../services/authService';

import { PROJECT_ROUTE } from '../../constants';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.common['x-auth-token'] = Auth.getToken();

export const getProjects = () => dispatch => {
  dispatch({ type: UIActionTypes.LOADING_SPINNER_STARTED });
  dispatch({ type: ProjectsActionTypes.GET_PROJECTS_REQUEST });

  return axios
    .get(PROJECT_ROUTE)
    .then(({ data }) => {
      dispatch({
        type: ProjectsActionTypes.GET_PROJECTS_SUCCESS,
        payload: data.projects,
      });
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });
      return data.projects;
    })
    .catch(({ response }) => {
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });

      notificationActions({
        type: NotificationActionTypes.TOAST_DANGER,
        payload: response.data._status.msg,
      });
    });
};

export const createProject = (payload, dispatch) => {
  dispatch({ type: UIActionTypes.LOADING_SPINNER_STARTED });

  return axios
    .post(PROJECT_ROUTE, payload)
    .then(({ data }) => {
      dispatch({
        type: ProjectsActionTypes.CREATE_PROJECT_SUCCESS,
        payload: data.project,
      });

      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });

      notificationActions({
        type: NotificationActionTypes.TOAST_SUCCESS,
        payload: data._status.msg,
      });
      return data;
    })
    .catch(() => {
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });

      notificationActions({
        type: NotificationActionTypes.TOAST_DANGER,
        payload: 'Unable to create project!',
      });
    });
};
