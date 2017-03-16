import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import login from './login'
import register from './register'
import homepage from './homepage'
import { Router, Route, browserHistory } from 'react-router'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={login}/>
      <Route path="/register" component={register}/>
      <Route path="/homepage" component={homepage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
