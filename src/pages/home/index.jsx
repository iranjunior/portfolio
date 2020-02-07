import React from 'react';
import Nav from '../../components/nav';
import Profile from '../../components/profile';

import { Container, Section } from './styles';

const Home = () => (
  <Container>
    <Nav />
    <Section>
      <Profile />
    </Section>
  </Container>
);

export default Home;
