import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Skills from './pages/skills';
import Formation from './pages/formation';
import Portfolio from './pages/portfolio';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/skills" exact component={Skills} />
      <Route path="/formation" exact component={Formation} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
