import React from 'react'
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
              <Route path="profile"  component={App} />
          </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
