import React from 'react';
import Nav from '../../components/nav';
import Profile from '../../components/profile';
import About from '../../components/about';

import { Container, Section } from './styles';

const Home = ({ history, match }) => (
  <Container>
    <Nav match={match} history={history} />
    <Section>
      <Profile />
      <About />
    </Section>
  </Container>
);

export default Home;
