import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Home from './Home'

// import browserHistory from 'history/createBrowserHistory'
// import { Router, Route, Link, IndexRoute, Switch } from 'react-router'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Router history={browserHistory}>
  <Router>
    {/* <Link to="/home">Home</Link> */}
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <App/>
      </Route>
    </Switch>

      {/* <Route path="home" component={Home} /> */}
    {/* </Route> */}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
