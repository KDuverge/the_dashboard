import { NotificationManager } from 'react-notifications';

import * as NotificationActionTypes from './actionTypes';

const DELAY = 3000;

export const notificationActions = action => {
  switch (action.type) {
    case NotificationActionTypes.TOAST_INFO:
      NotificationManager.info(action.payload, 'Info!', DELAY);
      break;
    case NotificationActionTypes.TOAST_SUCCESS:
      NotificationManager.success(action.payload, 'Success!', DELAY);
      break;
    case NotificationActionTypes.TOAST_DANGER:
      NotificationManager.error(action.payload, 'Oh no!', DELAY);
      break;
    case NotificationActionTypes.TOAST_WARNING:
      NotificationManager.warn(action.payload, 'Warning!', DELAY);
      break;
    default:
      return;
  }
};
