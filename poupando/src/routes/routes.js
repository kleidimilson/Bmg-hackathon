import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/Dashboard';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;