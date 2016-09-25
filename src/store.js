import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import menuReducer from './reducers';
import scheduleReduser from './scheduleReduser';

export default createStore(combineReducers({
    menuReducer,
    scheduleReduser
  }),
  applyMiddleware(thunk)
);
