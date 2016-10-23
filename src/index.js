import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {render} from 'react-dom'
import App from './components/App'
import Home from './components/Home'
import CreateEvent from './components/CreateEvent'
import EventList from './components/EventList'
import Login from './components/Login'
import Signup from './components/Signup'
import AddOrganization from './components/AddOrganization'

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="create-event" component={CreateEvent}/>
            <Route path="create-org" component={AddOrganization}/>
            <Route path="event-list" component={EventList}/>
            <Route path="event/:evendId" component={EventList}/>
            <Route path="login" component={Login}/>
            <Route path="signup" component={Signup}/>
        </Route>
    </Router>    ,
    document.getElementById('root')
);
