import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, Section } from './styles';
import Routes from '../../routes';
import 'react-toastify/dist/ReactToastify.css';


import Nav from '../../components/nav';
import Menu from '../../components/menu';
import Profile from '../../components/profile';

const Home = () => (
  <Container id="home">
    <Nav />
    <Menu />
    <Section>
      <Profile />
      <BrowserRouter>
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
      </BrowserRouter>
      <ToastContainer />
    </Section>
  </Container>

);

export default Home;
