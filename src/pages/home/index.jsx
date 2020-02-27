import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Section } from './styles';
import Routes from '../../routes';
import 'react-toastify/dist/ReactToastify.css';


import Nav from '../../components/nav';
import Menu from '../../components/menu';
import Profile from '../../components/profile';

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
      {switchRoute}
      <ToastContainer />
    </Section>
  </Container>

);

export default Home;
