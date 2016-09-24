import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import menuReducer from './reducers';

export default createStore(
  menuReducer,
  applyMiddleware(thunk)
);
