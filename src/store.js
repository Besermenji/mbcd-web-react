import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers/rootReducer';
import logger from 'redux-logger';

let middlewares = [];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export default(initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
