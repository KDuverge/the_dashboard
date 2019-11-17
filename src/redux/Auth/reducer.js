import * as AuthActionTypes from './actionTypes';

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
      };
    case AuthActionTypes.AUTH_LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
