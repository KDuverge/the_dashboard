import * as UIActionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  isModalOpen: false,
  modalType: null,
  path: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UIActionTypes.LOADING_SPINNER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case UIActionTypes.LOADING_SPINNER_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    case UIActionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.payload,
      };
    case UIActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalType: null,
      };

    default:
      return state;
  }
};

export default uiReducer;
