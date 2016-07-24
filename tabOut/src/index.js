import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Tabs from './components/Tabs';
import Inventory from './components/Inventory';
import Dashboard from './components/Dashboard';
import './index.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/tabs" component={Tabs} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/dashboard" component={Dashboard} />
    </Router>
), document.getElementById('root'))
