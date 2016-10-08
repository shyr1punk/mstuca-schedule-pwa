import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './index.css';
import App from './App';
import Menu from './Menu/Menu';
import GroupSchedule from './Schedule/GroupSchedule';
import TeacherSchedule from './Schedule/TeacherSchedule';
import NoMatch from './NoMatch';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Route path="groups/:groupId/schedule" component={GroupSchedule}/>
        <Route path="teachers/:teacherName/schedule" component={TeacherSchedule}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
