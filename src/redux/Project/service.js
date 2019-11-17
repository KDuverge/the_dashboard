import axios from 'axios';

import * as ProjectActionTypes from './actionTypes';
import * as UIActionTypes from '../UI/actionTypes';
import * as NotificationActionTypes from '../Notification/actionTypes';

import { notificationActions } from '../Notification/actions';

import { PROJECT_ROUTE } from '../../constants/index';

export const getSingleProject = (id, dispatch) => {
  return axios
    .get(`${PROJECT_ROUTE}/${id}`)
    .then(({ data }) => {
      dispatch({
        type: ProjectActionTypes.GET_SINGLE_PROJECT,
        payload: data.project,
      });
    })
    .catch(({ response }) => {
      notificationActions({
        type: NotificationActionTypes.TOAST_DANGER,
        payload: response.data._status.msg,
      });
    });
};

export const updateProject = (id, payload, dispatch) => {
  return axios
    .put(`${PROJECT_ROUTE}/${id}`, payload)
    .then(({ data }) => {
      dispatch({
        type: ProjectActionTypes.UPDATE_PROJECT_SUCCESS,
        payload: data.project,
      });

      notificationActions({
        type: NotificationActionTypes.TOAST_SUCCESS,
        payload: data._status.msg,
      });
    })
    .catch(({ response }) => {
      notificationActions({
        type: NotificationActionTypes.TOAST_DANGER,
        payload: response.data._status.msg,
      });
    });
};

export const deleteProject = (id, dispatch) => {
  dispatch({ type: UIActionTypes.LOADING_SPINNER_STARTED });

  return axios
    .delete(`${PROJECT_ROUTE}/${id}`)
    .then(({ data }) => {
      dispatch({
        type: ProjectActionTypes.DELETE_PROJECT_SUCCESS,
        payload: id,
      });

      dispatch({ type: UIActionTypes.CLOSE_MODAL });
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });

      notificationActions({
        type: NotificationActionTypes.TOAST_SUCCESS,
        payload: data._status.msg,
      });
    })
    .catch(({ response }) => {
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });

      dispatch({
        type: ProjectActionTypes.DELETE_PROJECT_FAILED,
      });

      notificationActions({
        type: NotificationActionTypes.TOAST_DANGER,
        payload: 'Unable to delete project',
      });
    });
};
