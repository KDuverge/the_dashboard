import * as UIActionTypes from './actionTypes';

export const startLoading = () => ({
  type: UIActionTypes.LOADING_SPINNER_STARTED,
});
export const finishLoading = () => ({
  type: UIActionTypes.LOADING_SPINNER_FINISHED,
});

export const openModal = name => dispatch =>
  dispatch({
    type: UIActionTypes.OPEN_MODAL,
    payload: name,
  });

export const closeModal = name => dispatch =>
  dispatch({
    type: UIActionTypes.CLOSE_MODAL,
    payload: name,
  });
