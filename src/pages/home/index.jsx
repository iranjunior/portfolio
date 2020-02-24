import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Container, Section } from './styles';
import Routes from '../../routes';

import Nav from '../../components/nav';
import Menu from '../../components/menu';
import Profile from '../../components/profile';

const Home = () => (
  <BrowserRouter>
    <Container>
      <Nav />
      <Menu />
      <Section>
        <Profile />
        <Switch>
          {
            Routes.map((route) => (
              <Route
                key={route.title}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))
          }
        </Switch>
      </Section>
    </Container>
  </BrowserRouter>

);

export default Home;
