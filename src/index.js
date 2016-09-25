import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';
import Menu from './Menu';
import Schedule from './Schedule';
import NoMatch from './NoMatch';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Menu}/>
        <Route path="schedule/:groupId" component={Schedule}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
