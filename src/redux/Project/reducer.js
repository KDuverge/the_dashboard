import * as ProjectActionTypes from './actionTypes';

const initialState = {
  title: '',
  image_url: '',
  github_link: '',
  website_link: '',
  description: '',
  tags: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProjectActionTypes.GET_SINGLE_PROJECT:
      return { ...action.payload };
    case ProjectActionTypes.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ProjectActionTypes.UPDATE_TAG_SUCCESS:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case ProjectActionTypes.CLEAR_PROJECT_STATE:
      return initialState;
    case ProjectActionTypes.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag !== action.payload),
      };
    default:
      return state;
  }
};

export default projectReducer;
