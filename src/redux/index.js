import { combineReducers } from 'redux';

import ui from './UI/reducer';
import projects from './Projects/reducer';
import project from './Project/reducer';
import auth from './Auth/reducer';

const rootReducer = combineReducers({
  ui,
  projects,
  project,
  auth,
});

export default rootReducer;
