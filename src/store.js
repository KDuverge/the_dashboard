import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './redux/index';

import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancer(middleware));
