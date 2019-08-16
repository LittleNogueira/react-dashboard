import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './pages/login/Login';
import Main from './pages/dashboard/main/Main';

ReactDOM.render(
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Main} />
        </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
