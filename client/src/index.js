// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// serviceWorker
import * as serviceWorker from './util/serviceWorker';
// Routers
import Login from './feature/authentication';
import Dashboard from './feature/dashboard';
// zzz
const routing = (
    <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect from='*' to='/login' />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
