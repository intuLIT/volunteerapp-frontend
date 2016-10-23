import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import Home from './components/Home'
import Test from './components/Test'
import CreateEvent from './components/CreateEvent'
import Login from './components/Login'
import Signup from './components/Signup'
import reducer from './reducers'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="test" component={Test}/>
                <Route path="create" component={CreateEvent}/>
                <Route path="login" component={Login}/>
                <Route path="signup" component={Signup}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);