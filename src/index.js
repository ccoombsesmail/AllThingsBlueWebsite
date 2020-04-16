import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './pages/App';
import Home from './pages/Home'

// import browserHistory from 'history/createBrowserHistory'
// import { Router, Route, Link, IndexRoute, Switch } from 'react-router'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <App/>
      </Route>
    </Switch>

  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
