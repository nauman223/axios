import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Detailproduct from './Detailproduct';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/det"  component={Detailproduct} />
  
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
