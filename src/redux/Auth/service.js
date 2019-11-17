import axios from 'axios';

import * as UIActionTypes from '../UI/actionTypes';
import * as AuthActionTypes from './actionTypes';
import * as NotificationActionTypes from '../Notification/actionTypes';

import * as ProjectsActions from '../Projects/actions';
import { notificationActions } from '../Notification/actions';

import { AUTH_ROUTE_LOGIN } from '../../constants/index';

import { Auth } from '../../services/authService';

export const login = (payload, dispatch) => {
  dispatch({ type: UIActionTypes.LOADING_SPINNER_STARTED });

  return axios
    .post(`${AUTH_ROUTE_LOGIN}`, payload)
    .then(({ data }) => {
      Auth.storeToken(data.token);

      dispatch({
        type: AuthActionTypes.AUTH_LOGIN_SUCCESS,
      });

      ProjectsActions.getProjects(dispatch);

      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });
      notificationActions({
        type: NotificationActionTypes.TOAST_SUCCESS,
        payload: 'Logged in Successfully!',
      });
    })
    .catch(() => {
      dispatch({ type: UIActionTypes.LOADING_SPINNER_FINISHED });
      notificationActions({
        type: NotificationActionTypes.TOAST_SUCCESS,
        payload: 'Unable to login!',
      });
    });
};
