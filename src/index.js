import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import HomePage from './containers/HomePage'
import Test from './components/Test'
import reducer from './reducers'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="test" component={Test}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
