import { createStore, applyMiddleware } from 'redux';
import rootReducer from  './reducers/rootReducer';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';


let middlewares = [apiMiddleware];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

export default(initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}
