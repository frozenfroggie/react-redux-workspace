import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash/throttle';
import combinedReducers from '../reducers/index';
import { loadState, saveState } from './localStorage';
import thunk from 'redux-thunk';

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    combinedReducers,
    persistedState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000));

  return store;
};

export default configureStore;
