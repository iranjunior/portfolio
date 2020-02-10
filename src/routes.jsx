import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Skills from './pages/skills';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/skills" exact component={Skills} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
