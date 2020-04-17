import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Home from './pages/Home'
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";

let hist = createMemoryHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>

      <Route path="/home" component={Home} />
      <Route path="/" component={App} />

    </Switch>
  </Router>,
  document.getElementById('root')
);

