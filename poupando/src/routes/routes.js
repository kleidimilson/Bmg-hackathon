import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Main from '../pages/Main/index';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/cadastro/Cadastro';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/cadastro" exact component={Cadastro} />
    <Route path="/dashboard" component={Main} />
  </Switch>
);

export default Routes;