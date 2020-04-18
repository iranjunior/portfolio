import 'react-toastify/dist/ReactToastify.css';
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Section } from './styles';

import Routes from '../../routes';

import Loading from '../../components/simples/loadding';
import Nav from '../../components/composes/nav';
import Menu from '../../components/composes/menu';
import Profile from '../../components/composes/profile';

const switchRoute = (
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

);

const Home = () => (
  <Container id="home">
    <Nav />
    <Menu />
    <Section>
      <Profile />
      <Suspense fallback={Loading}>
        {switchRoute}
      </Suspense>
      <ToastContainer />
    </Section>
  </Container>

);

export default Home;
