import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Container, Section } from './pages/home/styles';
import Nav from './components/nav';
import Menu from './components/menu';
import About from './components/about';
import Skills from './components/skills';
import Profile from './components/profile';
import Formation from './components/formation';
import Portfolio from './components/portfolio';

const Routes = () => (
  <BrowserRouter>
    <Route path="/">
      <Container>
        <Nav />
        <Menu />
        <Section>
          <Profile />
          <Switch>
            <Route path="" exact component={About} />
            <Route path="skills" exact component={Skills} />
            <Route path="formation" exact component={Formation} />
            <Route path="portfolio" exact component={Portfolio} />
          </Switch>
        </Section>
      </Container>
    </Route>
  </BrowserRouter>

);

export default Routes;
