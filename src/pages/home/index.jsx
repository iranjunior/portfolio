import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Section } from './styles';
import Routes from '../../routes';
import 'react-toastify/dist/ReactToastify.css';


import Nav from '../../components/nav';
import Menu from '../../components/menu';
import Profile from '../../components/profile';
import { switchRoute } from './service';

const Home = () => {
  const [route, setRoute] = useState(Routes[0].component);

  useEffect(() => {
    setRoute(switchRoute(window.location.pathname));
  }, []);

  return (
    <Container id="home">
      <Nav />
      <Menu />
      <Section>
        <Profile />
        {route}
        <ToastContainer />
      </Section>
    </Container>

  );
};

export default Home;
