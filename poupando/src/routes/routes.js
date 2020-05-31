import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/Login/Login';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;