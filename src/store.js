import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import menuReducer from './Menu/menuReducer';
import scheduleReduser from './Schedule/scheduleReduser';

export default createStore(combineReducers({
    menuReducer,
    scheduleReduser
  }),
  applyMiddleware(thunk)
);
