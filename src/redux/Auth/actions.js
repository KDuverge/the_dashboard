import * as AuthService from './service';

import * as AuthActionTypes from './actionTypes';
import * as NotificationActionTypes from '../Notification/actionTypes';

import { notificationActions } from '../Notification/actions';

import { Auth } from '../../services/authService';

export const login = payload => dispatch =>
  AuthService.login(payload, dispatch);

export const setLogin = () => dispatch =>
  dispatch({ type: AuthActionTypes.AUTH_LOGIN_SUCCESS });

export const logout = () => dispatch => {
  Auth.removeToken();
  dispatch({ type: AuthActionTypes.AUTH_LOGOUT_SUCCESS });

  notificationActions({
    type: NotificationActionTypes.TOAST_SUCCESS,
    payload: 'Logged out successfully!',
  });
};
