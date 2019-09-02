import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './pages/login/Login';
import Main from './pages/dashboard/main/Main';
import Forms from './pages/dashboard/form/Forms';

import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import sidebar from './utils/stores/sidebar';
import { Provider } from 'react-redux';

const reducers = combineReducers({sidebar});
const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
        <Provider store={store} >
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Main} />
                <Route path="/form" component={Forms} />
            </Router>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
